import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  text_white: {
    color: "#FFFFFF",
  },
  text_primary: {
    color: "#3483FA",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    marginTop: 40,
  },
  containerInput: {
    width: "100%",
    marginBottom: 40,
  },
  redefinePass: {
    marginTop: 40,
  },
  buttonBack: {
    position: "absolute",
    top: 60,
    left: 20,
    color: "#3483FA",
  },
});

export default styles
