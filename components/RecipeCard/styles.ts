import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 150,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  descriptionContainer: {
    padding: 15,
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  ingredientsText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  ingredientsListText: {
    fontWeight: 'normal',
  },
  buttonText: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export { styles };
