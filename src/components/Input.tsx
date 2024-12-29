import React, {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TextInput,
  View,
  Text,
  Easing,
} from 'react-native';

interface InputProps {
  label: string;
  duration?: number;
  labelColor?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  duration = 300,
  labelColor = '#6AA5B6',
}) => {
  const animatedLabelY = useRef(new Animated.Value(0)).current;
  const animatedBorderWidth = useRef(new Animated.Value(1)).current;

  const [value, setValue] = useState('');

  const handleFocus = () => {
    if (value) return; // Do not animate if input already has text
    animateLabel(-40);
    animateBorder(2);
  };

  const handleBlur = () => {
    if (value) return;
    animateLabel(0);
    animateBorder(1);
  };

  const animateLabel = (toValue: number) => {
    Animated.timing(animatedLabelY, {
      toValue,
      duration,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const animateBorder = (toValue: number) => {
    Animated.timing(animatedBorderWidth, {
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const animatedFontSize = animatedLabelY.interpolate({
    inputRange: [-25, 0],
    outputRange: [14, 16], // Font size smaller when label moves up
  });

  const animatedBorderColor = animatedBorderWidth.interpolate({
    inputRange: [1, 2],
    outputRange: ['#C3DDDF', '#6AA5B6'], // Border color changes on focus
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {borderWidth: animatedBorderWidth, borderColor: animatedBorderColor},
      ]}>
      <Animated.Text
        style={[
          styles.label,
          {
            transform: [{translateY: animatedLabelY}],
            fontSize: animatedFontSize,
            color: labelColor,
          },
        ]}>
        {label}
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    paddingHorizontal: 0,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#222C30',
    paddingHorizontal: 8,
  },
});

export default Input;
