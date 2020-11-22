import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Button, ScrollView, TextField } from '../../../components';

import Styles from './forgot-password-screen.styles';

interface ForgotPasswordScreenProps {
  navigation: any;
}

const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({
  navigation,
}) => {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.headingContainer}>
        <Text style={Styles.heading}>Reset your Password</Text>
        <Text style={Styles.paragraph}>
          Weasel the jeeper goodness inconsiderately spelledso ubiquitous amused
          knitted and altruistic amiablefar much toward.
        </Text>
      </View>
      <TextField placeholder="Email" style={Styles.inputField} />
      <Button
        onPress={() => navigation.goBack()}
        title="Reset Password"
        containerStyle={Styles.resetPasswordContainer}
      />
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
