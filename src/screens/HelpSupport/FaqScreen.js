import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const faqData = [
  { id: "1", question: "Do I need to create an account to use the app?", answer: "Yes, you need an account to access personalized features." },
  { id: "2", question: "How can I customize my news feed?", answer: "Go to settings and select your preferred topics and regions." },
  { id: "3", question: "How do I change my topics and regions?", answer: "Navigate to profile settings and update your preferences." },
  { id: "4", question: "How do I manage my notification settings?", answer: "Enable or disable notifications from the app settings." },
  { id: "5", question: "Can I mute notifications during certain hours?", answer: "Yes, you can set a do-not-disturb time in the notification settings." },
  { id: "6", question: "How do I enable or disable breaking news alerts?", answer: "Use the alert settings in the notifications section." },
  { id: "7", question: "How can I contact customer support?", answer: "You can reach us via the Contact Us section." },
  { id: "8", question: "How do I search for specific news articles?", answer: "Use the search bar on the home screen to find articles." },
  { 
    id: "9", 
    question: "Can I save articles to read later?", 
    answer: "Yes, tap the 'Save' icon on an article to add it to your saved list." 
  },
  { id: "10", question: "Can I read news in different languages?", answer: "Yes, change the language in the app settings." },
];

const FaqScreen = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={faqData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.faqQuestion}>
              <Text style={styles.questionText}>{item.question}</Text>
              <AntDesign name={expandedId === item.id ? "caretup" : "caretdown"} size={12} color="#555" />
            </TouchableOpacity>
            {expandedId === item.id && <Text style={styles.answerText}>{item.answer}</Text>}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  faqItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  faqQuestion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  questionText: {
    fontSize: 15,
    fontWeight: "medium",
    color: "#121E49",
  },
  answerText: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
    paddingLeft: 10,
  },
});

export default FaqScreen;
