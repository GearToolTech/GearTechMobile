import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  BackGround: {
    flex: 1,
    width: "100%",
  },

  body: {
    flex: 1,
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },

  backlogos: {
    height: "18%",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  logo: {
    height: 90,
    width: 90,
    marginTop: 30,
  },
  exit: {
    position: "absolute",
    right: 40,
    top: 65,
  },

  main: {
    width: "80%",
    alignItems: "flex-end",
  },
  containerDenteReto: {
    height: 125,
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 15,
  },
  containerHelicoidal: {
    height: 125,
    alignItems: "center",
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 15,
  },
  containerConicos: {
    height: 125,
    alignItems: "center",
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 15,
  },
  containerTransmissao: {
    height: 125,
    alignItems: "center",
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 15,
  },

  img: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image: {
    width: "50%",
    alignItems: "center",
  },
  content: {
    width: "50%",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
  },

  button: {
    height: 40,
    width: "80%",
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
