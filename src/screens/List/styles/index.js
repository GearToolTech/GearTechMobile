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
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  logo: {
    height: 90,
    width: 90,
    marginTop: 30,
  },
  exit: {
    position: 'absolute',
    right: 40,
    top: 65
  },

  main: {
    width: "80%",
    justifyContent: "flex-end",
  },
  containerDenteReto: {
    height: 150,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#CDD7F2",
    flexDirection: "row",
    elevation: 15
  },
  containerHelicoidal: {
    height: 150,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#CDD7F2",
    flexDirection: "row",
    elevation: 15
  },
  containerConicos: {
    height: 150,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#CDD7F2",
    flexDirection: "row",
    elevation: 15
  },
  containerTransmissao: {
    height: 150,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#CDD7F2",
    flexDirection: "row",
    elevation: 15
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
