import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: "#ebeef2"
  },
  cardStyle: {
    width: "80%",
    alignSelf: 'center',
    padding: 10,
    marginVertical: 20
  },
  titleTextStyle: {
    alignSelf: 'center',
    marginTop: 40,
    color: '#33363d',
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleSubHeadingStyle: {
    alignSelf: 'center',
    color: '#7c7f84',
    fontSize: 14, fontWeight: 'bold'
  },
  itemContStyle: {
    width: "100%",
    alignSelf: 'center',
    padding: 10,
  },
  itemDetailStyle: {
    fontSize: 12,
    color: '#7c7f84',
    width: '80%',
    marginTop: 10,
    alignSelf: 'center'
  },
  itemTitleStyle:{
    marginLeft: 10, 
    fontSize: 16,
    fontWeight: 'bold',
}
});

export default styles;