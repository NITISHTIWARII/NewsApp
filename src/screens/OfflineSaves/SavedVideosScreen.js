import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const videos = [
  {
    id: "1",
    title: "Birthright Citizenship Not For Unqualified People And Unqualified Kids: Trump",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    time: "2h ago",
  },
  {
    id: "2",
    title: "'May Or May Not': Trump Says Will Decide On Canada Mexico Tariffs Tonight",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    time: "3h ago",
  },
  {
    id: "3",
    title: "'Mumbai and Pune': Trump Says Will Decide On Canada Mexico Tariffs Tonight",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    time: "5h ago",
  },
  {
    id: "4",
    title: "'Saif Ali Khan rapid sugery': Trump Says Will Decide On Canada Mexico Tariffs Tonight",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    time: "2h ago",
  },
];

const SavedVideosScreen = () => {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity>
              <Text style={styles.playText}>▶ Play Video</Text>
             </TouchableOpacity>
            <View style={styles.icons}>
            <FontAwesome6 name="clock-rotate-left" size={15} color="black" />
              <Text style={styles.time}>{item.time}</Text>
              <View style={styles.innericons}>
                <AntDesign name="like2" size={15} color="black" />
                <MaterialIcons name="delete-outline" size={15} color="black" />
                <Feather name="download" size={15} color="#333" />
                <Ionicons name="share-social-outline" size={15} color="#333" />
              </View>
            </View>
          </View>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: "row", padding: 10, alignItems: "center" },
  image: { width: 60, height: 60, borderRadius: 5, marginRight: 10 },
  info: { flex: 1 },
  title: { fontSize: 12, fontWeight: "medium" },
  time: { fontSize: 12, color: "gray" },
  playText: { color: "#121E49", fontWeight: "bold" , fontSize: 12},
  icons: { flexDirection: "row", gap: 10, padding:3 },
  innericons: { flexDirection: "row", gap: 10, marginLeft: 120 },
  separator: { height: 1, backgroundColor: "#ccc", marginVertical: 5 },
});

export default SavedVideosScreen;
