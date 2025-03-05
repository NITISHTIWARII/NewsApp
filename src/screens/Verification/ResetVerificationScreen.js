import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetVerificationScreen = ({ route, navigation }) => {
  const [timer, setTimer] = useState(30);
  const { type } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code Sent!</Text>
      <Text style={styles.subtitle}>
        {type === 'change' ? 'A verification code has been sent to your email for password change.' : 'A verification code has been sent to your email for Reset Password.'}
      </Text>
      <TextInput style={styles.input} placeholder="Enter Verification Code..." keyboardType="numeric" />
      <Text style={styles.resendText}>Resend ({timer}s)</Text>
      <TouchableOpacity style={styles.button} onPress={() => { if (type != 'change') {
        navigation.navigate('VerificationReset')}}}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F8F6F4' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', marginBottom: 20 },
  input: { height: 50, width: '100%', borderWidth: 1, borderColor: '#DDD', borderRadius: 10, paddingHorizontal: 15, marginBottom: 15 },
  resendText: { color: '#1E2A78', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#121E49', padding: 15, borderRadius: 10, alignItems: 'center', width: '100%' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default ResetVerificationScreen;
