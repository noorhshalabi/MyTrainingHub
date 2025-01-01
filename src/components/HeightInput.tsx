import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const WeightInput = () => {
  const [unit, setUnit] = useState<'kg' | 'lb'>('kg'); // Default to kg
  const [weight, setWeight] = useState<string>(''); // Input weight value

  const toggleUnit = () => {
    if (unit === 'kg') {
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
      <Text style={styles.label}>Weight</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          placeholder={`Enter weight (${unit})`}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleUnit}>
          <Text style={styles.toggleButtonText}>
            {unit === 'kg' ? 'Switch to lb' : 'Switch to kg'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#222C30',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default WeightInput;
