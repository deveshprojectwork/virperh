import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, ScrollView, TextField} from '../../components';
import {Routes} from '../../constants';

import Styles from './sign-up-screen.styles';

interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen: FC<SignUpScreenProps> = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <TextField placeholder="First Name" style={Styles.inputField} />
      <TextField placeholder="Last Name" style={Styles.inputField} />
      <TextField placeholder="Email" style={Styles.inputField} />
      <TextField placeholder="Password" style={Styles.inputField} />
      <TextField placeholder="Confirm Password" style={Styles.inputField} />
      <Button
        onPress={() => console.log('object')}
        title="Create An Account"
        containerStyle={Styles.createAccountContainer}
      />
      <View style={Styles.haveAccountContainer}>
        <Text style={Styles.haveAccountText}>{'Already have account? '}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.SignIn)}>
          <Text style={Styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
