import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Dashboard() {
  const { signOut } = useAuth();
  const router = useRouter();

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Welcome to Dashboard!</Text>
        <Button title="Sign Out" onPress={signOut} />
      </View>
    </Screen>
  );
}
