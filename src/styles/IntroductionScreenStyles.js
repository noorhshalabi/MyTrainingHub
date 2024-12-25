import { StyleSheet, Dimensions } from "react-native";

// Get the screen width dynamically
const { width } = Dimensions.get("window");

const IntroductionScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20, // Reduced padding top to bring content closer to top
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: -20, 
  },
  swipeableBoxContainer: {
    flex: 1, // Take up available space
    justifyContent: "center", // Center the swipeable box vertically
    width: "100%", // Ensure it takes full width
  },
  swipeableBox: {
    flexDirection: "row",
    marginBottom: 30,
    paddingHorizontal: 0,
  },
  swipeableBoxItem: {
    backgroundColor: "#222C30",
    padding: 20,
    marginRight: 0, // Ensure no margin is pushing items to the right
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: width, // Set the width to the full screen width
    flexShrink: 0, // Prevent shrinking of each item
  },
  swipeText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    flexWrap: "wrap",
    lineHeight: 22,
    width: "75%",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20, // Space below the dots
  },
  dot: {
    width: 3.5,
    height: 3.5,
    borderRadius: 3.5,
    backgroundColor: "#6AA5B6",
    margin: 5,
  },
  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF", 
  },
  buttonsContainer: {
    marginTop: -10,
    width: "80%",
    marginBottom: 40,
  },
  button: {
    paddingVertical: 15,
    marginVertical: 12,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  borderButton: {
    borderColor: "#6AA5B6",
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  gradientButtonBackground: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default IntroductionScreenStyles;
