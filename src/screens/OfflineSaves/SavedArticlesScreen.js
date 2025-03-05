import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const articles = [
  {
    id: "1",
    title:
      "Budget 2025: Nirmala Sitharaman Announces Nuclear Energy Mission For 'Viksit Bharat'",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    time: "2h ago",
  },
  {
    id: "2",
    title:
      "CUET PG 2025: Registrations To Close For Postgraduate Entrance Exam, Check Details To Apply",
    image:
      "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
    time: "3h ago",
  },
  {
    id: "3",
    title: "From Gaza to Los Angeles, our leaders have set the world on fire",
    image:
      "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    time: "2h ago",
  },
  {
    id: "4",
    title: "From DenMark to Ireland, our leaders have set the world on fire",
    image:
      "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    time: "2h ago",
  },
  {
    id: "5",
    title: "From India to Pakistan, our leaders have set the world on fire",
    image:
      "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    time: "2h ago",
  },
];

const SavedArticlesScreen = () => {
  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.icons}>
            <FontAwesome6 name="clock-rotate-left" size={15} color="black" />
              <Text style={styles.time}>{item.time}</Text>
              <View style={styles.innericons}>
                <AntDesign name="like2" size={15} color="black" />
                <MaterialIcons name="delete-outline" size={15} color="black" />
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
  title: { fontSize: 12, fontWeight: "medium"},
  time: { fontSize: 12, color: "gray" },
  icons: { flexDirection: "row", gap: 10, padding:3 },
  innericons: { flexDirection: "row", gap: 10, marginLeft: 140 },
  separator: { height: 1, backgroundColor: "#ccc", marginVertical: 5 },
});

export default SavedArticlesScreen;
