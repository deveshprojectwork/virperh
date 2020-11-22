import React, { FC } from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

const ScrollView: FC<KeyboardAwareScrollViewProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <KeyboardAwareScrollView enableOnAndroid={true} {...otherProps}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default ScrollView;
