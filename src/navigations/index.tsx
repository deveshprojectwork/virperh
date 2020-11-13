import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {OnBoardingNavigator} from './onboarding-stack';

const AppNavigator: FC = () => {
  return (
    <SafeAreaProvider>
      <OnBoardingNavigator />
    </SafeAreaProvider>
  );
};

export {AppNavigator};
