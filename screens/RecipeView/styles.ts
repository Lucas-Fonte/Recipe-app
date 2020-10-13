import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '7%',
  },
  recipeContainer: {
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
    height: 75,
    alignItems: 'center',
  },
  ingredientsText: {
    fontWeight: 'bold',
  },
  ingredientsListText: {
    fontWeight: 'normal',
  },
});

export { styles };
