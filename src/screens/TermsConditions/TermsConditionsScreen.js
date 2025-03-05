import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const termsData = [
  {
    title: "Acceptance of Terms",
    points: [
      "By downloading, installing, or using News Portal App, you agree to these Terms and Conditions and our Privacy Policy.",
    ],
  },
  {
    title: "Non Acceptance of Terms",
    points: [
      "If you do not agree with these Terms and Conditions, you must uninstall and discontinue use of the app.",
    ],
  },
  {
    title: "User Responsibilities",
    points: [
      "Users must provide accurate information during registration.",
      "Users are responsible for maintaining the security of their account credentials.",
      "Users must not engage in any illegal activity using the app.",
    ],
  },
  {
    title: "Privacy Policy",
    points: [
      "We collect user data to enhance app functionality.",
      "Your data is protected and will not be shared without consent.",
    ],
  },
  {
    title: "Termination",
    points: [
      "We reserve the right to terminate accounts that violate our policies.",
    ],
  },
];

const TermsConditionsScreen = () => {
  return (
    <View style={styles.container}>
      {termsData.map((term, index) => (
        <View key={index} style={styles.termBlock}>
          <Text style={styles.termTitle}>{`${index + 1}. ${term.title}`}</Text>
          {term.points.length === 1 ? (
            <Text style={styles.singlePoint}>{term.points[0]}</Text>
          ) : (
            <View style={styles.bulletContainer}>
              {term.points.map((point, i) => (
                <View key={i} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{point}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  termBlock: {
    marginBottom: 15,
  },
  termTitle: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#121E49",
    marginBottom: 5,
  },
  singlePoint: {
    fontSize: 14,
    color: "#333",
    paddingLeft: 10,
    marginBottom: 10,
  },
  bulletContainer: {
    paddingLeft: 10,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  bullet: {
    fontSize: 14,
    marginRight: 5,
    color: "#333",
  },
  bulletText: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  downloadButton: {
    backgroundColor: "#121E49",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 20,
  },
  downloadText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TermsConditionsScreen;
