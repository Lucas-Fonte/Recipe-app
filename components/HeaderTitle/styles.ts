import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchBoxContainer: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dbdbdb',
    padding: 8,
    borderRadius: 40,
  },
  searchBoxInput: {
    height: 30,
    marginLeft: 5,
    padding: 3,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export { styles };
