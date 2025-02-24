import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FilterScreen = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Gujarat', 'Kolkata', 'Bangalore', 'Hyderabad', 'More'];
  const preferences = [
    'Politics', 'India News', 'Finance', 'Sports', 'World', 'Health', 'Travel', 
    'Style', 'Education', 'Entertainment', 'Business & Economy', 'Technology', 'Science', 'Latest', 'More'
  ];

  const toggleSelection = (item, selectedList, setSelectedList) => {
    setSelectedList(prevSelected => 
      prevSelected.includes(item) 
        ? prevSelected.filter(i => i !== item) 
        : [...prevSelected, item]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.header}>Filter</Text>

        <Text style={styles.sectionHeader}>Cities</Text>
        <View style={styles.section}>
          {cities.map((city, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                selectedCities.includes(city) && styles.selectedItem
              ]}
              onPress={() => toggleSelection(city, selectedCities, setSelectedCities)}
              accessibilityRole="button"
            >
              <Text style={selectedCities.includes(city) ? styles.selectedText : styles.defaultText}>{city}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Preferences</Text>
        <View style={styles.section}>
          {preferences.map((preference, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                selectedPreferences.includes(preference) && styles.selectedItem
              ]}
              onPress={() => toggleSelection(preference, selectedPreferences, setSelectedPreferences)}
              accessibilityRole="button"
            >
              <Text style={selectedPreferences.includes(preference) ? styles.selectedText : styles.defaultText}>{preference}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  defaultText: {
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  applyButton: {
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FilterScreen;
