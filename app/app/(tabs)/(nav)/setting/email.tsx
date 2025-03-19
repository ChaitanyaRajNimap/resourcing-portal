import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Email() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Email" });
  }, []);

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Email Screen</Text>
      </View>
    </Screen>
  );
}
