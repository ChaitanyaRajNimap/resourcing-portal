import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import Screen from "@/components/Screen";
import ScaleSize from "@/utils/Scaling";
import Colors from "@/utils/Colors";
import validator from "validator";
import { FontAwesome } from "@expo/vector-icons";

export default function SignIn() {
  const { signIn } = useAuth();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isMasked, setIsMasked] = useState(true);

  const handleSignIn = () => {
    setIsLoading(true);
    Keyboard.dismiss();

    if (!validator.isEmail(inputs.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email address",
      }));
      return;
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (!validator.isStrongPassword(inputs.password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Invalid password",
      }));
      return;
    } else {
      setErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }

    timeoutRef.current = setTimeout(() => {
      // API CALL
      setInputs((prev) => ({
        ...prev,
        email: "",
        password: "",
      }));
      setErrors((prev) => ({
        ...prev,
        email: "",
        password: "",
      }));
      setIsLoading(false);
      signIn("dummy_token");
    }, 700);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef?.current);
    };
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <KeyboardAvoidingView enabled>
          <View style={styles.inputContainer}>
            <TextInput
              value={inputs.email}
              onChangeText={(text) => {
                setInputs((prev) => ({
                  ...prev,
                  email: text.toLocaleLowerCase(),
                }));
              }}
              placeholder="Email"
              style={styles.input}
            />

            <Text style={styles.error}>{errors.email}</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.passwordInputContainer}>
              <TextInput
                value={inputs.password}
                onChangeText={(text) => {
                  setInputs((prev) => ({
                    ...prev,
                    password: text,
                  }));
                }}
                placeholder="Password"
                style={styles.passwordInput}
                secureTextEntry={isMasked}
              />

              <TouchableOpacity
                style={styles.passwordIcon}
                onPress={() => {
                  Keyboard.dismiss();
                  setIsMasked(!isMasked);
                }}
              >
                <FontAwesome
                  name={isMasked ? "eye" : "eye-slash"}
                  size={ScaleSize(23)}
                  color={Colors.BLACK100}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.error}>{errors.password}</Text>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>
            {isLoading ? "Please Wait...!" : "LOGIN"}
          </Text>
        </TouchableOpacity>

        <Text
          style={styles.forgotPasswordText}
          onPress={() => {
            router.navigate("/auth/forgot-password");
          }}
        >
          Forgot password ?
        </Text>
        <Text style={styles.text}>or</Text>
        <Text style={styles.forgotPasswordText}>Google Login</Text>
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
    textAlign: "center",
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
  passwordInputContainer: {
    flexDirection: "row",
    borderRadius: ScaleSize(5),
    borderBottomWidth: ScaleSize(3),
    borderBottomColor: Colors.BLUE100,
    marginBottom: ScaleSize(5),
    backgroundColor: Colors.BLUE200,
    overflow: "hidden",
  },
  passwordInput: {
    width: "85%",
    paddingVertical: ScaleSize(15),
    paddingHorizontal: ScaleSize(20),
    color: Colors.BLACK100,
    fontSize: ScaleSize(16),
  },
  passwordIcon: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
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
  forgotPasswordText: {
    marginBottom: ScaleSize(5),
    color: Colors.BLUE100,
    fontSize: ScaleSize(15),
    textAlign: "center",
  },
  text: {
    marginBottom: ScaleSize(5),
    color: Colors.BLACK100,
    fontSize: ScaleSize(25),
    textAlign: "center",
  },
});
