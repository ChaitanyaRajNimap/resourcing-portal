import { View, Text, ActivityIndicator } from "react-native";
import AppStyles from "@/utils/AppStyles";
import Colors from "@/utils/Colors";

export default function SplashScreen() {
  return (
    <View style={AppStyles.container}>
      <ActivityIndicator size="large" color={Colors.BLUE100} />
      <Text>Loading...</Text>
    </View>
  );
}
