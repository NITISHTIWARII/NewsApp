import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProfileEditScreen = () => {
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/1.jpg"
  );

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permissions to upload images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], 
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <TouchableOpacity style={styles.changePhotoContainer} onPress={pickImage}>
        <MaterialIcons name="photo-camera" size={24} color="#000" />
        <Text style={styles.changePhoto}>Change Photo</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <TextInput style={styles.input} placeholder="Arun" defaultValue="Arun" />
      </View>

      <View style={styles.inputContainer}>
        <Text>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+91 93235782757"
          keyboardType="phone-pad"
          defaultValue="+91 9087654321"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="arun1619@gmail.com"
          defaultValue="arun1416@gmail.com"
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#F8F6F4",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  changePhotoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  changePhoto: {
    color: "#1E2A78",
    marginLeft: 8,
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "#121E49",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileEditScreen;
