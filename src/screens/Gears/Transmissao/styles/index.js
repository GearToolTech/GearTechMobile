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
    height: '100%',
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  logo: {
    height: 75,
    width: 75,
    marginTop: 30,
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  main: {
    ...Platform.select({
      web: {
        height: "65%",
        width: "30%",
        marginTop: 190
      },
      android: {
        height: 500,
        width: "80%",
        marginTop: 220
      },
      ios:{
        height: 500,
        width: "80%",
        marginTop: 220
      }
    }),
    alignItems: "center",
    backgroundColor: "#E4E9F7",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowRadius: 10,
    position: 'absolute',
    elevation: 15,
  },
  box: {
    ...Platform.select({
      web:{
        height: "20%",
        width: "100%",
      },
      android:{
        height: "30%",
        width: "80%",
      },
      ios:{
        height: "30%",
        width: "100%",

      }
    }),
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#E4E9F7",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    ...Platform.select({
      web: {
        height: "45%",
        width: "80%",
      },
      android: {
        height: 50,
        width: "100%",
      },
      ios:{
        height: 50,
        width: "80%",
      }
    }),
    backgroundColor: "white",
    padding: 10,
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
      ios:{
        height: "8%",
      }
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
        height: "60%",
        width: "80%",
      },
      android: {
        height: "55%",
        width: "90%",
      },
      ios:{
        height: "55%",
        width: "90%"
      }
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
        ios:{
          height: 40,
          width: "30%",
        }
    }),
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    position: 'absolute',
    marginTop: 730,
  },
  Salvar: {
    ...Platform.select({
      web: {
        height: 40,
        width: "10%",
      },
      android: {
        height: 40,
        width: "40%",
      },
      ios:{
        height: 40,
        width: "30%",
      }
    }),
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    position: 'relative',
  },
  resultText: {
    color: "black",
  }
});

export default styles;
