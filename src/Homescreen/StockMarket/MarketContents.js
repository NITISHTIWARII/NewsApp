import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const MarketContents = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Back button and title */}
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>Market Indices</Text>
      </View>

      {/* Stock Market Indices */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Stock Market Indices</Text>
        <View style={styles.indicesContainer}>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>SENSEX BSE</Text>
            <Text style={styles.indexValue}>77013.69</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-down" size={16} color="#FF4B4B" />
              <Text style={[styles.changeValue, styles.negative]}>492.27 (-0.63%)</Text>
            </View>
          </View>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>NIFTY NSE</Text>
            <Text style={styles.indexValue}>23289.7</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-down" size={16} color="#FF4B4B" />
              <Text style={[styles.changeValue, styles.negative]}>192.46 (-0.82%)</Text>
            </View>
          </View>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>FTSE 100</Text>
            <Text style={styles.indexValue}>8536.26</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-down" size={16} color="#FF4B4B" />
              <Text style={[styles.changeValue, styles.negative]}>90.26 (-0.40%)</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Commodities Market Indices */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Commodities Market Indices</Text>
        <View style={styles.indicesContainer}>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>Gold per/kg</Text>
            <Text style={styles.indexValue}>90,512.87</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-down" size={16} color="#FF4B4B" />
              <Text style={[styles.changeValue, styles.negative]}>113.49 (-0.13%)</Text>
            </View>
          </View>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>Silver per/kg</Text>
            <Text style={styles.indexValue}>1,010.51</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-down" size={16} color="#FF4B4B" />
              <Text style={[styles.changeValue, styles.negative]}>5.56 (-0.55%)</Text>
            </View>
          </View>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>Petrol per/litre</Text>
            <Text style={styles.indexValue}>100.90</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-down" size={16} color="#FF4B4B" />
              <Text style={[styles.changeValue, styles.negative]}>0.42 (-0.04%)</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Currency Market Indices */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Currency Market Indices</Text>
        <View style={styles.indicesContainer}>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>USD per/dollar</Text>
            <Text style={styles.indexValue}>86.17</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-up" size={16} color="#4CAF50" />
              <Text style={[styles.changeValue, styles.positive]}>0.11 (+0.13%)</Text>
            </View>
          </View>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>Euro per/Euro</Text>
            <Text style={styles.indexValue}>89.99</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-up" size={16} color="#4CAF50" />
              <Text style={[styles.changeValue, styles.positive]}>0.55 (+0.05%)</Text>
            </View>
          </View>
          <View style={styles.indexItem}>
            <Text style={styles.indexName}>Bitcoin per/coin</Text>
            <Text style={styles.indexValue}>86,28,489.15</Text>
            <View style={styles.changeContainer}>
              <Ionicons name="arrow-down" size={16} color="#FF4B4B" />
              <Text style={[styles.changeValue, styles.negative]}>2.46 (-0.24%)</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Load More Button */}
      <TouchableOpacity style={styles.loadMoreButton}>
        <Text style={styles.loadMoreText}>Load More</Text>
      </TouchableOpacity>

      
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 16,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  indicesContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  indexItem: {
    marginBottom: 16,
  },
  indexName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  indexValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeValue: {
    fontSize: 14,
    marginLeft: 4,
  },
  positive: {
    color: '#4CAF50',
  },
  negative: {
    color: '#FF4B4B',
  },
  loadMoreButton: {
    backgroundColor: '#1C2699',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 24,
    alignItems: 'center',
  },
  loadMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
});

export default MarketContents;