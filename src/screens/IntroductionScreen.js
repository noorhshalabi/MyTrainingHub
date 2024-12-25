import React, { useEffect, useState } from 'react';
import { View, Text, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient'; // Import LinearGradient
import IntroductionScreenStyles from '../styles/IntroductionScreenStyles';  // Import styles

const IntroductionScreen = ({ navigation }) => {
  const items = [
    "Centralize your training programs in one app – easily organize, track, and customize your workouts and progress.",
    "Create your own workout templates and organize them into custom folders that fit your training style.",
    "Track your personal records for each movement and view your training history, all linked to the exercises you do daily.",
    "Skip using notes – directly log your training, access your PRs, and get back to lifting with all your data in one place",
  ];

  // Track the current index of the swipe
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background color animation
  const [bgColorAnim] = useState(new Animated.Value(0));

  // Content opacity animation
  const [fadeAnims] = useState(items.map(() => new Animated.Value(0)));

  useEffect(() => {
    // Fade in the background color
    Animated.timing(bgColorAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Fade in content items sequentially
    const fadeInItems = items.map((_, index) =>
      Animated.timing(fadeAnims[index], {
        toValue: 1,
        duration: 800 + (index * 100),
        useNativeDriver: true,
      })
    );

    // Start the animations sequentially
    fadeInItems.forEach(animated => animated.start());

  }, [fadeAnims, bgColorAnim]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / IntroductionScreenStyles.width); // Calculate the index
    setCurrentIndex(index);
  };

  return (
    <Animated.View style={[IntroductionScreenStyles.container, { backgroundColor: '#222C30' }]}>
      {/* Logo at the top */}
      <Animated.Image 
        source={require('../assets/IconOnly_Transparent.png')}
        style={[
          IntroductionScreenStyles.logo,
        ]}
      />

      {/* Swipeable Box with App Sentences */}
      <Animated.View 
        style={[IntroductionScreenStyles.swipeableBoxContainer]}>
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
              index === currentIndex ? IntroductionScreenStyles.activeDot : {}
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <Animated.View style={IntroductionScreenStyles.buttonsContainer}>
        <TouchableOpacity style={[IntroductionScreenStyles.button]}>
          <LinearGradient
            colors={['#216383', '#9EC9DE']} // Gradient from top to bottom
            style={IntroductionScreenStyles.gradientButtonBackground}
          >
            <Text style={IntroductionScreenStyles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={[IntroductionScreenStyles.button, IntroductionScreenStyles.borderButton]}>
          <Text style={IntroductionScreenStyles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[IntroductionScreenStyles.button, IntroductionScreenStyles.borderButton]}>
          <Text style={IntroductionScreenStyles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[IntroductionScreenStyles.button, IntroductionScreenStyles.borderButton]}>
          <Text style={IntroductionScreenStyles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default IntroductionScreen;
