import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Joining() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Joining" });
  }, []);

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Joining Screen</Text>
      </View>
    </Screen>
  );
}
