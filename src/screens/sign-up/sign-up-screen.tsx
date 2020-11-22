import React, { FC } from 'react';
import { CheckBox } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, ScrollView, TextField } from '../../components';
import { Routes } from '../../constants';

import Styles from './sign-up-screen.styles';

interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <TextField placeholder="First Name" style={Styles.inputField} />
      <TextField placeholder="Last Name" style={Styles.inputField} />
      <TextField placeholder="Email" style={Styles.inputField} />
      <TextField placeholder="Password" style={Styles.inputField} />
      <TextField placeholder="Contact" style={Styles.inputField} />
      <TextField placeholder="Confirm Password" style={Styles.inputField} />
      <View style={Styles.haveAccountContainer}>
        <CheckBox
        // value={this.state.checked}
        // onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
        <Text style={Styles.haveAccountText}>
          {'By Clicking the SignUp  you agree all the Terms and Conditions '}
        </Text>
      </View>
      <Button
        onPress={() => console.log('object')}
        title="Create An VirPerH Account"
        containerStyle={Styles.createAccountContainer}
      />
      <View style={Styles.haveAccountContainer}>
        <Text style={Styles.haveAccountText}>
          {'Already have VirPerH account? '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.SignIn)}>
          <Text style={Styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
