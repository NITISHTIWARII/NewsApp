// import React, { useState, useEffect } from 'react';
// import {
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   TouchableOpacity, 
//   ScrollView,
//   SafeAreaView,
//   Image,
//   FlatList,
//   ActivityIndicator,
//   Keyboard,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';

// const HomeScreen = () => {
//   const [activeTab, setActiveTab] = useState('Today News');
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [allNews, setAllNews] = useState([]);
//   const [marketIndices, setMarketIndices] = useState([]);
//   const [liveScore, setLiveScore] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchLoading, setSearchLoading] = useState(false);
  
//   //const navigation = useNavigation();
  
//   const tabs = ['Today News', 'Top News', 'Live News', 'Election', 'Sports News', 'Trending'];

//   // Fetch data from API
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setErrorMsg(null);
      
//       // Fetch news
//       const newsResponse = await fetch('https://news-portal-backend-code-a5rg.onrender.com/api/v1/news/getallnews');
      
//       if (!newsResponse.ok) {
//         throw new Error(`HTTP error! Status: ${newsResponse.status}`);
//       }
      
//       const newsData = await newsResponse.json();
      
//       if (newsData.success) {
//         setAllNews(newsData.news);
//       } else {
//         setErrorMsg(newsData.message || 'Failed to fetch news');
//       }
      
//       // Fetch market indices
//       const marketResponse = await fetch('https://news-portal-backend-code-a5rg.onrender.com/api/v1/market/indices');
      
//       if (marketResponse.ok) {
//         const marketData = await marketResponse.json();
//         if (marketData.success) {
//           setMarketIndices(marketData.indices);
//         }
//       }
      
//       // Fetch live score
//       const scoreResponse = await fetch('https://news-portal-backend-code-a5rg.onrender.com/api/v1/sports/livescore');
      
//       if (scoreResponse.ok) {
//         const scoreData = await scoreResponse.json();
//         if (scoreData.success) {
//           setLiveScore(scoreData.score);
//         }
//       }
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setErrorMsg('Failed to load data. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Call fetchData when component mounts
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Search news by query
//   const searchNews = async (query) => {
//     if (!query.trim()) {
//       setIsSearching(false);
//       setSearchResults([]);
//       return;
//     }

//     try {
//       setSearchLoading(true);
//       setIsSearching(true);
      
//       // API endpoint for searching news
//       const searchResponse = await fetch(`https://news-portal-backend-code-a5rg.onrender.com/api/v1/news/search?query=${query}`);
      
//       if (!searchResponse.ok) {
//         throw new Error(`HTTP error! Status: ${searchResponse.status}`);
//       }
      
//       const searchData = await searchResponse.json();
      
//       if (searchData.success) {
//         setSearchResults(searchData.news || []);
//       } else {
//         setSearchResults([]);
//         setErrorMsg(searchData.message || 'Search failed');
//         console.error('Search failed:', searchData.message);
//       }
//     } catch (error) {
//       console.error('Error searching news:', error);
//       setSearchResults([]);
//     } finally {
//       setSearchLoading(false);
//     }
//   };

//   // Handle search input changes
//   const handleSearchChange = (text) => {
//     setSearchQuery(text);
    
//     // Debounce search to avoid too many API calls
//     if (text.trim() === '') {
//       setIsSearching(false);
//       setSearchResults([]);
//     }
//   };

//   // Handle search submission
//   const handleSearchSubmit = () => {
//     Keyboard.dismiss();
//     searchNews(searchQuery);
//   };

//   // Clear search results and return to normal view
//   const clearSearch = () => {
//     setSearchQuery('');
//     setSearchResults([]);
//     setIsSearching(false);
//     Keyboard.dismiss();
//   };
  

//   // Function to get news for the selected tab
//   const getFilteredNews = () => {
//     if (!allNews || allNews.length === 0) {
//       return [];
//     }
    
//     switch (activeTab) {
//       case 'Top News':
//         return allNews.filter(news => news.isTopNews);
//       case 'Live News':
//         return allNews.filter(news => news.isLive);
//       case 'Election':
//         return allNews.filter(news => news.category?.toLowerCase() === 'election');
//       case 'Sports News':
//         return allNews.filter(news => news.category?.toLowerCase() === 'sports');
//       case 'Trending':
//         return allNews.filter(news => news.isTrending);
//       default: // Today News
//         return allNews;
//     }
//   };

//   const filteredNews = getFilteredNews();
  
//   // Get headlines (first 5 news items)
//   const headlineNews = filteredNews.slice(0, 5);
  
//   // Get remaining news for the feed
//   const feedNews = filteredNews.slice(2);

//   // Format relative time
//   const getRelativeTime = (timestamp) => {
//     if (!timestamp) return <Text style={{color:'#000'}}>Recent</Text>;
    
//     try {
//       const date = new Date(timestamp);
//       const now = new Date();
//       const diffInMs = now - date;
//       const diffInHours = diffInMs / (1000 * 60 * 60);
      
//       if (diffInHours < 1) {
//         const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
//         return `${diffInMinutes} min ago`;
//       } else if (diffInHours < 24) {
//         return `${Math.floor(diffInHours)}h ago`;
//       } else {
//         const diffInDays = Math.floor(diffInHours / 24);
//         return `${diffInDays}d ago`;
//       }
//     } catch (error) {
//       return 'Recent';
//     }
//   };

//   const renderNewsItem = ({ item }) => (
//     <View style={styles.newsItem}>
//       <View style={styles.newsImagePlaceholder}>
//         {item.image && (
//           <Image 
//             source={{ uri: item.image }} 
//             style={styles.newsImage} 
//             resizeMode="cover"
//           />
//         )}
//       </View>
//       <View style={styles.newsContent}>
//         <Text style={styles.newsTitle} numberOfLines={2}>{item.title}</Text>
//         <View style={styles.newsFooter}>
//           <Text style={styles.timeText}>
//             {item.isLive ? 'Live' : getRelativeTime(item.createdAt)}
//           </Text>
//           <View style={styles.interactionContainer}>
//             <TouchableOpacity style={styles.interaction}>
//               <Ionicons name="thumbs-up-outline" size={16} color="#666" />
//               <Text style={styles.interactionText}>{item.likes || 0}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.interaction}>
//               <Ionicons name="chatbubble-outline" size={16} color="#666" />
//               <Text style={styles.interactionText}>{item.comments?.length || 0}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.interaction}>
//               <Ionicons name="share-social-outline" size={16} color="#666" />
//               <Text style={styles.interactionText}>{item.shares || 0}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );

//   const renderVideoItem = ({ item }) => (
//     <View style={styles.videoItem}>
//       <View style={styles.videoThumbnailPlaceholder}>
//         {item.image && (
//           <Image 
//             source={{ uri: item.image }} 
//             style={styles.videoImage} 
//             resizeMode="cover"
//           />
//         )}
//         {item.isLive && (
//           <View style={styles.liveIndicator}>
//             <Text style={styles.liveIndicatorText}>LIVE</Text>
//           </View>
//         )}
//       </View>
//       <Text style={styles.videoTitle} numberOfLines={2}>{item.title}</Text>
//       <View style={styles.videoFooter}>
//         <TouchableOpacity style={styles.playButton}>
//           <Ionicons 
//             name={item.isLive ? 'radio-outline' : 'play-circle-outline'} 
//             size={16} 
//             color={item.isLive ? '#f00' : '#1C2699'} 
//           />
//           <Text style={[
//             styles.playButtonText, 
//             {color: item.isLive ? '#f00' : '#1C2699'}
//           ]}>
//             {item.isLive ? 'Live Video' : 'Play Video'}
//           </Text>
//         </TouchableOpacity>
//         <View style={styles.interactionContainer}>
//           <TouchableOpacity style={styles.interaction}>
//             <Ionicons name="thumbs-up-outline" size={16} color="#666" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.interaction}>
//             <Ionicons name="chatbubble-outline" size={16} color="#666" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.interaction}>
//             <Ionicons name="share-social-outline" size={16} color="#666" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
  
//   // Get video news
//   const videoNews = filteredNews.filter(news => news.hasVideo);

//   // Render search results section
//   const renderSearchResults = () => (
//     <View style={styles.searchResultsContainer}>
//       <View style={styles.searchHeaderContainer}>
//         <Text style={styles.searchResultsTitle}>Search Results</Text>
//         <TouchableOpacity onPress={clearSearch}>
//           <Text style={styles.clearSearchText}>Clear</Text>
//         </TouchableOpacity>
//       </View>
      
//       {searchLoading ? (
//         <View style={styles.searchLoadingContainer}>
//           <ActivityIndicator size="small" color="#1C2699" />
//           <Text style={styles.searchLoadingText}>Searching...</Text>
//         </View>
//       ) : searchResults.length === 0 ? (
//         <Text style={styles.emptySearchText}>No results found for "{searchQuery}"</Text>
//       ) : (
//         <FlatList
//           data={searchResults}
//           renderItem={renderNewsItem}
//           keyExtractor={(item) => item._id}
//           contentContainerStyle={styles.searchResultsList}
//         />
//       )}
//     </View>
//   );
  
//   // Function to search single news by ID
//   const searchSingleNews = async (newsId) => {
//     try {
//       setSearchLoading(true);
      
//       const response = await fetch(`https://news-portal-backend-code-a5rg.onrender.com/api/v1/news/${newsId}`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
      
//       const data = await response.json();
      
//       if (data.success) {
//         // Handle the single news data
//         // You might want to navigate to a detail screen or update state
//         return data.news;
//       } else {
//         setErrorMsg(data.message || 'Failed to fetch news details');
//         return null;
//       }
//     } catch (error) {
//       console.error('Error fetching single news:', error);
//       setErrorMsg('Failed to load news details');
//       return null;
//     } finally {
//       setSearchLoading(false);
//     }
//   };

//   // Example usage in a news item press handler
//   const handleNewsPress = async (newsId) => {
//     const newsDetails = await searchSingleNews(newsId);
//     if (newsDetails) {
//       // Navigate to detail screen or update UI
//       // navigation.navigate('NewsDetail', { news: newsDetails });
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#1C2699" barStyle="light-content" />
      
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <View style={styles.headerRow}>
//           <Text style={styles.headerText}>News That Matters, Just for You</Text>
//           <Ionicons
//             name="notifications-outline"
//             size={29}
//             color="#FCBA37"
//           />
//         </View>
        
//         {/* Search Box */}
//         <View style={styles.searchContainer}>
//           <View style={styles.searchBox}>
//             <EvilIcons
//               name="search"
//               size={20}
//               color="#666"
//               style={styles.searchIcon}
//             />
//             <TextInput
//               placeholder="Search News..."
//               style={styles.searchInput}
//               placeholderTextColor="#666"
//               value={searchQuery}
//               onChangeText={handleSearchChange}
//               onSubmitEditing={handleSearchSubmit}
//               returnKeyType="search"
//             />
//             {searchQuery.length > 0 && (
//               <TouchableOpacity onPress={clearSearch}>
//                 <Ionicons name="close-circle" size={20} color="#666" />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </View>
      
//       {/* Main Content */}
//       <View style={styles.mainContainer}>
//         {/* Only show tabs when not searching */}
//         {!isSearching && (
//           <View style={styles.tabContainer}>
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.tabScrollContent}
//             >
//               {tabs.map((tab) => (
//                 <TouchableOpacity
//                   key={tab}
//                   style={[
//                     styles.tab,
//                     activeTab === tab && styles.activeTab
//                   ]}
//                   onPress={() => setActiveTab(tab)}
//                 >
//                   <Text style={[
//                     styles.tabText,
//                     activeTab === tab && styles.activeTabText
//                   ]}>
//                     {tab}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         )}

//         {/* Loading Indicator */}
//         {loading && !isSearching && (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#1C2699" />
//             <Text style={styles.loadingText}>Loading news...</Text>
//           </View>
//         )}

//         {/* Error Message */}
//         {errorMsg && !loading && !isSearching && (
//           <View style={styles.errorContainer}>
//             <Text style={styles.errorText}>{errorMsg}</Text>
//             <TouchableOpacity style={styles.retryButton} onPress={fetchData}>
//               <Text style={styles.retryButtonText}>Retry</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Search Results */}
//         {isSearching ? (
//           renderSearchResults()
//         ) : (
//           // Regular Content
//           !loading && !errorMsg && (
//             <FlatList
//               data={[1]} // Dummy data for single render
//               renderItem={() => (
//                 <>
//                   {/* Today News Content */}
//                   <View style={styles.newsContainer}>
//                     <Text style={styles.headlinetext}>
//                       {activeTab === 'Today News' ? 'Today Headlines' : `${activeTab} Headlines`}
//                     </Text>
//                     {headlineNews.length > 0 ? (
//                       headlineNews.map((news, index) => (
//                         <View key={news._id || index} style={styles.newsItemOriginal}>
//                           <View style={styles.newsImageOriginalPlaceholder}>
//                             {news.image && (
//                               <Image 
//                                 source={{ uri: news.image }} 
//                                 style={styles.newsImageOriginal} 
//                                 resizeMode="cover"
//                               />
//                             )}
//                           </View>
//                           <Text style={styles.newsTitleOriginal}>{news.title}</Text>
//                           <Text style={styles.newsTimeOriginal}>
//                             {news.isLive ? 'Live' : getRelativeTime(news.createdAt)}
//                           </Text>
//                         </View>
//                       ))
//                     ) : (
//                       <Text style={styles.emptyText}>No headlines available</Text>
//                     )}

//                     {/* Live Score Section - Only show in Today News or Sports News tab */}
//                     {(activeTab === 'Today News' || activeTab === 'Sports News') && liveScore && (
//                       <View style={styles.liveScoreContainer}>
//                         <Text style={styles.headlinetext}>Live Score</Text>
//                         <Text style={styles.liveScoreTitle}>{liveScore.match}</Text>
//                         <View style={styles.scoreRow}>
//                           <Text style={styles.liveScoreText}>{liveScore.team1Score}</Text>
//                           <Text style={styles.liveScoreText}>{liveScore.team2Score}</Text>
//                         </View>
//                         <Text style={styles.liveScoreText}>{liveScore.status}</Text>
//                       </View>
//                     )}
                    
//                     {/* Show message if no live score available */}
//                     {(activeTab === 'Today News' || activeTab === 'Sports News') && !liveScore && !loading && (
//                       <View style={styles.liveScoreContainer}>
//                         <Text style={styles.headlinetext}>Live Score</Text>
//                         <Text style={styles.emptyText}>No live matches at the moment</Text>
//                       </View>
//                     )}
//                   </View>

//                   {/* News Feed Section */}
//                   <View style={styles.feedContainer}>
//                     {/* Latest News Section */}
//                     <View style={styles.sectionHeader}>
//                       <Text style={styles.sectionTitle}>Latest</Text>
//                       <TouchableOpacity>
//                         <Text style={styles.seeAllText}>See all</Text>
//                       </TouchableOpacity>
//                     </View>
                    
//                     {feedNews.length > 0 ? (
//                       feedNews.map(item => (
//                         <React.Fragment key={item._id}>
//                           <TouchableOpacity 
//                             onPress={() => handleNewsPress(item._id)}
//                             style={styles.newsItem}
//                           >
//                             {renderNewsItem({ item })}
//                           </TouchableOpacity>
//                         </React.Fragment>
//                       ))
//                     ) : (
//                       <Text style={styles.emptyText}>No news available</Text>
//                     )}

//                     {/* Market Indices */}
//                     <View style={styles.sectionHeader}>
//                       <Text style={styles.sectionTitle}>Market Indices</Text>
//                       <TouchableOpacity>
//                         <Text style={styles.seeAllText}>See all</Text>
//                       </TouchableOpacity>
//                     </View>
                    
//                     {marketIndices.length > 0 ? (
//                       <ScrollView 
//                         horizontal 
//                         showsHorizontalScrollIndicator={false} 
//                         style={styles.marketContainer}
//                       >
//                         {marketIndices.map((index) => (
//                           <View key={index.id || index.name} style={styles.indexCard}>
//                             <Text style={styles.indexName}>{index.name}</Text>
//                             <Text style={styles.indexValue}>{index.value}</Text>
//                             <Text style={[
//                               styles.indexChange,
//                               {color: index.change.includes('+') ? '#4CAF50' : '#F44336'}
//                             ]}>
//                               {index.change}
//                             </Text>
//                           </View>
//                         ))}
//                       </ScrollView>
//                     ) : (
//                       <Text style={[styles.emptyText, {marginHorizontal: 16}]}>
//                         Market data unavailable
//                       </Text>
//                     )}

//                     {/* Top Videos */}
//                     <View style={styles.sectionHeader}>
//                       <Text style={styles.sectionTitle}>Top Videos</Text>
//                       <TouchableOpacity>
//                         <Text style={styles.seeAllText}>See all</Text>
//                       </TouchableOpacity>
//                     </View>
                    
//                     {videoNews.length > 0 ? (
//                       videoNews.map(item => (
//                         <React.Fragment key={item._id}>
//                           {renderVideoItem({ item })}
//                         </React.Fragment>
//                       ))
//                     ) : (
//                       <Text style={styles.emptyText}>No videos available</Text>
//                     )}
//                   </View>
//                 </>
//               )}
//               keyExtractor={() => 'content'}
//             />
//           )
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   headerContainer: {
//     backgroundColor: '#1C2699',
//     paddingHorizontal: 16,
//     paddingBottom: 16,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FCBA37',
//   },
//   searchContainer: {
//     paddingHorizontal: 4,
//   },
//   searchBox: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     height: 40,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     height: '100%',
//     fontSize: 14,
//     color: '#000',
//   },
//   mainContainer: {
//     flex: 1,
//   },
//   tabContainer: {
//     backgroundColor: '#fff',
//     marginTop: 10,
//   },
//   tabScrollContent: {
//     paddingHorizontal: 16,
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     marginRight: 8,
//     borderWidth: 1,
//     borderRadius: 20,
//     borderColor: '#1C2059',
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#1C2699',
//     backgroundColor: '#1C2059',
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FCBA37',
//     fontWeight: '600',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#1C2699',
//     fontSize: 16,
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   errorText: {
//     color: '#F44336',
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   retryButton: {
//     backgroundColor: '#1C2699',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 4,
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   newsContainer: {
//     paddingHorizontal: 16,
//     marginTop: 16,
//   },
//   headlinetext: {
//     color: '#000444',
//     fontWeight: '700',
//     marginBottom: 10,
//   },
//   newsItemOriginal: {
//     marginBottom: 16,
//   },
//   newsImageOriginalPlaceholder: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 8,
//     backgroundColor: '#e0e0e0',
//     overflow: 'hidden',
//   },
//   newsImageOriginal: {
//     width: '100%',
//     height: '100%',
//   },
//   newsTitleOriginal: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000',
//   },
//   newsTimeOriginal: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   liveScoreContainer: {
//     marginTop: 16,
//     marginBottom: 24,
//   },
//   liveScoreTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000',
//     textAlign: 'center',
//   },
//   scoreRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   liveScoreText: {
//     fontSize: 16,
//     color: '#666',
//     marginTop: 4,
//   },
  
//   // Feed Styles
//   feedContainer: {
//     backgroundColor: '#f5f5f5',
//     paddingTop: 12,
//     paddingBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     marginVertical: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#000',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#1C2699',
//     fontWeight: '500',
//   },
//   newsItem: {
//     flexDirection: 'row',
//     marginHorizontal: 16,
//     marginBottom: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     overflow: 'hidden',
//     elevation: 2,
//   },
//   newsImagePlaceholder: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#e0e0e0',
//     overflow: 'hidden',
//   },
//   newsImage: {
//     width: '100%',
//     height: '100%',
//   },
//   newsContent: {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'space-between',
//   },
//   newsTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//   },
//   newsFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   timeText: {
//     fontSize: 12,
//     color: '#666',
//   },
//   interactionContainer: {
//     flexDirection: 'row',
//   },
//   interaction: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   interactionText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 2,
//   },
//   marketContainer: {
//     paddingHorizontal: 12,
//     marginBottom: 16,
//   },
//   indexCard: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 12,
//     marginHorizontal: 4,
//     width: 120,
//     elevation: 2,
//   },
//   indexName: {
//     fontSize: 12,
//     color: '#666',
//     marginBottom: 4,
//   },
//   indexValue: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#000',
//     marginBottom: 2,
//   },
//   indexChange: {
//     fontSize: 12,
//   },
//   videoItem: {
//     marginHorizontal: 16,
//     marginBottom: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     overflow: 'hidden',
//     elevation: 2,
//   },
//   videoThumbnailPlaceholder: {
//     width: '100%',
//     height: 180,
//     backgroundColor: '#e0e0e0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   videoImage: {
//     width: '100%',
//     height: '100%',
//   },
//   liveIndicator: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     backgroundColor: '#f00',
//     paddingVertical: 2,
//     paddingHorizontal: 8,
//     borderRadius: 4,
//   },
//   liveIndicatorText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   videoTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//     padding: 10,
//   },
//   videoFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     paddingTop: 0,
//   },
//   playButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   playButtonText: {
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   emptyText: {
//     color: '#666',
//     fontSize: 14,
//     textAlign: 'center',
//     padding: 20,
//   },
import React, { useState, useEffect } from 'react';
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
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Today News');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [marketIndices, setMarketIndices] = useState([]);
  const [liveScore, setLiveScore] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  
  //const navigation = useNavigation();
  
  const tabs = ['Today News', 'Top News', 'Live News', 'Election', 'Sports News', 'Trending'];

  // Fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      setErrorMsg(null);
      
      // Fetch news
      const newsResponse = await fetch('https://news-portal-backend-code-a5rg.onrender.com/api/v1/news/getallnews');
      
      if (!newsResponse.ok) {
        throw new Error(`HTTP error! Status: ${newsResponse.status}`);
      }
      
      const newsData = await newsResponse.json();
      
      if (newsData.success) {
        setAllNews(newsData.news);
      } else {
        setErrorMsg(newsData.message || 'Failed to fetch news');
      }
      
      // Fetch market indices
      const marketResponse = await fetch('https://news-portal-backend-code-a5rg.onrender.com/api/v1/market/indices');
      
      if (marketResponse.ok) {
        const marketData = await marketResponse.json();
        if (marketData.success) {
          setMarketIndices(marketData.indices);
        }
      }
      
      // Fetch live score
      const scoreResponse = await fetch('https://news-portal-backend-code-a5rg.onrender.com/api/v1/sports/livescore');
      
      if (scoreResponse.ok) {
        const scoreData = await scoreResponse.json();
        if (scoreData.success) {
          setLiveScore(scoreData.score);
        }
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMsg('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Call fetchData when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Search news by query
  const searchNews = async (query) => {
    if (!query.trim()) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    try {
      setSearchLoading(true);
      setIsSearching(true);
      
      // API endpoint for searching news
      const searchResponse = await fetch(`https://news-portal-backend-code-a5rg.onrender.com/api/v1/news/search?query=${query}`);
      
      if (!searchResponse.ok) {
        throw new Error(`HTTP error! Status: ${searchResponse.status}`);
      }
      
      const searchData = await searchResponse.json();
      
      if (searchData.success) {
        setSearchResults(searchData.news || []);
      } else {
        setSearchResults([]);
        setErrorMsg(searchData.message || 'Search failed');
        console.error('Search failed:', searchData.message);
      }
    } catch (error) {
      console.error('Error searching news:', error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  // Handle search input changes
  const handleSearchChange = (text) => {
    setSearchQuery(text);
    
    // Debounce search to avoid too many API calls
    if (text.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  // Handle search submission
  const handleSearchSubmit = () => {
    Keyboard.dismiss();
    searchNews(searchQuery);
  };

  // Clear search results and return to normal view
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
    Keyboard.dismiss();
  };
  

  // Function to get news for the selected tab
  const getFilteredNews = () => {
    if (!allNews || allNews.length === 0) {
      return [];
    }
    
    switch (activeTab) {
      case 'Top News':
        return allNews.filter(news => news.isTopNews);
      case 'Live News':
        return allNews.filter(news => news.isLive);
      case 'Election':
        return allNews.filter(news => news.category?.toLowerCase() === 'election');
      case 'Sports News':
        return allNews.filter(news => news.category?.toLowerCase() === 'sports');
      case 'Trending':
        return allNews.filter(news => news.isTrending);
      default: // Today News
        return allNews;
    }
  };

  const filteredNews = getFilteredNews();
  
  // Get headlines (first 5 news items)
  const headlineNews = filteredNews.slice(0, 5);
  
  // Get remaining news for the feed
  const feedNews = filteredNews.slice(2);

  // Format relative time
  const getRelativeTime = (timestamp) => {
    if (!timestamp) return 'Recent';
    
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffInMs = now - date;
      const diffInHours = diffInMs / (1000 * 60 * 60);
      
      if (diffInHours < 1) {
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        return `${diffInMinutes} min ago`;
      } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)}h ago`;
      } else {
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays}d ago`;
      }
    } catch (error) {
      return 'Recent';
    }
  };

  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <View style={styles.newsImagePlaceholder}>
        {item.image && (
          <Image 
            source={{ uri: item.image }} 
            style={styles.newsImage} 
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle} numberOfLines={2}>{item.title}</Text>
        <View style={styles.newsFooter}>
          <Text style={styles.timeText}>
            {item.isLive ? 'Live' : getRelativeTime(item.createdAt)}
          </Text>
          <View style={styles.interactionContainer}>
            <TouchableOpacity style={styles.interaction}>
              <Ionicons name="thumbs-up-outline" size={16} color="#666" />
              <Text style={styles.interactionText}>{item.likes || 0}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interaction}>
              <Ionicons name="chatbubble-outline" size={16} color="#666" />
              <Text style={styles.interactionText}>{item.comments?.length || 0}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interaction}>
              <Ionicons name="share-social-outline" size={16} color="#666" />
              <Text style={styles.interactionText}>{item.shares || 0}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const renderVideoItem = ({ item }) => (
    <View style={styles.videoItem}>
      <View style={styles.videoThumbnailPlaceholder}>
        {item.image && (
          <Image 
            source={{ uri: item.image }} 
            style={styles.videoImage} 
            resizeMode="cover"
          />
        )}
        {item.isLive && (
          <View style={styles.liveIndicator}>
            <Text style={styles.liveIndicatorText}>LIVE</Text>
          </View>
        )}
      </View>
      <Text style={styles.videoTitle} numberOfLines={2}>{item.title}</Text>
      <View style={styles.videoFooter}>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons 
            name={item.isLive ? 'radio-outline' : 'play-circle-outline'} 
            size={16} 
            color={item.isLive ? '#f00' : '#1C2699'} 
          />
          <Text style={[
            styles.playButtonText, 
            {color: item.isLive ? '#f00' : '#1C2699'}
          ]}>
            {item.isLive ? 'Live Video' : 'Play Video'}
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
  
  // Get video news
  const videoNews = filteredNews.filter(news => news.hasVideo);

  // Render search results section
  const renderSearchResults = () => (
    <View style={styles.searchResultsContainer}>
      <View style={styles.searchHeaderContainer}>
        <Text style={styles.searchResultsTitle}>Search Results</Text>
        <TouchableOpacity onPress={clearSearch}>
          <Text style={styles.clearSearchText}>Clear</Text>
        </TouchableOpacity>
      </View>
      
      {searchLoading ? (
        <View style={styles.searchLoadingContainer}>
          <ActivityIndicator size="small" color="#1C2699" />
          <Text style={styles.searchLoadingText}>Searching...</Text>
        </View>
      ) : searchResults.length === 0 ? (
        <Text style={styles.emptySearchText}>No results found for "{searchQuery}"</Text>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={renderNewsItem}
          keyExtractor={(item) => item._id || `search-${item.title}`}
          contentContainerStyle={styles.searchResultsList}
        />
      )}
    </View>
  );
  
  // Function to search single news by ID
  const searchSingleNews = async (newsId) => {
    try {
      setSearchLoading(true);
      
      const response = await fetch(`https://news-portal-backend-code-a5rg.onrender.com/api/v1/news/${newsId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Handle the single news data
        // You might want to navigate to a detail screen or update state
        return data.news;
      } else {
        setErrorMsg(data.message || 'Failed to fetch news details');
        return null;
      }
    } catch (error) {
      console.error('Error fetching single news:', error);
      setErrorMsg('Failed to load news details');
      return null;
    } finally {
      setSearchLoading(false);
    }
  };

  // Example usage in a news item press handler
  const handleNewsPress = async (newsId) => {
    const newsDetails = await searchSingleNews(newsId);
    if (newsDetails) {
      // Navigate to detail screen or update UI
      // navigation.navigate('NewsDetail', { news: newsDetails });
    }
  };

  // Render the main content of the app
  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1C2699" />
          <Text style={styles.loadingText}>Loading news...</Text>
        </View>
      );
    }

    if (errorMsg) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMsg}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchData}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <FlatList
        data={feedNews}
        ListHeaderComponent={() => (
          <>
            {/* Today News Content */}
            <View style={styles.newsContainer}>
              <Text style={styles.headlineText}>
                {activeTab === 'Today News' ? 'Today Headlines' : `${activeTab} Headlines`}
              </Text>
              {headlineNews.length > 0 ? (
                headlineNews.map((news, index) => (
                  <TouchableOpacity 
                    key={news._id || `headline-${index}`} 
                    style={styles.newsItemOriginal}
                    onPress={() => handleNewsPress(news._id)}
                  >
                    <View style={styles.newsImageOriginalPlaceholder}>
                      {news.image && (
                        <Image 
                          source={{ uri: news.image }} 
                          style={styles.newsImageOriginal} 
                          resizeMode="cover"
                        />
                      )}
                    </View>
                    <Text style={styles.newsTitleOriginal}>{news.title}</Text>
                    <Text style={styles.newsTimeOriginal}>
                      {news.isLive ? 'Live' : getRelativeTime(news.createdAt)}
                    </Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.emptyText}>No headlines available</Text>
              )}

              {/* Live Score Section - Only show in Today News or Sports News tab */}
              {(activeTab === 'Today News' || activeTab === 'Sports News') && liveScore && (
                <View style={styles.liveScoreContainer}>
                  <Text style={styles.headlineText}>Live Score</Text>
                  <Text style={styles.liveScoreTitle}>{liveScore.match}</Text>
                  <View style={styles.scoreRow}>
                    <Text style={styles.liveScoreText}>{liveScore.team1Score}</Text>
                    <Text style={styles.liveScoreText}>{liveScore.team2Score}</Text>
                  </View>
                  <Text style={styles.liveScoreText}>{liveScore.status}</Text>
                </View>
              )}
              
              {/* Show message if no live score available */}
              {(activeTab === 'Today News' || activeTab === 'Sports News') && !liveScore && (
                <View style={styles.liveScoreContainer}>
                  <Text style={styles.headlineText}>Live Score</Text>
                  <Text style={styles.emptyText}>No live matches at the moment</Text>
                </View>
              )}
            </View>

            {/* Latest News Section Header */}
            <View style={styles.feedContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Latest</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNewsPress(item._id)}>
            {renderNewsItem({ item })}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id || `feed-${item.title}`}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No news available</Text>
        )}
        ListFooterComponent={() => (
          <>
            {/* Market Indices */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Market Indices</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            
            {marketIndices.length > 0 ? (
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                style={styles.marketContainer}
              >
                {marketIndices.map((index) => (
                  <View key={index.id || index.name} style={styles.indexCard}>
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
            ) : (
              <Text style={[styles.emptyText, {marginHorizontal: 16}]}>
                Market data unavailable
              </Text>
            )}

            {/* Top Videos */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Top Videos</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            
            {videoNews.length > 0 ? (
              <View>
                {videoNews.map((item) => (
                  <TouchableOpacity 
                    key={item._id || `video-${item.title}`}
                    onPress={() => handleNewsPress(item._id)}
                  >
                    {renderVideoItem({ item })}
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <Text style={styles.emptyText}>No videos available</Text>
            )}
          </>
        )}
      />
    );
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
            size={24}
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
              value={searchQuery}
              onChangeText={handleSearchChange}
              onSubmitEditing={handleSearchSubmit}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={clearSearch}>
                <Ionicons name="close-circle" size={20} color="#666" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      
      {/* Main Content */}
      <View style={styles.mainContainer}>
        {/* Only show tabs when not searching */}
        {!isSearching && (
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
        )}

        {/* Conditional rendering based on search state */}
        {isSearching ? renderSearchResults() : renderContent()}
      </View>
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
  mainContainer: {
    flex: 1,
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    color: '#1C2699',
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#F44336',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#1C2699',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  newsContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  headlineText: {
    color: '#000444',
    fontWeight: '700',
    marginBottom: 10,
  },
  newsItemOriginal: {
    marginBottom: 16,
  },
  newsImageOriginalPlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  newsImageOriginal: {
    width: '100%',
    height: '100%',
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
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  liveScoreText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  
  // Feed Styles
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
  newsImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: '100%',
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
  videoThumbnailPlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#e0e0e0',
    position: 'relative',
    overflow: 'hidden',
  },
  videoImage: {
    width: '100%',
    height: '100%',
  },
  liveIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#f00',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  liveIndicatorText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
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
  emptyText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
  },
  
  
  // Search results styles
  searchResultsContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchResultsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  clearSearchText: {
    fontSize: 14,
    color: '#1C2699',
  },
  searchResultsList: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  searchLoadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  searchLoadingText: {
    marginTop: 8,
    color: '#666',
  },
  emptySearchText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    padding: 30,
  }
});

export default HomeScreen;