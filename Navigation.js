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
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Video: VideoScreen,
    Movies: MoviesScreen,
    TvShows: TvShowsScreen
 });

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <Ionicons name="ios-home-outline" size={22} 
        color= {focused ? '#18B3CC' : 'gray'} />
    )
};

const MoviesStack = createStackNavigator({
    Movies: MoviesScreen
 });

MoviesStack.navigationOptions = {
    tabBarLabel: 'Movies',
    tabBarIcon: ({ focused }) => (
        <Ionicons name="film-outline" size={22} 
        color= {focused ? '#18B3CC' : 'gray'} />
    )
} 

 const TvShowsStack = createStackNavigator({
    TvShows: TvShowsScreen
 });

TvShowsStack.navigationOptions = {
    tabBarLabel: 'TV Shows',
    tabBarIcon: ({ focused }) => (
        <Ionicons name="tv-outline" size={22} 
        color= {focused ? '#18B3CC' : 'gray'} />
    )
} 

const BottomTab = createBottomTabNavigator(
    { HomeStack, MoviesStack, TvShowsStack },
    {
        tabBarOptions:{
        showLabel: true
        }   
    }
    );

export default createAppContainer(BottomTab);