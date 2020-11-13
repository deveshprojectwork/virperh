import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../../constants';

export default StyleSheet.create({
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: Colors.white_2,
    backgroundColor: Colors.white,
    fontSize: wp('3.4%'),
    paddingHorizontal: 18,
    fontFamily: Fonts.robotoRegular,
  },
});
