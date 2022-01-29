import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FontAwesomeIcon = ({iconSize, iconColor, iconName}) => {
  return <Icon size={iconSize} color={iconColor} name={iconName} />;
};

export default FontAwesomeIcon;

const styles = StyleSheet.create({});
