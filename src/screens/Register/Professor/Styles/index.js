import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
  },
  BackGround:{
    flex: 1,
    width: '100%',
  },
  backlogos: {
    height: 150,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  arrowBack: {
    marginTop: 20,
    marginLeft: 50
  },
  logo: {
    height: 90,
    width: 90,
    marginTop: 30,
    marginLeft: 78,
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
  },
  main: {
    ...Platform.select({
      web: {
        height: "50%",
        width: "30%",
      },
      android: {
        height: 550,
        width: '80%',
        marginTop: 40,
      },
      ios:{
        height: '65%',
        width: '80%',
      },
    }),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: '45%',
    position: "absolute",
    elevation: 15
  },
  box: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 10,
  },
  input: {
    backgroundColor: "#DDDCE9",
    padding: 10,
    height: 55,
    width: "80%",
    borderRadius: 5,
    marginVertical: 8,
    borderColor: 'black',
    borderWidth: 0.5
  },
  button: {
    marginTop: 30,
    height: "8%",
    width: "70%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    color: "white",
  },
});

export default styles;
