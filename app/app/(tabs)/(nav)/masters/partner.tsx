import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Partner() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Partner" });
  }, []);

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Partner Screen</Text>
      </View>
    </Screen>
  );
}
