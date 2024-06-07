import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
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
    height: "78%",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  arrowBack: {
    marginTop: 30,
    marginLeft: 20,
  },
  logo: {
    height: 90,
    width: 90,
    marginTop: 30,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    width: "80%",
    marginTop: 20,
  },
  main: {
    ...Platform.select({
      web: {
        height: "65%",
        width: "30%",
        marginTop: 190,
      },
      android: {
        height: 500,
        width: "80%",
        marginTop: 270,
      },
      ios: {
        height: 500,
        width: "80%",
        marginTop: 220,
      },
    }),
    alignItems: "center",
    backgroundColor: "#E4E9F7",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowRadius: 10,
    position: "absolute",
    elevation: 15,
  },
  box: {
    ...Platform.select({
      web: {
        height: "30%",
      },
      android: {
        height: "30%",
      },
      ios: {
        height: "30%",
      },
    }),
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#E4E9F7",
    justifyContent: "center",
    flexDirection: "row",
    width: "99%",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input1: {
    ...Platform.select({
      web: {
        height: "100%",
      },
      android: {
        height: "100%",
      },
      ios: {
        height: "100%",
      },
    }),

    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  input2: {
    ...Platform.select({
      web: {
        height: "100%",
      },
      android: {},
    }),

    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  input: {
    ...Platform.select({
      web: {
        height: 30,
        width: "80%",
      },
      android: {
        height: 40,
        width: "80%",
      },
      ios: {
        height: 40,
        width: "80%",
      },
    }),
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },
  button: {
    ...Platform.select({
      web: {
        height: "8%",
        marginTop: 10,
      },
      android: {
        height: "8%",
      },
      ios: {
        height: "8%",
      },
    }),
    width: "50%",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  txtBtn: {
    color: "white",
  },

  resultContainer: {
    ...Platform.select({
      web: {
        height: "40%",
        width: "80%",
      },
      android: {
        height: "40%",
        width: "90%",
      },
      ios: { height: "40%", width: "90%" },
    }),
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
  },
  btnRelatorio: {
    ...Platform.select({
      web: {
        height: 40,
        width: "10%",
      },
      android: {
        height: 40,
        width: "30%",
      },
      ios: {
        height: 40,
        width: "30%",
      },
    }),
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    position: "absolute",
    marginTop: 710,
  },
  modalOverlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
  },

  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  modalText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  historyModalContent: {
    height: 480,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  emptyResultHistoric:{
    backgroundColor: 'white',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tituloHistoric: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  scrollView: {
    maxHeight: 400,
    width: "100%",
  },
  historicData: {
    ...Platform.select({
      web: {
        height: "65%",
        width: "80%",
      },
      android: {
        height: "auto",
        width: "100%",
      },
      ios: {
        height: "55%",
        width: "90%",
      },
    }),
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "black",
  },
  resultText: {
    marginVertical: 2,
    fontSize: 14,
  },
  btnOkModalInfo: {
    marginTop: 15,
    marginBottom: 7.5,
    height: 50,
    width: "70%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
  btnOk: {
    marginTop: 15,
    marginBottom: 7.5,
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
