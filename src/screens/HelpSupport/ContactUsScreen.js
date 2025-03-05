import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const contacts = [
  { id: "1", name: "Website", icon: "globe-outline", link: "https://example.com" },
  { id: "2", name: "Facebook", icon: "logo-facebook", link: "https://facebook.com" },
  { id: "3", name: "Instagram", icon: "logo-instagram", link: "https://instagram.com" },
  { id: "4", name: "WhatsApp", icon: "logo-whatsapp", link: "https://wa.me/1234567890" },
  { id: "5", name: "Twitter", icon: "logo-twitter", link: "https://twitter.com" },
  { id: "6", name: "Customer Service", icon: "headset-outline", link: "tel:+1234567890" },
];

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      {contacts.map((item) => (
        <TouchableOpacity key={item.id} style={styles.contactItem}>
          <Ionicons name={item.icon} size={24} color="#121E49" />
          <Text style={styles.contactText}>{item.name}</Text>
          <Ionicons name="arrow-forward" size={20} color="#121E49" style={styles.arrowIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  contactText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "500",
    color: "#121E49",
  },
  arrowIcon: {
    marginLeft: "auto",
  },
});

export default ContactUsScreen;
