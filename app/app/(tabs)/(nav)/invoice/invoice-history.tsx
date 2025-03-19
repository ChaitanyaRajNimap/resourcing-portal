import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function InvoiceHistory() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Invoice History" });
  }, []);

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Invoice History Screen</Text>
      </View>
    </Screen>
  );
}
