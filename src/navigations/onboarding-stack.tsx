import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Colors, Routes } from '../constants';
import { SignInScreen, SignUpScreen } from '../screens';
import { Fonts } from '../constants';

const Stack = createStackNavigator();

const OnBoardingNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.robotoRegular,
          fontSize: wp('5.6%'),
        },
        headerLeft: () => null,
      }}
    >
      <Stack.Screen
        options={{ title: 'Sign In' }}
        name={Routes.SignIn}
        component={SignInScreen}
      />
      <Stack.Screen
        options={{ title: 'Sign Up' }}
        name={Routes.SignUp}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export { OnBoardingNavigator };
