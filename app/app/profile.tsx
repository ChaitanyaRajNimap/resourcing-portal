import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Profile() {
  const router = useRouter();

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Profile Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </Screen>
  );
}
