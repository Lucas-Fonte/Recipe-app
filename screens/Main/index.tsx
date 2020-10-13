import * as React from 'react';

import { FlatList, View } from 'react-native';
import { styles } from './styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import RecipeCard from '../../components/RecipeCard';
import { SearchRecipeContext } from '../../navigation';

export type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

interface MainProps {
  navigation: MainNavigationProp;
}

const Main = ({ navigation }: MainProps) => {
  const { currentRecipes } = React.useContext(SearchRecipeContext);

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <FlatList
        data={currentRecipes}
        keyExtractor={(recipe) => recipe.name}
        renderItem={({ item: recipe }) => (
          <RecipeCard navigation={navigation} recipe={recipe} />
        )}
      />
    </View>
  );
};

export { Main };
