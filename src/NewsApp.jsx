
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar, TextInput } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { deviceWidth } from './Constants';

const NewsApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const newsItems = [
    {
      id: 1,
      title: "Olympic Gold Medalist's Credit Card Allegedly Stolen by Postman...",
       thumbnail: require('../src/assets/TopVidios1.png'),
      timeAgo: '2h ago',
      isLive: true,
    },
    {
      id: 2,
      title: "Valtteri Bottas Competes in Tour Down Under 'Budgy Beach Shakeout Ride...",
      thumbnail: require('../src/assets/Topvidios2.png'),
      timeAgo: '2h ago',
      isLive: false,
    },
    {
      id: 3,
      title: "Indian Rejects Canadian Allegation of Election Meddling, PM with Sharon...",
      thumbnail: require('../src/assets/Topvidios3.png'),
  
      timeAgo: '3h ago',
      isLive: false,
      isFeatured: true,
    },
  ];

  // Filter news items based on search query
  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderNewsItem = (item) => (
    <View key={item.id} style={styles.newsItem}>
      <View style={styles.thumbnailContainer}>
        <Image source={item.thumbnail} style={styles.thumbnail} />
       
      </View>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <View style={styles.newsFooter}>
        <View style={styles.timeInfo}>
          <Feather name="clock" size={14} color="#888" />
          <Text style={styles.timeText}>{item.timeAgo}</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="like2" size={18} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="download" size={18} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="share-2" size={18} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1C2699" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Watch, Learn, Stay Updated!</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#FFD700" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search News..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Feather name="x" size={18} color="#888" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={18} color="#888" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.sectionHeader}>
          <Feather name="chevron-left" size={24} color="#000" />
          <Text style={styles.sectionTitle}>Top Videos</Text>
        </View>
        {filteredNews.map(renderNewsItem)}
        {filteredNews.length > 0 && (
          <TouchableOpacity style={styles.loadMoreButton}>
            <Text style={styles.loadMoreText}>Load More</Text>
          </TouchableOpacity>
        )}
        {filteredNews.length === 0 && (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No results found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C2699',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#1C2699',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
    padding: 0,
  },
  filterButton: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  thumbnailContainer: {
    position: 'relative',
    height: 250,
    resizeMode:'cover',
    width:deviceWidth-30,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  
  
  newsTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 16,
  },
  loadMoreButton: {
    backgroundColor: '#1C2699',
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  loadMoreText: {
    fontSize: 14,
    color: 'white',
  },
  noResults: {
    padding: 20,
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: '#888',
  },
});

export default NewsApp;