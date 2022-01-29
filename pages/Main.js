import React from 'react';
import {View, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import globalStyles from '../globalStyles';
import Navbar from '../Components/Navbar';

const Main = () => {
  return (
    <View style={globalStyles.overallBackground}>
      <Navbar page="Main" />
    </View>
  );
};

export default Main;
