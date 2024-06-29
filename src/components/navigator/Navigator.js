import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../../screens/components/Header';
import HomeScreen from '../../screens/home/HomeScreen';
import SplashScreen from '../../screens/splash/SplashScreen';
import QuestionScreen from '../../screens/question/QuestionScreen';
import appStyle from '../../styles/style';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: [
            appStyle.background,
            {
              display: 'flex',
              justifyContent: 'center',
              height: '100%',
            },
          ],
        }}
        initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Group
          screenOptions={{
            header: () => (
              <Header backgroundColor={appStyle.background.backgroundColor} />
            ),
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Question" component={QuestionScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
