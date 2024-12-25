// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen';  // Import splash screen package
// import IntroductionScreen from './IntroductionScreen';  // Import IntroductionScreen

// // Create a Stack Navigator
// const Stack = createStackNavigator();

// const App = () => {
//   // Fade-in animation for the splash screen
//   const [fadeAnim] = useState(new Animated.Value(0));  // Initial opacity is 0 (invisible)

//   useEffect(() => {
//     // Wait for the splash screen to show, then hide it after 3 seconds
//     const timer = setTimeout(() => {
//       SplashScreen.hide();  // Hide the splash screen after 3 seconds
//     }, 3000);  // Splash screen stays for 3 seconds

//     // Clean up the timer on unmount
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Introduction">
//         <Stack.Screen name="Introduction" component={IntroductionScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
