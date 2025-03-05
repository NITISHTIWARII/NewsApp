import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  FontAwesome,
  Feather,
  Ionicons,
  FontAwesome5,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const menuOptions = [
    { title: "App Preferences", icon: <FontAwesome name="sliders" size={20} color="#333" />, onPress: () => {} },
    { title: "Liked Posts", icon: <FontAwesome name="thumbs-up" size={20} color="#333" />, onPress: () => navigation.navigate("LikedPosts") },
    { title: "Offline Saves", icon: <Feather name="download" size={20} color="#333" />, onPress: () => navigation.navigate("OfflineSaves") },
    { title: "Notification Settings", icon: <Ionicons name="notifications-outline" size={20} color="#333" />, onPress: () => navigation.navigate("NotificationSettings") },
    { title: "Password & Security", icon: <FontAwesome name="lock" size={20} color="#333" />, onPress: () => navigation.navigate("PasswordSecurity") },
    { title: "Help & Support", icon: <Ionicons name="help-circle-outline" size={20} color="#333" />, onPress: () => navigation.navigate("HelpSupport") },
    { title: "User Terms & Conditions", icon: <Feather name="file-text" size={20} color="#333" />, onPress: () => navigation.navigate("TermsConditions") },
    { title: "Sign Out", icon: <Ionicons name="exit-outline" size={20} color="#333" />, onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.profileImage}
        />
        <View>
          <View style={styles.userRow}>
            <Text style={styles.userName}>Arun</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit") }>
              <Text style={styles.editProfile}> Edit <FontAwesome5 name="edit" size={16} color="black" /></Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.userEmail}>arun1416@gmail.com</Text>
        </View>
      </View>

      {menuOptions.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={item.onPress}
        >
          {item.icon}
          <Text style={styles.menuText}>{item.title}</Text>
          <Ionicons name="arrow-forward" size={20} color="#333" style={styles.arrowIcon} />
        </TouchableOpacity>
      ))}

{/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#333" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="videocam-outline" size={24} color="#333" />
          <Text style={styles.navText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass-outline" size={24} color="#333" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bookmark-outline" size={24} color="#333" />
          <Text style={styles.navText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="person-outline" size={24} color="#1E2A78" />
          <Text style={[styles.navText, { color: "#1E2A78" }]}>Profile</Text>
        </TouchableOpacity>
      </View>*/}
    </View> 
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F4", paddingBottom: 60 },
  profileHeader: { flexDirection: "row", alignItems: "center", padding: 20, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  userRow: { flexDirection: "row", alignItems: "center" },
  profileImage: { width: 70, height: 70, borderRadius: 35, marginRight: 15 },
  userName: { fontSize: 20, fontWeight: "bold" },
  editProfile: { color: "#1E2A78", marginLeft: 10, fontSize: 16 },
  userEmail: { fontSize: 14, color: "#666", marginTop: 5 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuText: { fontSize: 16, color: "#333", marginLeft: 15, flex: 1 },
  arrowIcon: { marginLeft: "auto" },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: { alignItems: "center" },
  navItemActive: { alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#1E2A78" },
  navText: { fontSize: 12, color: "#666", marginTop: 3 },
});

export default ProfileScreen;
