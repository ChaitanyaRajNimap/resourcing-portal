import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Home() {
  const { signOut } = useAuth();
  const router = useRouter();

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Button
          title="Go to profile"
          onPress={() => {
            router.navigate("/app/profile");
          }}
        />
        <Text style={AppStyles.heading}>Welcome to Home!</Text>
        <Button title="Sign Out" onPress={signOut} />
      </View>
    </Screen>
  );
}
