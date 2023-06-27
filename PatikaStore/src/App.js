import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, Image, Dimensions} from 'react-native';
import products from './products.json';
import ProductsCard from './components/ProductsCard';
import SearchBar from './components/SearchBar.js';

function App(){
  const renderProducts = ({item}) => <ProductsCard products={item} />

  return(
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={{ fontWeight: 'bold' , fontSize: 30, color: 'purple', marginLeft: 10}}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderProducts}
      />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
  }
})

export default App;