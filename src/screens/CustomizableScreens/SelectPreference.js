import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const preferences = [
  {
    title: 'Popular',
    data: ['Science', 'Sports', 'Moviees', 'Politics', 'AI', 'Medicals'],
  },
  {
    title: 'Others',
    data: ['Tech', 'Music', 'Fashion', 'Business', 'Finance', 'Start-up','Others...'],
  },
];

const SelectPreference = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const toggleSelection = (item) => {
    setSelectedPreferences(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customize your preference</Text>
      {preferences.map((section, index) => (
        <View key={index}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.grid}>
            {section.data.map(item => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.button,
                  selectedPreferences.includes(item) && styles.selectedButton,
                ]}
                onPress={() => toggleSelection(item)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedPreferences.includes(item) && styles.selectedText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0A0A32',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#0A0A32',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    padding: 12,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0A0A32',
    minWidth: '30%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#0A0A32',
  },
  buttonText: {
    fontSize: 14,
    color: '#0A0A32',
  },
  selectedText: {
    color: 'white',
  },
  continueButton: {
    backgroundColor: '#0A0A32',
    padding: 15,
    borderRadius: 10,
    justifyContent:'flex-end',
    alignItems:"center",
    marginTop: 100,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectPreference;
