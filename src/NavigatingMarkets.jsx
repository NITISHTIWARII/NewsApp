
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MarketIndicesContent from './MarketIndicesContent';

const NavigatingMarkets = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1C2699" barStyle="light-content" />
    
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Navigating Markets</Text>
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
            <EvilIcons
              name="navicon"
              size={24}
              color="#666"
              style={styles.filterIcon}
            />
          </View>
        </View>
      </View>
      
      <MarketIndicesContent/>
    </SafeAreaView>
  )
}

export default NavigatingMarkets

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
    marginTop: 10,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FCBA37',
  },
  searchContainer: {
    paddingHorizontal: 0,
  },
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  filterIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  }
})