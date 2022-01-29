import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';

const NotificationTextSelectorModal = ({modalVisible, saveText, goBack}) => {
  const [text, setText] = useState('');

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      onBackButtonPress={goBack}
      backdropColor="rgba(0, 0, 0,0.6)"
      style={styles.modal}>
      <View style={styles.modalContainer}>
        <TextInput
          multiline={true}
          numberOfLines={100}
          placeholder={
            'Type the text which you expect to see in the notification triggered by overusing blacklisted stuff'
          }
          value={text}
          onChangeText={val => setText(val)}
          placeholderTextColor="rgba(255,255,255, 0.5)"
          style={styles.websitesInputContainer}
        />
        <Ripple
          rippleDuration={300}
          rippleContainerBorderRadius={5}
          style={styles.bottomButton}
          rippleColor="#ffffff"
          onPress={() => saveText(text)}>
          <Text style={styles.bottomButtonText}>Save</Text>
        </Ripple>
      </View>
    </Modal>
  );
};

export default NotificationTextSelectorModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000000',
    borderRadius: 20,
    marginTop: 70,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 500,
    maxHeight: 500,
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: 10,
  },
  websitesInputContainer: {
    borderColor: '#F1D7D7',
    borderWidth: 2,
    borderRadius: 10,
    height: '90%',
    backgroundColor: '#1a1616',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#ffffff',
    padding: 10,
    textAlignVertical: 'top',
  },
  bottomButton: {
    alignSelf: 'flex-end',
    marginLeft: 28,
  },
  bottomButtonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});
