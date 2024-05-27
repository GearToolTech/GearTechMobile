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
  backlogos:{
    height: 150,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30
  },
  titulo:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    ...Platform.select({
      web: {
        height: "60%",
        width: "30%",
        marginTop: 40
      },
      android: {
        height: 500,
        width: "80%",
        marginTop: 40,
        elevation: 20,
      },
      ios:{
        height: '49%',
        width: "80%",
        marginTop: 80,
        elevation: 20,
      }
    }),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 10,
    backgroundColor: "white",
    borderRadius: 10,
    position: 'absolute',
    marginTop: 200
  },
  main: {
    ...Platform.select({
      web: {
        height: "60%",
        width: "30%",
        marginTop: 40
      },
      android: {
        height: 500,
        width: "80%",
        marginTop: 40,
        elevation: 20,
      },
      ios:{
        height: 1903,
        width: "80%",
        marginTop: 80,
        elevation: 20,
      }
    }),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 10,
    backgroundColor: "white",
    borderRadius: 10,
    position: 'absolute',
    marginTop: 200
  },
  box: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#DDDCE9",
    padding: 10,
    height: "14%",
    width: "80%",
    borderRadius: 5,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 0.5
  },
  button: {
    marginTop: 30,
    height: "12%",
    width: "60%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    color: "white",
  },
  Btn: {
    height: 40,
    width: 145,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FCA311",
    alignItems: "center",
    marginTop: 10,
  },
});

export default styles;
