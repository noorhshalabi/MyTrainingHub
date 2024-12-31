import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Input from '../components/Input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const SignupScreen = ({navigation}) => {
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
            Please set up the email and password for your account. This will
            help you get started with secure and personalized access to your
            data.
          </Text>
            <Input label="Enter email" duration={300} labelColor={'#6AA5B6'} />
            <Input
              label="Enter password"
              duration={300}
              labelColor={'#6AA5B6'}
            />

            <Animated.View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateProfile')}
                style={[styles.button, styles.borderButton]}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222C30', // Grey background
    paddingHorizontal: 5, // Add padding on the sides
    width: '90%',
    marginTop: -30
  },
  buttonContainer: {
    marginBottom: 30, // Space below the button
    alignItems: 'center', // Center the button horizontally
    paddingHorizontal: 80,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 30,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  borderButton: {
    borderColor: '#6AA5B6',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignupScreen;
