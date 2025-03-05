import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SavedArticles from "./SavedArticlesScreen";
import SavedVideos from "./SavedVideosScreen";

const OfflineSavesScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Articles");

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Articles" && styles.activeTab]}
          onPress={() => setActiveTab("Articles")}
        >
          <Text style={[styles.tabText, activeTab === "Articles" && styles.activeTabText]}>Articles</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Videos" && styles.activeTab]}
          onPress={() => setActiveTab("Videos")}
        >
          <Text style={[styles.tabText, activeTab === "Videos" && styles.activeTabText]}>Videos</Text>
        </TouchableOpacity>
      </View>

      {activeTab === "Articles" ? <SavedArticles /> : <SavedVideos />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingHorizontal: 5 },
  tabContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 5 },
  tab: { padding: 10, paddingHorizontal: 64 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "#121E49" },
  tabText: { fontSize: 16, color: "#777" },
  activeTabText: { color: "#121E49", fontWeight: "bold" },
});

export default OfflineSavesScreen;
