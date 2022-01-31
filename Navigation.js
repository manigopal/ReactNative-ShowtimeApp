import React from 'react';
import { createAppContainer } from 'react-navigation';
//import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import MoviesScreen from './screens/MoviesScreen';
import TvShowsScreen from './screens/TvShowsScreen';
import MoviesListScreen from './screens/MoviesListScreen';
import TvShowsListScreen from './screens/TvShowsListScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Video: VideoScreen,
    Movies: MoviesScreen,
    TvShows: TvShowsScreen
 });

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        // <Ionicons name="ios-home-outline" size={22} 
        // color= {focused ? '#18B3CC' : 'gray'} />

        // replacing above IonIcons with MaterialCommunityIcons
        <Icon name="home-outline" size={24} 
        color= {focused ? '#18B3CC' : 'gray'} />
    )
};

const MoviesStack = createStackNavigator({
    //Movies: MoviesScreen
    Movies: MoviesListScreen
 });

MoviesStack.navigationOptions = {
    tabBarLabel: 'Movies',
    tabBarIcon: ({ focused }) => (
        // <Ionicons name="film-outline" size={22} 
        // color= {focused ? '#18B3CC' : 'gray'} />
        
        // replacing above IonIcons with MaterialCommunityIcons
        <Icon name="movie-open" size={22} 
        color= {focused ? '#18B3CC' : 'gray'} />
    )
} 

 const TvShowsStack = createStackNavigator({
    //TvShows: TvShowsScreen
    TvShows: TvShowsListScreen
 });

TvShowsStack.navigationOptions = {
    tabBarLabel: 'TV Shows',
    tabBarIcon: ({ focused }) => (
        // <Ionicons name="tv-outline" size={22} 
        // color= {focused ? '#18B3CC' : 'gray'} />

        // replacing above IonIcons with MaterialCommunityIcons
        <Icon name="television-classic" size={23} 
        color= {focused ? '#18B3CC' : 'gray'} />
    )
} 

const BottomTab = createBottomTabNavigator(
    { HomeStack, MoviesStack, TvShowsStack },
    {
        tabBarOptions:{
        showLabel: false
        }
    }
    );

const MaterialBottomTab = createMaterialBottomTabNavigator(
    { 
        Home: {screen: HomeStack},
        Movies: {screen: MoviesStack},
        TvShows: {screen: TvShowsStack}
    },
    {
        initialRouteName: "Home",
        activeColor: "#18B3CC",
        inactiveColor: "gray",
        barStyle: {backgroundColor : "#EEEEEE"},
        shifting: true
    }
    );

export default createAppContainer(MaterialBottomTab);