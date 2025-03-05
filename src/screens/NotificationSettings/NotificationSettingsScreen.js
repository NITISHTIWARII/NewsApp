import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Checkbox } from "react-native-paper"; 

const NotificationSettingsScreen = () => {
  const [notifications, setNotifications] = useState({
    all: true,
    breakingNews: false,
    topStories: false,
    personalizedNews: false,
    dailyDigest: false,
    weeklyRecap: false,
    appUpdates: false,
  });

  const toggleCheckbox = (key) => {
    if (key === "all") {
      const newValue = !notifications.all;
      setNotifications({
        all: newValue,
        breakingNews: newValue,
        topStories: newValue,
        personalizedNews: newValue,
        dailyDigest: newValue,
        weeklyRecap: newValue,
        appUpdates: newValue,
      });
    } else {
      setNotifications({ ...notifications, [key]: !notifications[key] });
    }
  };

  const notificationOptions = [
    { key: "all", label: "All Notifications" },
    { key: "breakingNews", label: "Breaking News" },
    { key: "topStories", label: "Top Stories" },
    { key: "personalizedNews", label: "Personalized News" },
    { key: "dailyDigest", label: "Daily Digest" },
    { key: "weeklyRecap", label: "Weekly Recap" },
    { key: "appUpdates", label: "App Updates" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationOptions}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.label}</Text>
            <Checkbox
              status={notifications[item.key] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(item.key)}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8F6F4" },
  notificationItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12, borderBottomWidth: 1, borderColor: "#ddd" },
  notificationText: { fontSize: 16 },
  saveButton: { backgroundColor: "#121E49", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  saveButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});

export default NotificationSettingsScreen;
