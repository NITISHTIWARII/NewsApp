import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PasswordSecurityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.passwordSection}>
        <Text style={styles.passwordText}>Change Password</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
          <MaterialIcons name="arrow-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton}
      onPress={() => 
          navigation.navigate('PasswordChangeVerification')}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8F6F4" },
  passwordSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderColor: "#ddd" },
  passwordText: { fontSize: 16 },
  saveButton: { backgroundColor: "#121E49", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  saveButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});

export default PasswordSecurityScreen;
