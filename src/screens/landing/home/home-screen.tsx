import React, { FC } from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { ScrollView } from '../../../components';
import Styles from './home-screen.styles';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.nameContainer}>
        <Text style={Styles.nameText}>Michael Angelo</Text>
      </View>
      <View style={Styles.menusContainer}>
        {Array.from(Array(8).keys()).map((item) => (
          <TouchableNativeFeedback key={item}>
            <View style={Styles.menuContainer}>
              <View style={Styles.menuIcon} />
              <Text style={Styles.menuText}>Dashboard</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
