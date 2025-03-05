import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import ProfileScreen from "../screens/Profile/ProfileScreen";
// import ProfileEditScreen from "../screens/Profile/ProfileEditScreen";
// import NotificationSettingsScreen from "../screens/NotificationSettings/NotificationSettingsScreen";
// import PasswordSecurityScreen from "../screens/Password/PasswordSecurityScreen";
// import PasswordScreen from "../screens/Password/PasswordScreen";
// import ResetVerificationScreen from "../screens/Verification/ResetVerificationScreen";
// import VerificationScreen from "../screens/Verification/VerificationScreen";
// import OfflineSavesScreen from "../screens/OfflineSaves/OfflineSavesScreen";
// import TermsConditionsScreen from "../screens/TermsConditions/TermsConditionsScreen";
// import HelpSupportScreen from "../screens/HelpSupport/HelpSupportScreen";
// import LikedPostsScreen from "../screens/LikedPosts/LikedPostsScreen";
// //import SignInScreen from "../screens/SignIn/SignInScreen";



const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    {/* <Stack.Screen name="Home" component={SignInScreen} options={{ title: "Home" }} /> */}
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "My Profile" }} />
    <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{ title: "Edit Profile" }} />
    <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} options={{ title: "Notification Settings" }} />
    <Stack.Screen name="PasswordSecurity" component={PasswordSecurityScreen} options={{ title: "Password & Security" }} />
    <Stack.Screen name="ChangePassword">{(props) => <PasswordScreen {...props} type="change" />}</Stack.Screen>
    <Stack.Screen name="ForgetPassword">{(props) => <PasswordScreen {...props} type="forget" />}</Stack.Screen>
    <Stack.Screen name="PasswordResetVerification" component={ResetVerificationScreen} initialParams={{ type: "reset" }} />
    <Stack.Screen name="PasswordChangeVerification" component={ResetVerificationScreen} initialParams={{ type: "change" }} />
    <Stack.Screen name="VerificationChanged" component={VerificationScreen} initialParams={{ type: "changed" }} />
    <Stack.Screen name="VerificationReset" component={VerificationScreen} initialParams={{ type: "reset" }} />
    <Stack.Screen name="OfflineSaves" component={OfflineSavesScreen} options={{ title: "Offline Saves" }} />
    <Stack.Screen name="HelpSupport" component={HelpSupportScreen} options={{ title: "Help & Support" }} />
    <Stack.Screen name="LikedPosts" component={LikedPostsScreen} options={{ title: "Liked Posts" }} />
    <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} options={{ title: "Terms & Conditions" }} />
  </Stack.Navigator>
);

export default StackNavigator;


// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// // Import screens
// // Note: Adjust the import paths based on your project structure
// import ProfileScreen from "../../screens/Profile/ProfileScreen";
// import ProfileEditScreen from "../../screens/Profile/ProfileEditScreen";
// import NotificationSettingsScreen from "../../screens/NotificationSettings/NotificationSettingsScreen";
// import PasswordSecurityScreen from "../../screens/Password/PasswordSecurityScreen";
// import PasswordScreen from "../../screens/Password/PasswordScreen";
// import ResetVerificationScreen from "../../screens/Verification/ResetVerificationScreen";
// import VerificationScreen from "../../screens/Verification/VerificationScreen";
// import OfflineSavesScreen from "../../screens/OfflineSaves/OfflineSavesScreen";
// import TermsConditionsScreen from "../../screens/TermsConditions/TermsConditionsScreen";
// import HelpSupportScreen from "../../screens/HelpSupport/HelpSupportScreen";
// import LikedPostsScreen from "../../screens/LikedPosts/LikedPostsScreen";

// const Stack = createStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator initialRouteName="Profile">
//     {/* Removed HomeScreen from here since it's already in the bottom tab navigation */}
//     <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "My Profile" }} />
//     <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{ title: "Edit Profile" }} />
//     <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} options={{ title: "Notification Settings" }} />
//     <Stack.Screen name="PasswordSecurity" component={PasswordSecurityScreen} options={{ title: "Password & Security" }} />
//     <Stack.Screen 
//       name="ChangePassword" 
//       options={{ title: "Change Password" }}
//     >
//       {(props) => <PasswordScreen {...props} type="change" />}
//     </Stack.Screen>
//     <Stack.Screen 
//       name="ForgetPassword"
//       options={{ title: "Forgot Password" }}
//     >
//       {(props) => <PasswordScreen {...props} type="forget" />}
//     </Stack.Screen>
//     <Stack.Screen 
//       name="PasswordResetVerification" 
//       component={ResetVerificationScreen} 
//       initialParams={{ type: "reset" }}
//       options={{ title: "Password Reset Verification" }}
//     />
//     <Stack.Screen 
//       name="PasswordChangeVerification" 
//       component={ResetVerificationScreen} 
//       initialParams={{ type: "change" }}
//       options={{ title: "Password Change Verification" }}
//     />
//     <Stack.Screen 
//       name="VerificationChanged" 
//       component={VerificationScreen} 
//       initialParams={{ title: "Verification", type: "changed" }}
//     />
//     <Stack.Screen 
//       name="VerificationReset" 
//       component={VerificationScreen} 
//       initialParams={{ title: "Verification", type: "reset" }}
//     />
//     <Stack.Screen name="OfflineSaves" component={OfflineSavesScreen} options={{ title: "Offline Saves" }} />
//     <Stack.Screen name="HelpSupport" component={HelpSupportScreen} options={{ title: "Help & Support" }} />
//     <Stack.Screen name="LikedPosts" component={LikedPostsScreen} options={{ title: "Liked Posts" }} />
//     <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} options={{ title: "Terms & Conditions" }} />
//   </Stack.Navigator>
// );

// export default StackNavigator;