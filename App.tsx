/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import styles from './styles';
import {ScrollView, Text, View} from 'react-native';
import Product from './components/Product';
import AppHeader from './components/AppHeader';

function App(): JSX.Element {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'A powerful laptop for all your computing needs.',
      category: 'Electronics',
      imageUrl: 'https://example.com/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 599.99,
      description: 'Stay connected with this sleek and modern smartphone.',
      category: 'Electronics',
      imageUrl: 'https://example.com/smartphone.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 99.99,
      description: 'High-quality headphones for immersive audio experience.',
      category: 'Electronics',
      imageUrl: 'https://example.com/headphones.jpg',
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 79.99,
      description: 'Comfortable and stylish shoes for your daily runs.',
      category: 'Sports',
      imageUrl: 'https://example.com/runningshoes.jpg',
    },
    {
      id: 5,
      name: 'Backpack',
      price: 49.99,
      description: 'A durable and spacious backpack for all your adventures.',
      category: 'Travel',
      imageUrl: 'https://example.com/backpack.jpg',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <AppHeader />
      <Text style={styles.title}>Redux Introduction</Text>
      <ScrollView>
        {products.map(item => {
          return <Product key={item.id} name={item.name} price={item.price} />;
        })}
      </ScrollView>
    </View>
  );
}

export default App;
