import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  BackGround: {
    flex: 1,
    width: "100%",
  },
  backlogos: {
    height: 150,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
  },

  main: {
    position: "absolute",
    width: "80%",
  },

  containerDenteReto: {
    height: 100,
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#E4E9F7",
  },
  containerHelicoidal: {
    height: 100,
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#E4E9F7",
  },
  containerConicos: {
    height: 100,
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#E4E9F7",
  },
  containerTransmissao: {
    height: 100,
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#E4E9F7",
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  button: {
    height: 40,
    width: "60%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#333333",
    alignItems: "center",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 0.5,
  },
  txtBtn: {
    color: "white",
  },
});

export default style;
