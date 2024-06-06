import { StyleSheet, Platform } from 'react-native'

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
    height: '80%',
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
  icons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '80%',
    marginTop: 20,
  },
  main: {
    ...Platform.select({
      web: {
        height: '65%',
        width: '30%',
        marginTop: 190,
      },
      android: {
        height: 500,
        width: '80%',
        marginTop: 260,
      },
      ios: {
        height: 500,
        width: '80%',
        marginTop: 220,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#E4E9F7',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowRadius: 10,
    position: 'absolute',
    elevation: 15,
  },
  box: {
    ...Platform.select({
      web: {
        height: '20%',
      },
      android: {
        height: '25%',
      },
      ios: {
        height: '30%',
      },
    }),
    alignItems: 'center',
    backgroundColor: '#E4E9F7',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '99%',
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input1: {
    ...Platform.select({
      web: {
        height: '100%',
      },
      android: {
        height: '100%',
      },
      ios: {
        height: '100%',
      },
    }),

    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  input2: {
    ...Platform.select({
      web: {
        height: '100%',
      },
      android: {
        height: '100%',
      },
      ios: {
        height: '100%',
      },
    }),

    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  input: {
    ...Platform.select({
      web: {
        height: '40%',
        width: '80%',
      },
      android: {
        height: 40,
        width: '80%',
      },
      ios: {
        height: 40,
        width: '80%',
      },
    }),
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  button: {
    ...Platform.select({
      web: {
        height: '8%',
      },
      android: {
        height: '8%',
      },
      ios: {
        height: '8%',
      },
    }),
    width: '50%',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#212529',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtBtn: {
    color: 'white',
  },

  resultContainer: {
    ...Platform.select({
      web: {
        height: '65%',
        width: '80%',
      },
      android: {
        height: '55%',
        width: '90%',
      },
      ios: {
        height: '55%',
        width: '90%',
      },
    }),
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  btnRelatorio: {
    ...Platform.select({
      web: {
        height: 40,
        width: '10%',
      },
      android: {
        height: 40,
        width: '30%',
      },
      ios: {
        height: 40,
        width: '30%',
      },
    }),
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#212529',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    position: 'absolute',
    marginTop: 715,
  },
  modalContainer: {
    flex: 1,
    width: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyModalContent:{
    height: 400,
    width: '100%',
  },
  scrollView:{
    width: '100%',
  },
  historicData:{
    ...Platform.select({
      web: {
        height: '65%',
        width: '80%',
      },
      android: {
        height: '20%',
        width: '100%',
      },
      ios: {
        height: '55%',
        width: '90%',
      },
    }),
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  historyIcon: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  resultList: {
    width: "100%",
  },
  resultItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
})

export default style
