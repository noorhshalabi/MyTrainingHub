import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HeightInput = () => {
  const [unit, setUnit] = useState<'cm' | 'in'>('cm'); // Default to cm
  const [height, setHeight] = useState<string>(''); // Input height value

  const toggleUnit = () => {
    if (unit === 'cm') {
      // Convert cm to inches
      const convertedHeight = height
        ? (parseFloat(height) / 2.54).toFixed(2)
        : '';
      setUnit('in');
      setHeight(convertedHeight);
    } else {
      // Convert inches to cm
      const convertedHeight = height
        ? (parseFloat(height) * 2.54).toFixed(2)
        : '';
      setUnit('cm');
      setHeight(convertedHeight);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Height</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          placeholder={`Enter height (${unit})`}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleUnit}>
          <Text style={styles.toggleButtonText}>
            {unit === 'cm' ? 'Switch to inches' : 'Switch to cm'}
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

export default HeightInput;
