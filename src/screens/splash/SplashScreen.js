/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import AppIcon from '../../assets/app_icon.svg';
import appStyle from '../../styles/style';
import themeStyle from '../../styles/theme.style';
import Brand from '../components/Brand';
import Notifee from '@notifee/react-native';
import NotificationService from '../../services/notification/NotificationService';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Home'), 200);

    NotificationService.createNotification();

    Notifee.onForegroundEvent(async ({ type, detail }) => {
      console.log("[onForegroundEvent] event type:", type, detail)
      if (NotificationService.isUserPressed(type)) {
        console.log('[onForegroundEvent] User pressed the notification:', detail.notification);
        navigation.replace('Question')
      }
    });

    Notifee.onBackgroundEvent(async ({ type, detail }) => {
      console.log("[onBackgroundEvent] event type:", type, detail)
      if (NotificationService.isUserPressed(type)) {
        console.log('[onBackgroundEvent] User pressed the notification:', detail.notification);
        navigation.replace('Question')
      }
    });
  }, []);

  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <AppIcon width={60} height={60} />
      <Brand
        style={[{color: themeStyle.SECONDARY_COLOR}, appStyle.largeText]}
      />
    </View>
  );
};

export default SplashScreen;
