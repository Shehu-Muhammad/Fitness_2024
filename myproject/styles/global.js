import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: 'black',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    marginLeft: 125,
    height: 100,
  },
  backgroundImage: {
    width: 400,
    flex: 1,
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: 10,
  }
});