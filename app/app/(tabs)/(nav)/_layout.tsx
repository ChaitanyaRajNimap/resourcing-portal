import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawerContent";
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
            headerStyle: styles.header,
            headerTintColor: Colors.BLUE100,
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="masters/partner"
            options={{
              title: "Partner",
              headerStyle: styles.header,
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
