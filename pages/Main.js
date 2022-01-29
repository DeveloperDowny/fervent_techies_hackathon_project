import React from 'react';
import {View, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import globalStyles from '../globalStyles';
import Navbar from '../Components/Navbar';
import Settings from './Settings';
import Friends from './Friends';
import Tasks from './Tasks';
import IonIcon from '../customIcons/IonIcon';
import FontAwesomeIcon from '../customIcons/FontAwesomeIcon';

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabelStyle: {
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
          },
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#362E8C',
            borderTopColor: '#494481',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            height: 55,
          },
        })}>
        <Tab.Screen
          name="Friends"
          component={Friends}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <IonIcon
                  iconName="people"
                  iconColor={focused ? '#ffffff' : '000000'}
                  iconSize={25}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <IonIcon
                  iconName="settings"
                  iconColor={focused ? '#ffffff' : '000000'}
                  iconSize={25}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesomeIcon
                  iconName="tasks"
                  iconColor={focused ? '#ffffff' : '000000'}
                  iconSize={25}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
