import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ToggleStyle from '../styles/ToggleStyle';
const WeightInput = () => {
  const [unit, setUnit] = useState<'kg' | 'lb'>('kg'); // Default to kg
  const [weight, setWeight] = useState<string>(''); // Input weight value
  const [toggleValue, setToggleValue] = useState(false); // Toggle state for units

  const toggleUnit = (newToggleValue: boolean) => {
    setToggleValue(newToggleValue);

    if (newToggleValue) {
      // Convert kg to lb
      const convertedWeight = weight
        ? (parseFloat(weight) * 2.20462).toFixed(2)
        : '';
      setUnit('lb');
      setWeight(convertedWeight);
    } else {
      // Convert lb to kg
      const convertedWeight = weight
        ? (parseFloat(weight) / 2.20462).toFixed(2)
        : '';
      setUnit('kg');
      setWeight(convertedWeight);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter in your weight</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          placeholder={`weight (${unit})`}
          placeholderTextColor={'white'}
        />
        <Toggle
          value={toggleValue}
          onPress={newState => toggleUnit(newState || false)} // Ensure the value is valid
          leftTitle="kg"
          rightTitle="lb"
          thumbStyle={styles.thumbStyle}
          trackBarStyle={styles.trackBarStyle}
          trackBar={{
            width: 85, // Exact width of the track
            height: 35, // Exact height of the track
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 25,
  },
  label: {
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#6AA5B6',
    borderRadius: 5,
    marginRight: 10,
    color: '#fff',
  },
  thumbStyle: {
    backgroundColor: '#6AA5B6',
    width: 45,
    height: 35,
  },
  trackBarStyle: {
    backgroundColor: 'white',
    opacity: 0.5,
    width: 80,
    height: 35,
  },
});

export default WeightInput;
