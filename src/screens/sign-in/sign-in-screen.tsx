import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, ScrollView, TextField} from '../../components';
import {Routes} from '../../constants';

import Styles from './sign-in-screen.styles';

interface SignInScreenProps {
  navigation: any;
}

const SignInScreen: FC<SignInScreenProps> = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <TextField placeholder="Email" style={Styles.inputField} />
      <TextField placeholder="Password" style={Styles.inputField} />
      <View style={Styles.rememberParentContainer}>
        <TouchableOpacity>
          <View style={Styles.rememberContainer}>
            <View style={Styles.checkbox} />
            <Text style={Styles.rememberMeText}>Remember me</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => console.log('object')}
        title="Sign In"
        containerStyle={Styles.signInContainer}
      />
      <Button
        onPress={() => navigation.navigate(Routes.SignUp)}
        title="Sign Up"
        titleStyle={Styles.signUpText}
        containerStyle={Styles.signUpContainer}
      />
      <Button
        onPress={() => console.log('object')}
        title="Sign In with Facebook"
        containerStyle={Styles.facebookContainer}
      />
      <Button
        onPress={() => console.log('object')}
        title="Sign In with Google"
        containerStyle={Styles.googleContainer}
      />
    </ScrollView>
  );
};

export default SignInScreen;
