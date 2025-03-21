import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import AppStyles from "@/utils/AppStyles";
import Colors from "@/utils/Colors";
import ScaleSize from "@/utils/Scaling";
import CardTitle from "@/components/CardTitle";
import CardBlueButton from "@/components/CardBlueButton";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function Dashboard() {
  const { signOut } = useAuth();
  const router = useRouter();
  const [topClients, setTopClients] = useState<any>([]);
  const [notes, setNotes] = useState<any>([]);
  const [resources, setResources] = useState<any>([]);
  const [resourceContractEnd, setResourceContractEnd] = useState<any>([]);
  const [purchaseOrderEnd, setPurchaseOrderEnd] = useState<any>([]);
  const [clientAgreementEnd, setClientAgreementEnd] = useState<any>([]);

  const topClientsData = [
    {
      id: 1,
      clientName: "Link Intime India Pvt Ltd",
      numberOfResources: 16,
    },
    {
      id: 2,
      clientName: "Network 18",
      numberOfResources: 7,
    },
    {
      id: 3,
      clientName: "Transformhub Pte Ltd",
      numberOfResources: 5,
    },
    {
      id: 4,
      clientName: "Appflix Studio LLP (CarInfo)",
      numberOfResources: 4,
    },
    {
      id: 5,
      clientName: "SEETHA MAHALAKSHMI HEALTHCARE PRIVATE LIMITED (Vizzhy)",
      numberOfResources: 4,
    },
    {
      id: 6,
      clientName: "Validus Fintech Services Private Limited",
      numberOfResources: 3,
    },

    {
      id: 7,
      clientName: "Bookit Digital Technologies Private Limited",
      numberOfResources: 3,
    },
    {
      id: 8,
      clientName: "EKVINTI TECHNOLOGIES PRIVATE LIMITED (Mediaqart)",
      numberOfResources: 2,
    },
    {
      id: 9,
      clientName: "Muthoot EXIM Pvt. Ltd.",
      numberOfResources: 2,
    },
    {
      id: 10,
      clientName: "INDIA SHELTER FINANCE CORPORATION LIMITED",
      numberOfResources: 2,
    },
    {
      id: 11,
      clientName: "IKSULA SERVICES PRIVATE LIMITED (Ambab)",
      numberOfResources: 2,
    },
  ];

  const notesData = [
    {
      id: 1,
      label: "ID8 backlog",
      createdBy: "Added By: Sagar / Last Modified: 2 Apr 2020",
    },
    {
      id: 2,
      label: "Cortex backlog",
      createdBy: "Added By: Priyank / Last Modified: 12 Oct 2020",
    },
    {
      id: 3,
      label: "Need to close fiberstory backlog",
      createdBy: "Added By: Sagar / Last Modified: 2 Feb 2022",
    },
    {
      id: 4,
      label: "Need more projects",
      createdBy: "Added By: Priyank / Last Modified: 2 Feb 2022",
    },
    {
      id: 5,
      label: "IOS backlog",
      createdBy: "Added By: Sagar / Last Modified: 2 Apr 2020",
    },
    {
      id: 6,
      label: "Android backlog",
      createdBy: "Added By: Sagar / Last Modified: 2 Apr 2020",
    },
  ];

  const resourcesData = [
    {
      id: 1,
      name: "Sourbh Ladd",
      emailId: "nikhil.v@nimapinfotech.com",
      mobile: "9292929292	",
      address: "Indore",
      technology: "React JS",
      vendorName: "Cariva Technologies",
      experience: 5,
      sr: "--",
      cv: "",
      idel: "--",
    },
    {
      id: 2,
      name: "Jitendra Gaikwad",
      emailId: "--",
      mobile: "9370657529	",
      address: "Pune",
      technology: ".Net",
      vendorName: "BrillianTech",
      experience: 7,
      sr: "--",
      cv: "",
      idel: "--",
    },
  ];

  const resourceContractEndData = [
    {
      id: 1,
      name: "Surendra Vishwakarma",
      endDate: "14 Apr 2025",
    },
    {
      id: 2,
      name: "Aryan Shaikh",
      endDate: "10 Apr 2025",
    },
    {
      id: 3,
      name: "Salman Naqvi",
      endDate: "2 Apr 2025",
    },
    {
      id: 4,
      name: "Rohan Kamble",
      endDate: "1 Apr 2025",
    },
    {
      id: 5,
      name: "Mohammed Aizaz Ahamed (Data Engineer with AWS and Python)",
      endDate: "22 Mar 2025",
    },
    {
      id: 6,
      name: "Suhel Qamar",
      endDate: "27 Mar 2025",
    },
    {
      id: 7,
      name: "Paresh Radadiya (Angular)",
      endDate: "4 Apr 2025",
    },
    {
      id: 8,
      name: "Abhishek Desale",
      endDate: "12 Apr 2025",
    },
    {
      id: 9,
      name: "Irfan Pathan",
      endDate: "17 Apr 2025",
    },
  ];

  const clientAgreementEndData = [
    {
      id: 1,
      name: "Xebia",
      endDate: "31 Mar 2025",
    },
    {
      id: 2,
      name: "MEDIA.NET SOFTWARE SERVICES (INDIA) PRIVATE LIMITED",
      endDate: "3 Apr 2025",
    },
    {
      id: 3,
      name: "RURUX TECHNOLOGIES PRIVATE LIMITED",
      endDate: "31 Mar 2025",
    },
    {
      id: 4,
      name: "ESDA INFOTECH",
      endDate: "6 Apr 2025",
    },
  ];

  const renderClientItem = ({ item }: any) => {
    return (
      <View style={styles?.clientRow}>
        <Text
          style={styles.clientRowText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item?.clientName}
        </Text>

        <Text
          style={styles.clientRowValue}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item?.numberOfResources}
        </Text>
      </View>
    );
  };

  const renderNotesItem = ({ item }: any) => {
    return (
      <View style={styles.notesItem}>
        <View style={styles.notesItemTextContainer}>
          <Text
            style={styles.notesLabel}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item?.label}
          </Text>
          <Text style={styles.notesText} numberOfLines={1} ellipsizeMode="tail">
            {item?.createdBy}
          </Text>
        </View>

        <TouchableOpacity style={styles?.notesIcon} onPress={() => {}}>
          <FontAwesome5
            size={ScaleSize(25)}
            name="edit"
            color={Colors.PURPLE200}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles?.notesIcon} onPress={() => {}}>
          <MaterialIcons
            size={ScaleSize(32)}
            name="cancel"
            color={Colors.RED100}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderResourceItem = ({ item }: any) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.resourceCardRow}>
          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Name
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
          </View>

          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Email ID
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.emailId}
            </Text>
          </View>
        </View>

        <View style={styles.resourceCardRow}>
          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Mobile No.
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.mobile}
            </Text>
          </View>

          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Address
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.address}
            </Text>
          </View>
        </View>

        <View style={styles.resourceCardRow}>
          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Technology
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.technology}
            </Text>
          </View>

          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Vendor Name
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.vendorName}
            </Text>
          </View>
        </View>

        <View style={styles.resourceCardRow}>
          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Experience
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.experience}
            </Text>
          </View>

          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              SR
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.sr}
            </Text>
          </View>
        </View>

        <View style={styles.resourceCardRow}>
          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              CV
            </Text>
            <Text
              style={styles.resourceViewCV}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              View
              {/* <FontAwesome
            size={ScaleSize(25)}
            name="eye"
            color={Colors.BLUE100}
          /> */}
            </Text>
          </View>

          <View style={styles.resourceCardItem}>
            <Text
              style={styles.resourceCardLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              idle
            </Text>
            <Text
              style={styles.resourceCardValue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.idle}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderEndRecordItem = ({ item }: any) => {
    return (
      <View style={styles?.clientRow}>
        <Text
          style={styles.clientRowText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item?.name}
        </Text>

        <Text
          style={styles.recordRowValue}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item?.endDate}
        </Text>
      </View>
    );
  };

  useEffect(() => {
    setTopClients(topClientsData);
    setNotes(notesData);
    setResources(resourcesData);
    setResourceContractEnd(resourceContractEndData);
    setClientAgreementEnd(clientAgreementEndData);
  }, []);

  return (
    <Screen>
      <GestureHandlerRootView style={AppStyles.rootContainer}>
        <ScrollView style={AppStyles.rootContainer} nestedScrollEnabled={true}>
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <View style={styles.cardRow}>
                <View style={styles.card}>
                  <Text
                    style={[styles.cardHeading, styles.totalRes]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    2511
                  </Text>
                  <Text
                    style={styles.cardSubHeading}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Total Resources
                  </Text>
                </View>

                <View style={styles.card}>
                  <Text
                    style={[styles.cardHeading, styles.inHouseRes]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    523
                  </Text>
                  <Text
                    style={styles.cardSubHeading}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    In-House Resources
                  </Text>
                </View>
              </View>

              <View style={styles.cardRow}>
                <View style={styles.card}>
                  <Text
                    style={[styles.cardHeading, styles.clientSideRes]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    181
                  </Text>
                  <Text
                    style={styles.cardSubHeading}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Client Side Resources
                  </Text>
                </View>

                <View style={styles.card}>
                  <Text
                    style={[styles.cardHeading, styles.totalCli]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    908
                  </Text>
                  <Text
                    style={styles.cardSubHeading}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Total Resources
                  </Text>
                </View>
              </View>

              <View style={styles.cardRow}>
                <View style={styles.card}>
                  <Text
                    style={[styles.cardHeading, styles.activeCli]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    69
                  </Text>
                  <Text
                    style={styles.cardSubHeading}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Active Resources
                  </Text>
                </View>
              </View>
            </View>

            {topClients.length > 0 && (
              <View style={[styles.cardContainer, { maxHeight: "25%" }]}>
                <CardTitle value={"Top Clients"} />

                <View style={styles?.clientRow}>
                  <Text
                    style={styles.clientRowLabelLeft}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Client Name
                  </Text>

                  <Text
                    style={styles.clientRowLabelRight}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    No. Of Resources
                  </Text>
                </View>

                <FlatList
                  data={topClients}
                  renderItem={renderClientItem}
                  keyExtractor={(item) => item.id.toString()}
                  nestedScrollEnabled={true}
                  keyboardShouldPersistTaps="handled"
                />
              </View>
            )}

            {notes.length > 0 && (
              <View style={[styles.cardContainer, { maxHeight: "25%" }]}>
                <View style={styles?.notesHeaderContainer}>
                  <CardTitle value="Notes" />
                  <CardBlueButton text="Add Notes" />
                </View>

                <FlatList
                  data={notes}
                  renderItem={renderNotesItem}
                  keyExtractor={(item) => item.id.toString()}
                  nestedScrollEnabled={true}
                  keyboardShouldPersistTaps="handled"
                />
              </View>
            )}

            {resources.length > 0 && (
              <View
                style={[
                  styles.cardContainer,
                  { maxHeight: "17%", overflow: "hidden" },
                ]}
              >
                <View style={styles?.notesHeaderContainer}>
                  <CardTitle value="Resources" />
                  <CardBlueButton text="Filters" />
                </View>

                <FlatList
                  data={resources}
                  renderItem={renderResourceItem}
                  keyExtractor={(item) => item.id.toString()}
                  nestedScrollEnabled={true}
                  keyboardShouldPersistTaps="handled"
                />
              </View>
            )}

            {resourceContractEnd.length > 0 && (
              <View style={[styles.cardContainer, { maxHeight: "25%" }]}>
                <CardTitle value="Resource Contract End" period="(30 days)" />

                <View style={styles?.clientRow}>
                  <Text
                    style={styles.clientRowLabelLeft}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Resource Name
                  </Text>

                  <Text
                    style={[
                      styles.clientRowLabelRight,
                      { textAlign: "center" },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    End Date
                  </Text>
                </View>

                <FlatList
                  data={resourceContractEnd}
                  renderItem={renderEndRecordItem}
                  keyExtractor={(item) => item.id.toString()}
                  nestedScrollEnabled={true}
                  keyboardShouldPersistTaps="handled"
                />
              </View>
            )}

            {clientAgreementEnd.length > 0 && (
              <View style={[styles.cardContainer, { maxHeight: "25%" }]}>
                <CardTitle value="Client Agreement End" period="(30 days)" />

                <View style={styles?.clientRow}>
                  <Text
                    style={styles.clientRowLabelLeft}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Client Name
                  </Text>

                  <Text
                    style={[
                      styles.clientRowLabelRight,
                      { textAlign: "center" },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    End Date
                  </Text>
                </View>

                <FlatList
                  data={clientAgreementEnd}
                  renderItem={renderEndRecordItem}
                  keyExtractor={(item) => item.id.toString()}
                  nestedScrollEnabled={true}
                  keyboardShouldPersistTaps="handled"
                />
              </View>
            )}
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ScaleSize(15),
    backgroundColor: Colors.WHITE100,
  },
  cardContainer: {
    padding: ScaleSize(20),
    borderWidth: ScaleSize(1),
    borderColor: Colors.BLUE300,
    borderRadius: ScaleSize(10),
    backgroundColor: Colors.WHITE100,
    marginVertical: ScaleSize(5),
  },
  cardRow: {
    marginBottom: ScaleSize(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: { width: "48%", alignItems: "flex-start" },
  cardHeading: {
    marginBottom: ScaleSize(5),
    color: Colors.BLACK100,
    fontSize: ScaleSize(35),
    fontWeight: "bold",
  },
  cardSubHeading: {
    color: Colors.BLACK100,
    fontSize: ScaleSize(20),
    fontWeight: "bold",
  },
  totalRes: { color: Colors.ORANGE100 },
  inHouseRes: { color: Colors.BLUE400 },
  clientSideRes: { color: Colors.PURPLE100 },
  totalCli: { color: Colors.GREEN100 },
  activeCli: { color: Colors.PINK100 },
  heading: {
    color: Colors.BLACK100,
    fontSize: ScaleSize(23),
    fontWeight: "bold",
  },
  label: {
    marginBottom: ScaleSize(5),
    color: Colors.BLUE100,
    fontSize: ScaleSize(18),
    fontWeight: "bold",
  },
  clientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clientRowLabelLeft: {
    width: "60%",
    marginBottom: ScaleSize(5),
    color: Colors.BLUE100,
    fontSize: ScaleSize(18),
    fontWeight: "bold",
  },
  clientRowLabelRight: {
    width: "40%",
    marginBottom: ScaleSize(5),
    color: Colors.BLUE100,
    fontSize: ScaleSize(18),
    fontWeight: "bold",
  },
  clientRowText: {
    width: "60%",
    marginBottom: ScaleSize(5),
    color: Colors.BLACK100,
    fontSize: ScaleSize(16),
    fontWeight: "regular",
  },
  clientRowValue: {
    width: "40%",
    marginBottom: ScaleSize(5),
    color: Colors.BLUE100,
    fontSize: ScaleSize(16),
    fontWeight: "regular",
    textAlign: "center",
  },
  notesHeaderContainer: {
    marginBottom: ScaleSize(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notesItem: {
    marginBottom: ScaleSize(5),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notesItemTextContainer: { width: "70%", justifyContent: "flex-start" },
  notesLabel: {
    marginBottom: ScaleSize(5),
    color: Colors.BLACK100,
    fontSize: ScaleSize(16),
    fontWeight: "regular",
  },
  notesText: {
    marginBottom: ScaleSize(5),
    color: Colors.BLACK100,
    fontSize: ScaleSize(14),
    fontWeight: "regular",
  },
  notesIcon: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  recordRowValue: {
    width: "40%",
    marginBottom: ScaleSize(5),
    color: Colors.BLACK100,
    fontSize: ScaleSize(16),
    fontWeight: "regular",
    textAlign: "center",
  },
  resourceCardRow: {
    marginBottom: ScaleSize(7),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resourceCardItem: { width: "49%" },
  resourceCardLabel: {
    color: Colors.BLACK100,
    fontSize: ScaleSize(16),
    fontWeight: "bold",
  },
  resourceCardValue: {
    color: Colors.BLACK100,
    fontSize: ScaleSize(16),
    fontWeight: "normal",
  },
  resourceViewCV: {
    color: Colors.BLUE100,
    fontSize: ScaleSize(16),
    fontWeight: "normal",
    textDecorationLine: "underline",
  },
});
