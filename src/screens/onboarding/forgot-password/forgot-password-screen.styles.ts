import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../../../constants';

export default StyleSheet.create({
  container: {
    height: hp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
  },
  inputField: {
    marginBottom: 8,
  },
  resetPasswordContainer: {
    marginTop: 13,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  heading: {
    fontSize: wp('5%'),
    fontFamily: Fonts.robotoRegular,
    color: Colors.black_1,
  },
  paragraph: {
    fontSize: wp('3.33%'),
    fontFamily: Fonts.robotoRegular,
    color: Colors.gray_1,
    textAlign: 'center',
    marginTop: 10,
  },
});
