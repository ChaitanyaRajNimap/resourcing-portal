import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Invoice() {
  const router = useRouter();

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Invoice Screen</Text>
      </View>
    </Screen>
  );
}
