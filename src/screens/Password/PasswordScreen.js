import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PasswordScreen = ({ type, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {type === 'change' ? 'Change Password' : 'Forget Password'}
      </Text>
      <Text style={styles.subtitle}>
        Set a new password to access your account
      </Text>

      {type === 'change' && (
        <TextInput style={styles.input} placeholder="Old Password" secureTextEntry />
      )}

      <TextInput style={styles.input} placeholder="New Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

      {type === 'change' && (
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotPassword}>Forget Password?</Text>
        </TouchableOpacity>
      )}
  
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (type === 'change') {
            navigation.navigate('VerificationChanged');
          } else {
            navigation.navigate('PasswordResetVerification');
          }
        }}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F6F4' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', marginBottom: 20 },
  input: { height: 50, borderWidth: 1, borderColor: '#DDD', borderRadius: 10, paddingHorizontal: 15, marginBottom: 15 },
  forgotPassword: { color: '#1E2A78', textAlign: 'right', marginBottom: 20 },
  button: { backgroundColor: '#121E49', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default PasswordScreen;
