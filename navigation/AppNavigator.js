import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import BooksScreen from '../screens/BooksScreen';
import WishlistScreen from '../screens/WishlistScreen';
import TrendingScreen from '../screens/TrendingScreen';
import SearchBar from '../components/SearchBar';


import colors from '../constants/Colors';


export default createStackNavigator({
  HomeScreen,
  ListScreen,
  DetailScreen,
  BooksScreen,
  WishlistScreen,
  TrendingScreen,
}, {
  //initialRouteName: 'ListScreen',
  navigationOptions: {
    headerTitle: <SearchBar />,
    headerStyle: {
      backgroundColor: colors.yellowBackground,      
    },
    //headerTransparent: true,
    //headerBackground: '#ffd700',
  }
});