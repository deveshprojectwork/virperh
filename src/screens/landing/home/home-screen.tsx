import React, { FC } from 'react';
import { Text, View } from 'react-native';
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
          <View key={item} style={Styles.menuContainer}>
            <View style={Styles.menuIcon} />
            <Text style={Styles.menuText}>Dashboard</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
