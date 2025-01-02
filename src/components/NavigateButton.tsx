import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';

type ButtonProps = {
  label: string; // Text displayed on the button
  screen: string; // Name of the screen to navigate to
};

const Button = ({label, screen}: ButtonProps) => {
  const navigation = useNavigation(); // Access navigation

  const handlePress = () => {
    navigation.navigate(screen); // Navigate to the passed screen
  };

  return (
    <Animated.View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.button, styles.borderButton]}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30, // Space below the button
    alignItems: 'center', // Center the button horizontally
    paddingHorizontal: 80,
    width: '80%',
    marginLeft: 40,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  borderButton: {
    borderColor: '#6AA5B6',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
