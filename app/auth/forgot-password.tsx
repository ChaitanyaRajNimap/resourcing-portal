import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import ScaleSize from "@/utils/Scaling";
import Colors from "@/utils/Colors";
import validator from "validator";

export default function ForgotPassword() {
  const router = useRouter();
  const [emailIp, setEmailIp] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (!validator.isEmail(emailIp)) {
      setEmailErr("Invalid email address");
      return;
    } else {
      setEmailErr("");
    }

    // API CALL
    setEmailIp("");
    setEmailErr("");
    router.back();
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.heading}>Forgot Password</Text>

        <KeyboardAvoidingView enabled>
          <View style={styles.inputContainer}>
            <TextInput
              value={emailIp}
              onChangeText={(text) => setEmailIp(text.toLocaleLowerCase())}
              placeholder="Email"
              style={styles.input}
            />

            <Text style={styles.error}>{emailErr}</Text>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <Text
          style={styles.text}
          onPress={() => {
            router.back();
          }}
        >
          Back to Login
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ScaleSize(30),
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    marginBottom: ScaleSize(20),
    color: Colors.BLACK100,
    fontSize: ScaleSize(36),
    fontWeight: "semibold",
  },
  inputContainer: {
    marginBottom: ScaleSize(10),
  },
  input: {
    paddingVertical: ScaleSize(15),
    paddingHorizontal: ScaleSize(20),
    borderRadius: ScaleSize(5),
    borderBottomWidth: ScaleSize(3),
    borderBottomColor: Colors.BLUE100,
    marginBottom: ScaleSize(5),
    backgroundColor: Colors.BLUE200,
    color: Colors.BLACK100,
    fontSize: ScaleSize(16),
  },
  error: {
    color: Colors.YELLOW100,
    fontSize: ScaleSize(14),
  },
  button: {
    padding: ScaleSize(13),
    borderRadius: ScaleSize(5),
    marginBottom: ScaleSize(15),
    backgroundColor: Colors.BLUE100,
  },
  buttonText: {
    color: Colors.WHITE000,
    fontSize: ScaleSize(17),
    textAlign: "center",
  },
  text: {
    marginBottom: ScaleSize(5),
    color: Colors.BLUE100,
    fontSize: ScaleSize(15),
  },
});
