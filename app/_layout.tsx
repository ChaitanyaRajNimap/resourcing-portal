import { Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const RootLayout = () => {
  return (
    <AuthProvider>
      <AuthRedirect />
    </AuthProvider>
  );
};

const AuthRedirect = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading) {
        router.replace(user ? "/app/(tabs)/home" : "/auth/signin");
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [user, loading]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
