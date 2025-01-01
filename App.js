import React, {useEffect, useState} from 'react';
import {Animated, Text, StyleSheet, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroductionScreen from './src/screens/IntroductionScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
const Stack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false); // To control the transition
  const fadeAnim = useState(new Animated.Value(1))[0]; // Initial opacity set to 1 (fully visible)

  useEffect(() => {
    const initializeApp = async () => {
      // Simulate app initialization tasks
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate resource loading

      // Fade out splash screen
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setIsReady(true)); // Set isReady after animation completes
    };

    initializeApp();
  }, [fadeAnim]);

  // If the app is not ready, show the splash screen (with fade out)
  if (!isReady) {
    return (
      <View style={styles.container}>
        <Animated.View style={{opacity: fadeAnim}}>
          <Image
            source={require('./src/assets/FullLogo_Transparent.png')}
            style={styles.logo}
          />
        </Animated.View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Introduction"
          component={IntroductionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: true,
            title: 'Create Account',
            headerBackTitle: '',
            headerStyle: {
              backgroundColor: '#222C30',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ProfileSetup"
          component={ProfileSetupScreen}
          options={{
            headerShown: true,
            title: 'Create Account', // Header title
            headerBackTitle: '', // Explicitly hide the back title
            headerStyle: {
              backgroundColor: '#222C30', // Header background color
            },
            headerTintColor: '#fff', // Back button and title color
            headerTitleAlign: 'center', // Center the title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222C30',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default App;
