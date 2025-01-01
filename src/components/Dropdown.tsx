import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';

interface Props {
  label: string;
  data: string[];
  visible: boolean; // Controls dropdown visibility
  selectedValue: string; // Currently selected value
  toggleDropdown: () => void; // Function to toggle visibility
  onSelect: (value: string) => void; // Callback when selecting a value
}

const Dropdown: FC<Props> = ({
  label,
  data,
  visible,
  selectedValue,
  toggleDropdown,
  onSelect,
}) => {
  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdown}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => onSelect(item)}>
                <Text style={styles.dropdownText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, visible ? styles.activeButton : null]}
        onPress={toggleDropdown}>
        <Text style={styles.buttonText}>
          {selectedValue ? selectedValue : label}{' '}
          {/* Show selected value or fallback to label */}
        </Text>
        <Icon
          type="font-awesome"
          name={visible ? 'chevron-up' : 'chevron-down'}
        />
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '90%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#efefef',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeButton: {
    backgroundColor: '#d3d3d3',
    borderColor: '#555',
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
  },
  dropdown: {
    position: 'absolute',
    top: 55,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Dropdown;
