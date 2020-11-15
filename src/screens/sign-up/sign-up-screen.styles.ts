import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../../constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
  },
  inputField: {
    fontSize: wp('4.0'),
    color: Colors.black,
    marginBottom: 10,
  },
  createAccountContainer: {
    marginTop: 24,
  },
  haveAccountContainer: {
    flexDirection: 'row',
    marginTop: 28,
  },
  haveAccountText: {
    fontSize: wp('3.7'),
    fontFamily: Fonts.robotoRegular,
    color: Colors.black_1,
  },
  signInText: {
    fontSize: wp('3.7'),
    fontFamily: Fonts.robotoMedium,
    color: Colors.black_1,
  },
});
