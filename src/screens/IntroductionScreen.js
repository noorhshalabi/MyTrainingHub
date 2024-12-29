import React, { useEffect, useState } from 'react';
import { View, Text, Animated, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import IntroductionScreenStyles from '../styles/IntroductionScreenStyles';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const IntroductionScreen = ({ navigation }) => {
  const items = [
    "Centralize your training programs in one app – easily organize, track, and customize your workouts and progress.",
    "Create your own workout templates and organize them into custom folders that fit your training style.",
    "Track your personal records for each movement and view your training history, all linked to the exercises you do daily.",
    "Directly log your training, access your PRs, and get back to lifting with all your data in one place.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeInOpacity = useState(new Animated.Value(0))[0]; //animation for fade in
  const { width } = Dimensions.get('window');

  useEffect(() => {
    // Start the fade-in animation
    Animated.timing(fadeInOpacity, {
      toValue: 1, // Fully visible
      duration: 1000, // 1-second fade-in
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [fadeInOpacity]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#222C30' }}> {/* Fixed background color */}
      <Animated.View style={[IntroductionScreenStyles.container, { opacity: fadeInOpacity }]}>
        <Animated.Image
          source={require('../assets/IconOnly_Transparent.png')}
          style={IntroductionScreenStyles.logo}
        />

        {/* Swipeable Box with App Sentences */}
        <Animated.View style={IntroductionScreenStyles.swipeableBoxContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            contentContainerStyle={IntroductionScreenStyles.swipeableBox}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {items.map((sentence, index) => (
              <Animated.View key={index} style={IntroductionScreenStyles.swipeableBoxItem}>
                <Text style={IntroductionScreenStyles.swipeText}>{sentence}</Text>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Dots at the bottom */}
        <View style={IntroductionScreenStyles.dotsContainer}>
          {items.map((_, index) => (
            <View
              key={index}
              style={[
                IntroductionScreenStyles.dot,
                index === currentIndex ? IntroductionScreenStyles.activeDot : null,
              ]}
            />
          ))}
        </View>

        {/* Buttons */}
        <Animated.View style={IntroductionScreenStyles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={[IntroductionScreenStyles.button, IntroductionScreenStyles.borderButton]}>
            <Text style={IntroductionScreenStyles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[IntroductionScreenStyles.button, IntroductionScreenStyles.borderButton]}>
            <Text style={IntroductionScreenStyles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[IntroductionScreenStyles.button, IntroductionScreenStyles.borderButton]}>
            <Text style={IntroductionScreenStyles.buttonText}>Continue with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[IntroductionScreenStyles.button, IntroductionScreenStyles.borderButton]}>
            <Text style={IntroductionScreenStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default IntroductionScreen;
