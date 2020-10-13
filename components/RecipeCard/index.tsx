import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MainNavigationProp } from '../../screens/Main';
import { Recipe } from '../../screens/RecipeView';
import { styles } from './styles';

interface RecipeCardProps {
  recipe: Recipe;
  navigation: MainNavigationProp;
}

const RecipeCard = ({ navigation, recipe }: RecipeCardProps) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require(`../../data/images/${recipe.name}.jpg`)}
    />
    <View style={styles.descriptionContainer}>
      <Text>{recipe.description}</Text>
      <Text style={styles.ingredientsText}>
        Ingredientes:{' '}
        <Text style={styles.ingredientsListText}>
          {recipe?.ingredients.join(', ')}
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => navigation.push('Recipe', { recipe: recipe.name })}
      >
        <Text style={styles.buttonText}>VISUALIZAR RECEITA</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default RecipeCard;
