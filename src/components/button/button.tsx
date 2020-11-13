import React, {FC} from 'react';
import {StyleProp, Text, TouchableOpacity} from 'react-native';

import Styles from './button.styles';

interface ButtonProps {
  title: string;
  titleStyle?: StyleProp<object>;
  containerStyle?: StyleProp<object>;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({
  title,
  titleStyle,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Styles.container, containerStyle]}>
      <Text style={[Styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
