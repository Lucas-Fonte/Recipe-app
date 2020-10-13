import React, { useEffect, useState } from 'react';
import {
  CheckBox,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

interface IngredientsListProps {
  ingredients: string[] | undefined;
}

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  const [ingredientsCheckbox, setIngredientsCheckbox] = useState<any>({});

  useEffect(() => {
    const initialIngredients = {};
    ingredients?.map((ingredient) =>
      Object.assign(initialIngredients, {
        [ingredient]: false,
      })
    );
    setIngredientsCheckbox(initialIngredients);
  }, []);

  const handleCheckBox = (ingredient: string) => {
    setIngredientsCheckbox({
      ...ingredientsCheckbox,
      [ingredient]: !ingredientsCheckbox[ingredient],
    });
  };

  const handleClipboard = () => {
    Clipboard.setString(
      ingredients
        ?.filter((ingredient) => !ingredientsCheckbox[ingredient])
        ?.join(', ') || ''
    );
  };

  return (
    <View style={styles.ingredientsListContainer}>
      {ingredients?.map((ingredient) => (
        <View key={ingredient} style={styles.ingredientContainer}>
          <CheckBox
            value={ingredientsCheckbox[ingredient]}
            onValueChange={() => handleCheckBox(ingredient)}
          />
          <Text
            style={{
              marginLeft: 10,
              textDecorationLine: ingredientsCheckbox[ingredient]
                ? 'line-through'
                : 'none',
              color: ingredientsCheckbox[ingredient] ? '#666' : '',
            }}
          >
            {ingredient}
          </Text>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => handleClipboard()}
        style={{
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffa74a',
          padding: 8,
          width: 100,
          borderRadius: 8,
        }}
      >
        <MaterialIcons name="content-copy" size={24} color="white" />
        <Text style={{ fontWeight: 'bold', marginLeft: 3, color: '#fff' }}>
          COPIAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IngredientsList;
