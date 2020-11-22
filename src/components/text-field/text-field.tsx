import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Colors } from '../../constants';

import Styles from './text-field.styles';

const TextField: FC<TextInputProps> = ({ ...props }) => {
  return (
    <TextInput
      placeholderTextColor={Colors.gray}
      placeholder="Text Field"
      {...props}
      style={[Styles.input, props.style]}
    />
  );
};

export default TextField;
