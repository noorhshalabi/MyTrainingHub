import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Toggle from 'react-native-toggle-element';

const HeightInput = () => {
  const [unit, setUnit] = useState<'cm' | 'ftin'>('cm'); // Default to cm
  const [cmValue, setCmValue] = useState<string>(''); // Input height in cm
  const [feet, setFeet] = useState<string>(''); // Input feet value
  const [inches, setInches] = useState<string>(''); // Input inches value
  const [toggleValue, setToggleValue] = useState(false);

  const toggleUnit = (newToggleValue: boolean) => {
    setToggleValue(newToggleValue);

    if (newToggleValue) {
      // Convert cm to ft'in format
      const cm = parseFloat(cmValue);
      if (!isNaN(cm)) {
        const totalInches = cm / 2.54;
        const ft = Math.floor(totalInches / 12);
        const inc = Math.round(totalInches % 12);
        setFeet(ft.toString());
        setInches(inc.toString());
      }
      setUnit('ftin');
    } else {
      // Convert ft'in to cm
      const ft = parseFloat(feet);
      const inc = parseFloat(inches);
      if (!isNaN(ft) && !isNaN(inc)) {
        const cm = (ft * 12 + inc) * 2.54;
        setCmValue(cm.toFixed(2));
      }
      setUnit('cm');
    }
  };

  const handleCmChange = (value: string) => {
    setCmValue(value.replace(/[^0-9.]/g, '')); // Allow numeric input only
  };

  const handleFeetChange = (value: string) => {
    setFeet(value.replace(/[^0-9]/g, '')); // Allow numeric input only
  };

  const handleInchesChange = (value: string) => {
    setInches(value.replace(/[^0-9]/g, '')); // Allow numeric input only
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter in your height</Text>
      <View style={styles.inputContainer}>
        {unit === 'cm' ? (
          <TextInput
            style={styles.input}
            value={cmValue}
            onChangeText={handleCmChange}
            placeholder="height (cm)"
            placeholderTextColor="white"
            keyboardType="numeric"
          />
        ) : (
          <View style={styles.ftInContainer}>
            <TextInput
              style={[styles.input, styles.ftInInput]}
              value={feet}
              onChangeText={handleFeetChange}
              placeholder="?"
              placeholderTextColor="white"
              keyboardType="numeric"
            />
            <Text style={styles.separator}>ft</Text>
            <TextInput
              style={[styles.input, styles.ftInInput]}
              value={inches}
              onChangeText={handleInchesChange}
              placeholder="?"
              placeholderTextColor="white"
              keyboardType="numeric"
            />
            <Text style={styles.separator}>in</Text>
          </View>
        )}
        <Toggle
          value={toggleValue}
          onPress={newState => toggleUnit(newState || false)}
          leftTitle="meter"
          rightTitle="feet"
          thumbStyle={styles.thumbStyle}
          trackBarStyle={styles.trackBarStyle}
          trackBar={styles.trackBar}
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
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ftInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ftInInput: {
    width: 50,
    textAlign: 'center',
  },
  separator: {
    color: 'white',
    marginHorizontal: 7.5,
    marginRight: 20,
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
    width: 50,
    height: 35,
  },
  trackBarStyle: {
    backgroundColor: 'white',
    opacity: 0.5,
    width: 100,
    height: 35,
  },
  trackBar: {
    width: 105,
    height: 35,
  },
});

export default HeightInput;
