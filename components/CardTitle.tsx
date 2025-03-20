import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScaleSize from "@/utils/Scaling";
import Colors from "@/utils/Colors";

type CardTitleProps = {
  value: string;
  period?: string;
};

const CardTitle: React.FC<CardTitleProps> = ({ value, period }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
          {value}
        </Text>
        {period && (
          <Text style={styles.period} numberOfLines={1} ellipsizeMode="tail">
            {period}
          </Text>
        )}
      </View>
      <Text style={styles?.headingBorder}></Text>
    </View>
  );
};

export default CardTitle;

const styles = StyleSheet.create({
  headingContainer: { flexDirection: "row", alignItems: "center" },
  heading: {
    width: "70%",
    color: Colors.BLACK100,
    fontSize: ScaleSize(23),
    fontWeight: "bold",
  },
  period: {
    width: "30%",
    color: Colors.GREY200,
    fontSize: ScaleSize(23),
    fontWeight: "bold",
  },
  headingBorder: {
    width: ScaleSize(40),
    borderBottomColor: Colors.BLUE100,
    borderBottomWidth: ScaleSize(5),
    borderBottomLeftRadius: ScaleSize(10),
    borderBottomRightRadius: ScaleSize(10),
    marginBottom: ScaleSize(10),
    backgroundColor: Colors.BLUE100,
    lineHeight: 0,
    overflow: "hidden",
  },
});
