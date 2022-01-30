import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../globalStyles';
import {NativeModules} from 'react-native';
import NudgerConfirmationModal from '../Components/NudgerConfirmationModal';
const {AccessibilityPermissionHandler} = NativeModules;
const {InstalledApplicationsFetcher} = NativeModules;
import Ripple from 'react-native-material-ripple';
import AppsSelectorModal from '../Components/AppsSelectorModal';
import AntDesignIcon from '../customIcons/AntDesignIcon';
import WebsitesSelectorModal from '../Components/WebsitesSelectorModal';
import NotificationTextSelectorModal from '../Components/NotificationTextSelectorModal';

const Settings = () => {
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);

  const checkIfAccessibilityIsOn = () => {
    // nudger is turned on
    AccessibilityPermissionHandler.checkAccessibilityPermission(
      accessEnabled => {
        if (accessEnabled == 0) {
          //accessibility permission isn't given
          setConfirmationModalVisible(true);
          //   AccessibilityPermissionHandler.navigateToAccessibilitySettings();
        } else if (accessEnabled == 1) {
          //accesibility permission is given
        }
      },
    );
  };

  useEffect(() => {
    checkIfAccessibilityIsOn();
  }, []);

  const [blacklistedApps, setBlacklistedApps] = useState([]);

  const [appsSelectorModalVisible, setAppsSelectorModalVisible] =
    useState(false);

  const [websitesSelectorModalVisible, setWebsitesSelectorModalVisible] =
    useState(false);
  const [
    notificationTextSelectorModalVisible,
    setNotificationTextSelectorModalVisible,
  ] = useState(false);

  const saveBlacklistedApps = () => {
    InstalledApplicationsFetcher.saveNudgerApps(blacklistedApps.toString());
    setAppsSelectorModalVisible(false);
  };
  const saveBlacklistedWebsites = websites => {
    InstalledApplicationsFetcher.saveNudgerWebsites(websites);
    setWebsitesSelectorModalVisible(false);
  };
  const saveNotificationText = text => {
    InstalledApplicationsFetcher.saveNudgerNotificationText(text);
    setNotificationTextSelectorModalVisible(false);
  };

  return (
    <View style={globalStyles.overallBackground}>
      <NudgerConfirmationModal
        modalVisible={confirmationModalVisible}
        closeModal={() => setConfirmationModalVisible(false)}
        navigateToAccessibilitySettings={() => {
          AccessibilityPermissionHandler.navigateToAccessibilitySettings();
          setConfirmationModalVisible(false);
        }}
      />
      <View style={styles.mainContainer}>
        <Ripple
          rippleDuration={300}
          rippleColor="#ffffff"
          rippleContainerBorderRadius={5}
          onPress={() => setAppsSelectorModalVisible(true)}>
          <View style={styles.blackListedContainer}>
            <Text style={styles.blackListedText}>Blacklist Apps</Text>
            <AntDesignIcon
              iconName="caretdown"
              iconColor="#ffffff"
              iconSize={13}
            />
            <AppsSelectorModal
              modalVisible={appsSelectorModalVisible}
              closeModal={saveBlacklistedApps}
              selectedApps={blacklistedApps}
              setSelectedApps={setBlacklistedApps}
              goBack={() => setAppsSelectorModalVisible(false)}
            />
          </View>
        </Ripple>
        <Ripple
          rippleDuration={300}
          rippleColor="#ffffff"
          onPress={() => setWebsitesSelectorModalVisible(true)}
          rippleContainerBorderRadius={5}>
          <View style={styles.blackListedContainer}>
            <Text style={styles.blackListedText}>Blacklist Websites</Text>
            <AntDesignIcon
              iconName="caretdown"
              iconColor="#ffffff"
              iconSize={13}
            />
            <WebsitesSelectorModal
              modalVisible={websitesSelectorModalVisible}
              saveWebsites={websites => {
                saveBlacklistedWebsites(websites);
              }}
              goBack={() => setWebsitesSelectorModalVisible(false)}
            />
          </View>
        </Ripple>
        <Ripple
          rippleDuration={300}
          rippleColor="#ffffff"
          onPress={() => setNotificationTextSelectorModalVisible(true)}
          rippleContainerBorderRadius={5}>
          <View style={styles.blackListedContainer}>
            <Text style={styles.blackListedText}>Notification Text</Text>
            <AntDesignIcon
              iconName="caretdown"
              iconColor="#ffffff"
              iconSize={13}
            />
            <NotificationTextSelectorModal
              modalVisible={notificationTextSelectorModalVisible}
              saveText={text => {
                saveNotificationText(text);
              }}
              goBack={() => setNotificationTextSelectorModalVisible(false)}
            />
          </View>
        </Ripple>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    height: '100%',
  },
  blackListedContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  blackListedText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    color: '#ffffff',
    marginRight: 10,
  },
});
