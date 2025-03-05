import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Faq from "./FaqScreen";
import ContactUs from "./ContactUsScreen";

const HelpSupportScreen = () => {
  const [activeTab, setActiveTab] = useState("FAQ");

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "FAQ" && styles.activeTab]}
          onPress={() => setActiveTab("FAQ")}
        >
          <Text style={[styles.tabText, activeTab === "FAQ" && styles.activeTabText]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Contact Us" && styles.activeTab]}
          onPress={() => setActiveTab("Contact Us")}
        >
          <Text style={[styles.tabText, activeTab === "Contact Us" && styles.activeTabText]}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      {activeTab === "FAQ" ? <Faq /> : <ContactUs />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FB" },
  tabContainer: { flexDirection: "row", backgroundColor: "#FFF", paddingVertical: 12, borderRadius: 8, marginHorizontal: 16 },
  tab: { flex: 1, alignItems: "center", paddingVertical: 12 },
  activeTab: { borderBottomWidth: 3, borderBottomColor: "#121E49" },
  tabText: { fontSize: 16, color: "#555" },
  activeTabText: { color: "#121E49", fontWeight: "bold" },
});

export default HelpSupportScreen;
