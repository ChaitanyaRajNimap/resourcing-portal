import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";
import AppStyles from "@/utils/AppStyles";

export default function SignIn() {
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn("dummy_token");
  };

  return (
    <View style={AppStyles.container}>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}
