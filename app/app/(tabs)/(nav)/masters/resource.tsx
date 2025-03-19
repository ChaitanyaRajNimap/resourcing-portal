import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";

export default function Resource() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Resource" });
  }, []);

  return (
    <Screen>
      <View style={AppStyles.container}>
        <Text style={AppStyles.heading}>Resource Screen</Text>
      </View>
    </Screen>
  );
}
