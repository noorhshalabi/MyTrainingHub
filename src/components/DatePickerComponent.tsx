import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DateOfBirthPicker = () => {
  const [date, setDate] = useState<Date | null>(null); // Initialize as null to show placeholder
  const [open, setOpen] = useState(false);

  const handleConfirm = (selectedDate: Date) => {
    setOpen(false);
    setDate(selectedDate); // Update the date with the selected value
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select your Date of Birth</Text>

      <TouchableOpacity style={styles.dateInput} onPress={() => setOpen(true)}>
        <Text style={styles.dateText}>
          {date ? date.toDateString() : 'Tap to select your date of birth'}{' '}
          {/* Show placeholder or selected date */}
        </Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date || new Date()} // Use current date if no date is selected
        mode="date"
        maximumDate={new Date()} // Prevent future dates
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
      />
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
    marginBottom: 20,
    color: 'white',
    fontWeight: '600',
  },
  dateInput: {
    padding: 15,
    borderWidth: 2,
    borderColor: '#6AA5B6',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '80%',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
});

export default DateOfBirthPicker;
