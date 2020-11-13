import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  title: {
    color: Colors.white,
    fontSize: wp('3.7%'),
    fontFamily: Fonts.robotoMedium,
  },
});
