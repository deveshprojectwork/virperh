import 'react-native-gesture-handler';
import React, {FC, Fragment} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './navigations';
import {Colors} from './constants';

const App: FC = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Fragment>
  );
};

export default App;
