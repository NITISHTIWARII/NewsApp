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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {maxWorkers} from '../metro.config';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require('../src/assets/Image.png')}
          style={styles.TopImage}
        />
      </View>
      <View>
        <Text style={styles.Text}>Create Acount</Text>
      </View>
      <View style={styles.Inputconatiner}>
        <FontAwesome
          name={'user'}
          size={24}
          color="grey"
          style={styles.InputIcon}
        />
        <TextInput style={styles.textInput} placeholder="Username" />
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
      <View style={styles.Inputconatiner}>
        <MaterialCommunityIcons
          name={'email'}
          size={24}
          color="grey"
          style={styles.InputIcon}
        />
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      <View style={styles.Inputconatiner}>
        <FontAwesome
          name={'phone'}
          size={24}
          color="grey"
          style={styles.InputIcon}
        />
        <TextInput style={styles.textInput} placeholder="Phone" />
      </View>
      <TouchableOpacity >

      <View style={styles.SignInButton}>
        <Text style={styles.signINtext}>Create</Text>
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
      </TouchableOpacity>

      
        <Text style={styles.bottomtext}>Or Create using Social Media</Text>
     

      <View style={styles.bottomicons}>
        <Entypo
          name={'facebook-with-circle'}
          size={30}
          color="blue"
          style={styles.socailIcons}
        />

        <AntDesign name={'google'} size={30} color style={styles.socailIcons} />

        <AntDesign
          name={'twitter'}
          size={30}
          color="blue"
          style={styles.socailIcons}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F',
    flex: 1,
  },
  topImageContainer: {},

  TopImage: {
    width: '391',
    height: 119,
    position: 'relative',
    left: '-203',
  },
  Text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500',
    margin: -20,
    marginBottom: 10,
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
    marginTop: 77,
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
    marginTop: 40,
    width: '110%',
    marginBottom: -9,
  },
  bottomimage: {
    height: 500,
    width: 300,
  },
 
  bottomicons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socailIcons: {
    borderColor: 'white',
    elevation: 10,
    margin: 20,
    borderRadius: 20,
  },
});
