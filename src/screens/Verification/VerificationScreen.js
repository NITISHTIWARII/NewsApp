import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationScreen = ({ route, navigation }) => {
  const { type } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.checkmark}>✔</Text>
      </View>
      <Text style={styles.title}>
        {type === 'changed' ? 'Password Changed Successfully' : 'Password Reset Successfully'}
      </Text>
      <Text style={styles.subtitle}>
        {type === 'changed' 
          ? 'Your password has been successfully changed. You can now log in with your new password.'
          : 'Your password has been successfully reset. You can now log in with your new password.'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F8F6F4' },
  iconContainer: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#28a745', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  checkmark: { fontSize: 40, color: '#FFF' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#121E49', padding: 15, borderRadius: 10, alignItems: 'center', width: '100%' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default VerificationScreen;
