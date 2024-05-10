import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  titulo: {
    ...Platform.select({
      web:{
        marginTop: 140
      },
      android:{
        marginTop: 170
      },
      ios:{
        marginTop: 170
      }
    }),
    fontSize: 30,
    fontWeight: "bold",
    position: 'absolute',
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
    backgroundColor: "#CED4DA",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowRadius: 10,
    position: 'absolute',
    elevation: 15
  },
  box: {
    ...Platform.select({
      web:{
        height: "20%",
      },
      android:{
        height: "30%",
      },
      ios:{
        height: "30%",
      }
    }),
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#CED4DA",
    justifyContent: "center",
    flexDirection: 'row',
    width: '99%',
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input1:{
    ...Platform.select({
      web: {
        height: '100%',
      },
      android: {
        height: '100%',
      },
      ios:{
        height: '100%',
      }
    }),

    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  input2:{
    ...Platform.select({
      web: {
        height: '100%',
      },
      android: {
       height: '100%',
      },
      ios:{
        height: '100%',
      }
    }),

    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  input: {
    ...Platform.select({
      web: {
        height: "40%",
        width: "80%",
      },
      android: {
        height: 40,
        width: "80%",
      },
      ios:{
        height: 40,
        width: "80%",
      }
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
        height: "65%",
        width: "80%",
      },
      android: {
        height: "55%",
        width: "90%",
      },
      ios:{
        height: "55%",
        width: "90%",
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
});

export default style;
