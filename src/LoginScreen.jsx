import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const Navigation = useNavigation();
  const handleregister = () => {
    Navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require('../src/assets/Image.png')}
          style={styles.TopImage}
        />
      </View>
      <View>
        <Text style={styles.Text}>HELLO</Text>
      </View>
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20}}>
          Sign In To Your Acount
        </Text>
      </View>

      <View style={styles.Inputconatiner}>
        <FontAwesome
          name={'user'}
          size={24}
          color="grey"
          style={styles.InputIcon}
        />
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      <View style={styles.Inputconatiner}>
        <SimpleLineIcons
          name={'lock'}
          size={24}
          color="grey"
          style={styles.InputIcon}
        />

<TextInput
          style={styles.PasswordInput}
          placeholder="Password"
          secureTextEntry
          
        />
      </View>
      <Text
        style={{width: '90%', fontSize: 15, color: 'grey', textAlign: 'right'}}>
        Forgot your password
      </Text>
      <View style={styles.SignInButton}>
        <Text style={styles.signINtext}>Signs IN</Text>
        <LinearGradient
          colors={['#B210FF', '#EECE13']}
          style={styles.linearGradient}>
          <AntDesign
            name={'arrowright'}
            size={24}
            color="white"
            style={styles.InputIcon}
          />
        </LinearGradient>
      </View>
      <TouchableOpacity onPress={handleregister}>
        <Text style={styles.bottomtext}>
          Don't have an acount?
          <Text style={{textDecorationLine: 'underline'}}> create</Text>
        </Text>
      </TouchableOpacity>

      {/* <View style={styles.bottomvector}>
        <ImageBackground
          source={require('../src/assets/leftvector.png')}
          style={styles.bottomimage}
        />
      </View> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F',
    flex: 1,
  },
  topImageContainer: {},

  TopImage: {
    width: '100%',
    height: 125,
    position: 'relative',
  },
  Text: {
    fontSize: 60,
    textAlign: 'center',
    padding: 1,
    fontWeight: 'bold',
  },

  Inputconatiner: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: 'center',
    height: 50,
  },
  InputIcon: {
    marginLeft: 15,
  },
  TextInput: {
    flex: 1,
  },
  PasswordInput: {
    fontSize: 15,
    flex: 1,
    marginLeft: 3,
  },
  signINtext: {
    color: '#262626',
    fontSize: 27,
    fontWeight: '500',
  },
  SignInButton: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'flex-end',
    width: '90%',
  },
  linearGradient: {
    height: 34,
    width: 54,
    borderRadius: 17,

    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  bottomtext: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 120,
    width: '110%',
  },
  bottomimage: {
    height: 500,
    width: 300,
  },
  bottomvector: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});
