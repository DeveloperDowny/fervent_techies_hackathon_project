import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';
import {NativeModules} from 'react-native';
const {AccessibilityPermissionHandler} = NativeModules;

const NudgerConfirmationModal = ({
  modalVisible,
  closeModal,
  navigateToAccessibilitySettings,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      onBackButtonPress={closeModal}>
      <View style={styles.modal}>
        <Text style={styles.deleteText}>
          You need to provide me accessibility permission to check if you are
          using the blacklisted applications; I can't work without this
        </Text>
        <View style={styles.buttons}>
          <Ripple
            rippleDuration={300}
            rippleContainerBorderRadius={5}
            onPress={closeModal}>
            <Text style={styles.noText}>
              No I can trust big tech but not you
            </Text>
          </Ripple>
          <Ripple
            rippleDuration={300}
            rippleContainerBorderRadius={5}
            onPress={navigateToAccessibilitySettings}>
            <Text style={styles.yeahText}>
              Fine, take me to accessibility settings
            </Text>
          </Ripple>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

export default NudgerConfirmationModal;

const styles = StyleSheet.create({
  modal: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 13,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    height: 110,
    // backgroundColor: 'black',
    justifyContent: 'space-around',
    // backgroundColor:'#000000'
  },
  deleteText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  noText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#f50057',
  },
  yeahText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#3f51b5',
  },
});
