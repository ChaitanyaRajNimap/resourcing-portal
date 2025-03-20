import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "@/utils/Colors";
import ScaleSize from "@/utils/Scaling";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.BLUE100,
        tabBarInactiveTintColor: Colors.GREY100,
      }}
      initialRouteName="dashboard"
    >
      <Tabs.Screen
        name="(nav)"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={ScaleSize(30)} name="explore" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={ScaleSize(30)}
              name="dashboard"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={ScaleSize(30)} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
