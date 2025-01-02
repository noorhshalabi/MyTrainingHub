import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
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

export default ToggleStyle;