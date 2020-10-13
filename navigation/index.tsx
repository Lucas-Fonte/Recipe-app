import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Main, MainNavigationProp } from '../screens/Main';
import { Recipe, RecipeView } from '../screens/RecipeView';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HeaderTitle from '../components/HeaderTitle';
import recipes from '../data/recipes.json';
import { useState, createContext } from 'react';

interface ISearchRecipeContext {
  currentRecipes: Recipe[];
  searchRecipes: (searchValue: string) => void;
}
export const SearchRecipeContext = createContext<ISearchRecipeContext>({
  currentRecipes: [],
  searchRecipes: (searchValue: string) => {},
});

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [currentRecipes, setCurrentRecipes] = useState(recipes);
  const searchRecipes = (searchValue: string) => {
    setCurrentRecipes(
      recipes.filter(
        (recipe) =>
          recipe.name === searchValue ||
          recipe.ingredients.includes(searchValue)
      )
    );
  };

  return (
    <SearchRecipeContext.Provider value={{ currentRecipes, searchRecipes }}>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitle: () => <HeaderTitle />,
          }}
        />
        <Stack.Screen
          name="Recipe"
          component={RecipeView}
          options={{ headerTitle: () => <HeaderTitle /> }}
        />
      </Stack.Navigator>
    </SearchRecipeContext.Provider>
  );
};

export { Navigation };
