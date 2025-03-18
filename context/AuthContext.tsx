import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import * as SecureStore from "expo-secure-store";

interface User {
  token: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    const token = await SecureStore.getItemAsync("authToken");
    if (token) setUser({ token });
    setLoading(false);
  };

  const signIn = async (token: string) => {
    await SecureStore.setItemAsync("authToken", token);
    setUser({ token });
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("authToken");
    setUser(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
