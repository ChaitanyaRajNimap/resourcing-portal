import React, { ReactNode } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import AppStyles from "@/utils/AppStyles";

interface ScreenProps {
  children: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={AppStyles.rootContainer}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default Screen;
