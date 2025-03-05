import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { deviceWidth } from '../Constants';
const NewsDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Image with Overlay Title */}
      <View style={styles.imageContainer}>
        <Image
         // source={require('../src/assets/image.png')}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageText}>
            IND-W vs SA-W U-19 T20 World Cup Final: India vs South Africa Women U-19 Match Date, Time, Live Cricket Score Streaming, Telecast Channels, other details
          </Text>
        </View>
      </View>

      {/* Author Info */}
      <View style={styles.authorContainer}>
        <Text style={styles.authorName}>Rohan Sharma</Text>
        <Text style={styles.date}>12 Jan 2025</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <FontAwesome name="thumbs-up" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="share" size={20} color="gray" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Article Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>India Women vs South Africa Women (IND-W vs SA-W) U-19 T20 World Cup Final Date, Time, Live Score Streaming Online:</Text>
        <Text style={styles.paragraph}>
          The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.
        </Text>

        <Text style={styles.subheading}>Live Streaming and Telecast Details:</Text>
        <Text style={styles.paragraph}>
          Television: The match will be broadcast live on Star Sports 2 and Star Sports 2 HD in India.
          Online Streaming: Fans can stream the match live on Disney+ Hotstar.
        </Text>

        <Text style={styles.subheading}>Team Performances:</Text>
        <Text style={styles.paragraph}>
          Both India and South Africa have been unbeaten in the tournament. India, led by Niki Prasad, secured victories against West Indies, Malaysia, and Sri Lanka in the group stages, followed by wins over Bangladesh and England in the knockout stages.
        </Text>

        <Text style={styles.subheading}>Key Players to Watch:</Text>
        <Text style={styles.paragraph}>
          - Opener Gongadi Trisha has been the tournament's highest run-scorer with 265 runs.
          - Captain Niki Prasad leads the bowling attack with 10 wickets.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width:deviceWidth,
    height: 250,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  imageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'gray',
    fontSize: 14,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  contentContainer: {
    padding: 12,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  subheading: {
    fontWeight: '600',
    fontSize: 18,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 14,
    marginTop: 5,
    color: '#333',
  },
});

export default NewsDetailsScreen;
