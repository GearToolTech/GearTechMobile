import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      web: {
        height: "100%",
        width: "100%",
      },
      android: {
        width: "100%",
        justifyContent: "center",
      },
      ios: {
        height: "80%",
        width: "110%",
      },
    }),
    flex: 1,
    backgroundColor: "#E4E9F7",
  },
  header: {
    ...Platform.select({
      web: {
        height: "35%",
      },
      android: {
        height: "20%",
        padding: 20,
        backgroundColor: 'white',
      },
      ios: {
        height: "25%",
      },
    }),
  },

  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
    alignSelf: "center",
  },
  backHeader: {
    backgroundColor: "white",
    borderBottomRightRadius: 150,
    width: "70%",
    height: 200,
   position: 'absolute',  
  },
  imageBack:{
    width: '100%',
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
  },
  backtitle: {
    alignItems: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 22,
    marginTop: 10,
    color: "black",
  },
  titleProfessor: {
    width: "100%",
    textAlign: "center",
    fontSize: 22,
    marginTop: 10,
    color: "black",
  },
  body: {
    flex: 1,
  },
  MsgB: {
    ...Platform.select({
      web: {
        fontSize: 20,
      },
      android: {
        fontSize: 35,
        marginLeft: 5,
        textAlign: 'center',
      },
      ios: {
        fontSize: 52,
        height: "10%",
        marginTop: 5,
        marginLeft: 5,
      },
    }),
  },
  Msg: {
    ...Platform.select({
      web: {
        fontSize: 20,
      },
      android: {
        fontSize: 20,
        marginLeft: 5,
        marginTop: 15,
        borderRadius: 20,
        width: '90%',
        marginLeft: 10
      },
      ios: {
        fontSize: 22,
        marginLeft: 1,
        marginTop: 27,
      },
      
    }),
  },
  main: {
    height: "60%",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },

  aluno: {
    height: 150,
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    elevation: 15,
  },

  btnaluno: {
    height: "60%",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },

  btnprofessor: {
    height: "60%",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },

  professor: {
    height: 150,
    justifyContent: "center",
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    elevation: 15,
  },


  txtBtn: {
    color: "white",
    fontSize: 18,
  },
  txtBtnProfessor: {
    color: "white",
    fontSize: 18,
  },
});
export default styles;
