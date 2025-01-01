import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import TextStyles from '../styles/TextStyles';
import ContainerStyles from '../styles/ContainerStyles';
import Dropdown from '../components/Dropdown';
import HeightInput from '../components/WeightInput';
import WeightInput from '../components/WeightInput';

const ProfileSetupScreen = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState({
    Gender: '',
    ActivityLevel: '',
    PrimaryGoal: '',
  });

  // Toggle visibility of a dropdown
  const toggleDropdown = (label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  // Handle selecting a dropdown value
  const handleSelect = (label: string, value: string) => {
    setSelectedValues(prev => ({
      ...prev,
      [label]: value, // Update the specific dropdown's value
    }));
    setActiveDropdown(null); // Close the dropdown after selecting
  };

  return (
    <SafeAreaView style={ContainerStyles.container}>
      <Text style={TextStyles.text}>
        Please enter all information relating to your personal health to help
        set up your profile.
      </Text>

      {/* Gender Dropdown */}
      <Dropdown
        label="Gender"
        data={['Female', 'Male']}
        visible={activeDropdown === 'Gender'}
        selectedValue={selectedValues.Gender}
        toggleDropdown={() => toggleDropdown('Gender')}
        onSelect={value => handleSelect('Gender', value)}
      />

      {/* Activity Level Dropdown */}
      <Dropdown
        label="Activity Level"
        data={['No activity', '2-3 times training', '4-6 times training']}
        visible={activeDropdown === 'ActivityLevel'}
        selectedValue={selectedValues.ActivityLevel}
        toggleDropdown={() => toggleDropdown('ActivityLevel')}
        onSelect={value => handleSelect('ActivityLevel', value)}
      />

      {/* Primary Goal Dropdown */}
      <Dropdown
        label="Primary Goal"
        data={['Lose fat', 'Build muscle', 'Maintain']}
        visible={activeDropdown === 'PrimaryGoal'}
        selectedValue={selectedValues.PrimaryGoal}
        toggleDropdown={() => toggleDropdown('PrimaryGoal')}
        onSelect={value => handleSelect('PrimaryGoal', value)}
      />

      <HeightInput />
      <WeightInput />
    </SafeAreaView>
  );
};

export default ProfileSetupScreen;
