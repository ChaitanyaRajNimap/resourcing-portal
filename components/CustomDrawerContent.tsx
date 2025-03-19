import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { List } from "react-native-paper";
import { useRouter } from "expo-router";
import Colors from "@/utils/Colors";
import ScaleSize from "@/utils/Scaling";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const [expanded, setExpanded] = useState<string | null>("Masters");
  const router = useRouter();

  const toggleAccordion = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* <DrawerItem label="Home" onPress={() => {}} /> */}

        <List.Accordion
          title="Masters"
          expanded={expanded === "Masters"}
          onPress={() => toggleAccordion("Masters")}
          style={
            expanded === "Masters"
              ? styles.activeAccordion
              : styles.inactiveAccordion
          }
          titleStyle={
            expanded === "Masters"
              ? styles.activeAccordionText
              : styles.inactiveAccordionText
          }
          right={() => (
            <List.Icon
              icon={expanded === "Masters" ? "chevron-up" : "chevron-down"}
              color={expanded === "Masters" ? Colors.WHITE100 : Colors.BLACK100}
            />
          )}
        >
          <List.Item
            title="Partner"
            onPress={() => router.push("/app/(tabs)/(nav)/masters/partner")}
            left={() => (
              <List.Icon
                icon="handshake"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
          <List.Item
            title="Resource"
            onPress={() => router.push("/app/(tabs)/(nav)/masters/resource")}
            left={() => (
              <List.Icon
                icon="folder"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
        </List.Accordion>

        <List.Accordion
          title="Setting"
          expanded={expanded === "Setting"}
          onPress={() => toggleAccordion("Setting")}
          style={
            expanded === "Setting"
              ? styles.activeAccordion
              : styles.inactiveAccordion
          }
          titleStyle={
            expanded === "Setting"
              ? styles.activeAccordionText
              : styles.inactiveAccordionText
          }
          right={() => (
            <List.Icon
              icon={expanded === "Setting" ? "chevron-up" : "chevron-down"}
              color={expanded === "Setting" ? Colors.WHITE100 : Colors.BLACK100}
            />
          )}
        >
          <List.Item
            title="Email"
            onPress={() => router.push("/app/(tabs)/(nav)/setting/email")}
            left={() => (
              <List.Icon
                icon="email-edit"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
          <List.Item
            title="User"
            onPress={() => router.push("/app/(tabs)/(nav)/setting/user")}
            left={() => (
              <List.Icon
                icon="account-cog"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
        </List.Accordion>

        <List.Accordion
          title="Process"
          expanded={expanded === "Process"}
          onPress={() => toggleAccordion("Process")}
          style={
            expanded === "Process"
              ? styles.activeAccordion
              : styles.inactiveAccordion
          }
          titleStyle={
            expanded === "Process"
              ? styles.activeAccordionText
              : styles.inactiveAccordionText
          }
          right={() => (
            <List.Icon
              icon={expanded === "Process" ? "chevron-up" : "chevron-down"}
              color={expanded === "Process" ? Colors.WHITE100 : Colors.BLACK100}
            />
          )}
        >
          <List.Item
            title="Interview"
            onPress={() => router.push("/app/(tabs)/(nav)/process/interview")}
            left={() => (
              <List.Icon
                icon="account-tie"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
          <List.Item
            title="Joining"
            onPress={() => router.push("/app/(tabs)/(nav)/process/joining")}
            left={() => (
              <List.Icon
                icon="account-plus"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
        </List.Accordion>

        <List.Accordion
          title="Invoice"
          expanded={expanded === "Invoice"}
          onPress={() => toggleAccordion("Invoice")}
          style={
            expanded === "Invoice"
              ? styles.activeAccordion
              : styles.inactiveAccordion
          }
          titleStyle={
            expanded === "Invoice"
              ? styles.activeAccordionText
              : styles.inactiveAccordionText
          }
          right={() => (
            <List.Icon
              icon={expanded === "Invoice" ? "chevron-up" : "chevron-down"}
              color={expanded === "Invoice" ? Colors.WHITE100 : Colors.BLACK100}
            />
          )}
        >
          <List.Item
            title="Invoice Status"
            onPress={() =>
              router.push("/app/(tabs)/(nav)/invoice/invoice-status")
            }
            left={() => (
              <List.Icon
                icon="file-chart"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
          <List.Item
            title="Invoice History"
            onPress={() =>
              router.push("/app/(tabs)/(nav)/invoice/invoice-history")
            }
            left={() => (
              <List.Icon
                icon="file-clock"
                style={styles.listItemIcon}
                color={Colors.BLUE100}
              />
            )}
          />
        </List.Accordion>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  activeAccordion: {
    backgroundColor: Colors.BLUE100,
    borderRadius: ScaleSize(10),
  },
  inactiveAccordion: {
    backgroundColor: Colors.WHITE100,
    borderRadius: ScaleSize(10),
  },
  activeAccordionText: { color: Colors.WHITE100 },
  inactiveAccordionText: { color: Colors.BLACK100 },
  listItemIcon: { marginLeft: ScaleSize(15) },
});
