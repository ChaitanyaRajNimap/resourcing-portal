import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import AppStyles from "@/utils/AppStyles";
import Colors from "@/utils/Colors";
import ScaleSize from "@/utils/Scaling";

export default function DrawerLayout() {
  return (
    <>
      <GestureHandlerRootView style={AppStyles.rootContainer}>
        <Drawer
          screenOptions={{
            headerShown: true,
            headerStyle: styles.header,
            headerTintColor: Colors.BLUE100,
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Masters",
              title: "Masters",
            }}
          />

          <Drawer.Screen
            name="setting"
            options={{
              drawerLabel: "Setting",
              title: "Setting",
            }}
          />

          <Drawer.Screen
            name="process"
            options={{
              drawerLabel: "Process",
              title: "Process",
            }}
          />

          <Drawer.Screen
            name="invoice"
            options={{
              drawerLabel: "Invoice",
              title: "Invoice",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE100,
    borderBottomColor: Colors.GREY100,
    borderBottomWidth: ScaleSize(1),
  },
});
