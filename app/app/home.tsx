import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";
import AppStyles from "@/utils/AppStyles";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View style={AppStyles.container}>
      <Text>Welcome to Home!</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
