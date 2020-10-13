import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { TextInput, View, Image } from 'react-native';
import { SearchRecipeContext } from '../../navigation';
import { styles } from './styles';

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 60, height: 60 }}
      source={require('../../assets/Laras.png')}
    />
  );
};

const SearchBox = () => {
  const navigation = useNavigation();

  const handleSubmit = (searchValue: string) => {
    searchRecipes(searchValue);
    navigation.navigate('Main');
  };
  const { searchRecipes } = useContext(SearchRecipeContext);
  return (
    <View style={styles.searchBoxContainer}>
      <Octicons name="search" size={20} color="black" />
      <TextInput
        style={styles.searchBoxInput}
        onSubmitEditing={({ nativeEvent }) => {
          handleSubmit(nativeEvent.text);
        }}
        placeholder="Buscar ex: Arroz"
      />
    </View>
  );
};

const HeaderTitle = () => {
  return (
    <View style={styles.headerTitleContainer}>
      <LogoTitle />
      <SearchBox />
    </View>
  );
};

export default HeaderTitle;
