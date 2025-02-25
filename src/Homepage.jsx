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
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { deviceWidth } from './Constants';
import { useNavigation } from "@react-navigation/native";
import NewsApp from './NewsApp';

const NewsNavigation = () => {
  const [activeTab, setActiveTab] = useState('Today News');
  
  const navigation = useNavigation();
  
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

  const latestNews = [
    {
      id: '1',
      title: 'Former UK PM Rishi Sunak Plays cricket in Mumbai. Managed not to get out for a duck',
      time: '10 min ago',
      image: require('../src/assets/Latest1.png'),
      likes: 5,
      comments: 2,
      shares: 3
    },
    {
      id: '2',
      title: 'List of dead souls: verifying reports of casualties in Ayodhya\'s Prayagraj stampede',
      time: '15 min ago',
      image: require('../src/assets/Latest2.png'),
      likes: 8,
      comments: 4,
      shares: 10
    },
    {
      id: '3',
      title: 'Philadelphia plane crash: all you need to know about the accident',
      time: '20 min ago',
      image: require('../src/assets/Latest3.png'),
      likes: 12,
      comments: 7,
      shares: 5
    },
  ];

  const marketIndices = [
    { name: 'SENSEX', value: '77513.64', change: '+463.27 (+0.60%)' },
    { name: 'NIFTY 50', value: '23239.7', change: '+159.36 (+0.69%)' },
    { name: 'GOLD Rs/10g', value: '81140.0', change: '+548.0 (+0.68%)' },
  ];

  const topVideos = [
    {
      id: 'v1',
      title: 'Indian Reports Canadian Disruption of Election Meeting | Diplomatic Row Escalates',
      thumbnail: require('../src/assets/Topvidios01.png'),
      type: 'Play Video'
    },
    {
      id: 'v2',
      title: 'US Plane Crash Footage: AA Flight Makes Emergency Landing After Colliding With Another Aircraft',
      thumbnail: require('../src/assets/Topvidios02.png'),
      type: 'Live Video'
    },
    {
      id: 'v3',
      title: 'Trump Latest News | Trump Campaign Reveals Tentative GOP Vice Presidential Picks | US Politics | Latest News',
      thumbnail: require('../src/assets/Topvidios03.png'),
      type: 'Play Video'
    },
  ];

  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Image source={item.image} style={styles.newsImage} />
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle} numberOfLines={2}>{item.title}</Text>
        <View style={styles.newsFooter}>
          <Text style={styles.timeText}>{item.time}</Text>
          <View style={styles.interactionContainer}>
            <TouchableOpacity style={styles.interaction}>
              <Ionicons name="thumbs-up-outline" size={16} color="#666" />
              <Text style={styles.interactionText}>{item.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interaction}>
              <Ionicons name="chatbubble-outline" size={16} color="#666" />
              <Text style={styles.interactionText}>{item.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interaction}>
              <Ionicons name="share-social-outline" size={16} color="#666" />
              <Text style={styles.interactionText}>{item.shares}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const renderVideoItem = ({ item }) => (
    <View style={styles.videoItem}>
      <Image source={item.thumbnail} style={styles.videoThumbnail} />
      <Text style={styles.videoTitle} numberOfLines={2}>{item.title}</Text>
      <View style={styles.videoFooter}>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons 
            name={item.type.includes('Live') ? 'radio-outline' : 'play-circle-outline'} 
            size={16} 
            color={item.type.includes('Live') ? '#f00' : '#1C2699'} 
          />
          <Text style={[
            styles.playButtonText, 
            {color: item.type.includes('Live') ? '#f00' : '#1C2699'}
          ]}>
            {item.type}
          </Text>
        </TouchableOpacity>
        <View style={styles.interactionContainer}>
          <TouchableOpacity style={styles.interaction}>
            <Ionicons name="thumbs-up-outline" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.interaction}>
            <Ionicons name="chatbubble-outline" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.interaction}>
            <Ionicons name="share-social-outline" size={16} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  

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
      
     

      {/* Main Content ScrollView */}
      <ScrollView style={styles.mainContainer}>
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
        {/* Today News Content - Only show when activeTab is 'Today News' */}
        {activeTab === 'Today News' && (
          <View style={styles.newsContainer}>
            <Text style={styles.headlinetext}>Today Headlines</Text>
            {newsContent.map((news, index) => (
              <View key={index} style={styles.newsItemOriginal}>
                <Image source={news.image} style={styles.newsImageOriginal} />
                <Text style={styles.newsTitleOriginal}>{news.title}</Text>
                <Text style={styles.newsTimeOriginal}>{news.time}</Text>
              </View>
            ))}

            {/* Live Score Section */}
            <View style={styles.liveScoreContainer}>
              <Text style={styles.headlinetext}>Live Score</Text>
              <Text style={styles.liveScoreTitle}>{liveScore.match}</Text>
              <View style={{flexDirection:'row',width:deviceWidth-30,justifyContent:'space-between'}}>
                <Text style={styles.liveScoreText}>{liveScore.indiaScore}</Text>
                <Text style={styles.liveScoreText}>{liveScore.englandScore}</Text>
              </View>
              <Text style={styles.liveScoreText}>{liveScore.requiredRuns}</Text>
            </View>
          </View>
        )}

        {/* News Feed Section */}
        <View style={styles.feedContainer}>
          {/* Latest News Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={latestNews}
            renderItem={renderNewsItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />

          {/* Market Indices */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Market Indices</Text>
            <TouchableOpacity onPress={() => navigation.navigate(NewsApp)}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.marketContainer}>
            {marketIndices.map((index, i) => (
              <View key={i} style={styles.indexCard}>
                <Text style={styles.indexName}>{index.name}</Text>
                <Text style={styles.indexValue}>{index.value}</Text>
                <Text style={[
                  styles.indexChange,
                  {color: index.change.includes('+') ? '#4CAF50' : '#F44336'}
                ]}>
                  {index.change}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* Top Videos */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Videos</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={topVideos}
            renderItem={renderVideoItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
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
  mainContainer: {
    flex: 1,
  },
  newsContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  headlinetext: {
    color: '#000444',
    fontWeight: '700',
    marginBottom: 10,
  },
  newsItemOriginal: {
    marginBottom: 16,
  },
  newsImageOriginal: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsTitleOriginal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  newsTimeOriginal: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  liveScoreContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  liveScoreTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  liveScoreText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  
  // New Feed Styles
  feedContainer: {
    backgroundColor: '#f5f5f5',
    paddingTop: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  seeAllText: {
    fontSize: 14,
    color: '#1C2699',
    fontWeight: '500',
  },
  newsItem: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  newsImage: {
    width: 100,
    height: 100,
  },
  newsContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  interactionContainer: {
    flexDirection: 'row',
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  interactionText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 2,
  },
  marketContainer: {
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  indexCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 4,
    width: 120,
    elevation: 2,
  },
  indexName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  indexValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 2,
  },
  indexChange: {
    fontSize: 12,
  },
  videoItem: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  videoThumbnail: {
    width: '100%',
    height: 180,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    padding: 10,
  },
  videoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 0,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButtonText: {
    fontSize: 12,
    marginLeft: 4,
  },
});

export default NewsNavigation;