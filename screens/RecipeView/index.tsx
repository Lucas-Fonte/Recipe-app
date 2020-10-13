import * as React from 'react';

import { Text, View, Image } from 'react-native';
import { styles } from './styles';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import recipes from '../../data/recipes.json';
import { useEffect, useState } from 'react';
import IngredientsList from '../../components/IngredientsList';

export interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
}

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Recipe'>;

interface RecipeProps {
  route: ProfileScreenRouteProp;
}

const RecipeView = ({ route }: RecipeProps) => {
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    const foundRecipe = recipes.find(
      (recipe) => recipe.name === route.params.recipe
    );
    setRecipe(foundRecipe);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.recipeContainer}>
        <Image
          style={styles.image}
          source={require(`../../data/images/${
            recipe?.name ?? 'Feijoada'
          }.jpg`)}
        />
        <View style={styles.descriptionContainer}>
          <Text>{recipe?.description ?? null}</Text>
          <Text style={styles.ingredientsText}>
            Ingredientes:{' '}
            <Text style={styles.ingredientsListText}>
              {recipe?.ingredients.join(', ')}
            </Text>
          </Text>
        </View>
        <IngredientsList ingredients={recipe?.ingredients} />
      </View>
    </View>
  );
};

export { RecipeView };
