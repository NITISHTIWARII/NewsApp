import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { deviceWidth } from './Constants';

const NewsNavigation = () => {
  const [activeTab, setActiveTab] = useState('Today News');
  
  const tabs = ['Today News', 'Top News', 'Live News', 'Election News', 'Sports News'];
  
  const newsContent = [
    {
      title: 'Bengal court orders production of Bangladesh terror outfit members in Assam jail - India',
      time: '10h ago',
      image: require('../src/assets/Bengal.png'),
    },
    {
      title: 'Budget 2025 Live: FM Nirmala Sitharaman Announces Huge Tax Relief | New Tax Slabs Explained',
      time: 'Live',
      image: require('../src/assets/Income.png'), 
    },
  ];

  const liveScore = {
    match: 'T20 5 out of 5 (IND 3 - ENG 1)',
    indiaScore: 'India 249/9 (20)',
    englandScore: 'England 97/9 (10)',
    requiredRuns: 'England Needs 170 Runs in 60 Balls',
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1C2699" barStyle="light-content" />
      
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>News That Matters, Just for You</Text>
          <Ionicons
            name="notifications-outline"
            size={29}
            color="#FCBA37"
          />
        </View>
        
        {/* Search Box */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <EvilIcons
              name="search"
              size={20}
              color="#666"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search News..."
              style={styles.searchInput}
              placeholderTextColor="#666"
            />
          </View>
        </View>
      </View>
      
      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabScrollContent}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* News Content */}
      <ScrollView style={styles.newsContainer}>
        <Text style={styles.headlinetext}>Today Headlines</Text>
        {newsContent.map((news, index) => (
          <View key={index} style={styles.newsItem}>
            <Image source={news.image} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Text style={styles.newsTime}>{news.time}</Text>
          </View>
        ))}

        {/* Live Score Section */}
        <View style={styles.liveScoreContainer}>
          <Text style={styles.headlinetext}>Live Sore</Text>
          <Text style={styles.liveScoreTitle}>{liveScore.match}</Text>
          <View style={{flexDirection:'row',width:deviceWidth-30,justifyContent:'space-between'}}>
          <Text style={styles.liveScoreText}>{liveScore.indiaScore}</Text>
          <Text style={styles.liveScoreText}>{liveScore.englandScore}</Text>
          </View>
          <Text style={styles.liveScoreText}>{liveScore.requiredRuns}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#1C2699',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FCBA37',
  },
  searchContainer: {
    paddingHorizontal: 4,
  },
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#000',
  },
  tabContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  tabScrollContent: {
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#1C2059',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1C2699',
    backgroundColor: '#1C2059',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FCBA37',
    fontWeight: '600',
  },
  headlinetext:{
    color:'#000444',
    fontWeight:700,
    marginBottom:10

  },
  newsContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  newsItem: {
    marginBottom: 16,
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  newsTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  liveScoreContainer: {
    marginTop: 16,
  },
  liveScoreTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign:'center'
  },
  liveScoreText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    
  },
});

export default NewsNavigation;