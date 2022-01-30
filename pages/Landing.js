import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
} from 'react-native';
import globalStyles from '../globalStyles';

const Landing = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View style={globalStyles.overallBackground}>
      <ImageBackground
        source={require('../resources/images/Conquerbackground.png')}
        style={styles.backgroundImage}>
        <View style={styles.mainContent}>
          <Text style={styles.topLine}> Hey,{'\n'} I am Nudger.</Text>
          <Text style={styles.tagLine}>
            {'\n'} My job is to increase your productivity by keeping you away
            from apps and websites which distract you !
          </Text>
          <TouchableOpacity
            style={styles.getStartedBut}
            onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.getStartedButText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  backgroundImage: {
    width: 700,
    height: 800,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: -150,
  },
  topLine: {
    fontFamily: 'Poppins-Medium',
    color: '#ffffff',
    fontSize: 26,
    width: 400,
    textAlign: 'center',
  },
  mainContent: {
    // backgroundColor: "#000000",
    flex: 0.6,
    // backgroundColor:"#000000",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLine: {
    fontFamily: 'Poppins-Medium',
    color: 'rgba(255,255,255,0.8)',
    fontSize: 21,
    width: 400,
    textAlign: 'center',
  },
  getStartedBut: {
    borderRadius: 14,
    elevation: 20,
    marginTop: 39,
    padding: 9,
    backgroundColor: '#A981FF',
  },
  getStartedButText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 23,
  },
});
