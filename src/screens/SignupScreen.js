import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import IntroductionScreenStyles from '../styles/IntroductionScreenStyles';
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
          <View style={styles.inputContainer}>
            <Input label="Enter email" duration={300} labelColor={'#6AA5B6'} />
            <Input label="Enter password" duration={300} labelColor={'#6AA5B6'}/>
          </View>

          <Animated.View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateProfile')}
              style={[
                IntroductionScreenStyles.button,
                IntroductionScreenStyles.borderButton,
              ]}>
              <Text style={IntroductionScreenStyles.buttonText}>Next</Text>
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
  },
  inputContainer: {
    flex: 1, // Occupy most of the screen
    justifyContent: 'center', // Center inputs vertically
    paddingHorizontal: 20, // Add padding on the sides
  },
  buttonContainer: {
    marginBottom: 20, // Space below the button
    alignItems: 'center', // Center the button horizontally
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default SignupScreen;
