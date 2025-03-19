import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Setting() {
  const router = useRouter();

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Setting Screen</Text>
      </View>
    </Screen>
  );
}
