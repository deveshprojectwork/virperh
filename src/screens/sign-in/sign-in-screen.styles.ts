import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../../constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.white_1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
  },
  inputField: {
    marginBottom: 8,
  },
  rememberParentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 16,
    width: 16,
    backgroundColor: Colors.white,
    marginRight: 4.5,
  },
  signInContainer: {
    marginTop: 17,
  },
  signUpContainer: {
    marginTop: 17,
    backgroundColor: Colors.white,
  },
  signUpText: {
    color: Colors.black,
  },
  facebookContainer: {
    marginTop: 80,
    backgroundColor: Colors.facebook,
  },
  googleContainer: {
    marginTop: 17,
    marginBottom: 20,
    backgroundColor: Colors.primary,
  },
  forgotPasswordText: {
    fontSize: wp('3.7'),
    fontFamily: Fonts.robotoRegular,
    color: Colors.black_1,
  },
  rememberMeText: {
    fontSize: wp('3.7'),
    fontFamily: Fonts.robotoRegular,
    color: Colors.black_1,
  },
  AppNameText: {
    fontSize: wp('8.7'),
    fontWeight: 'bold',
    fontFamily: Fonts.robotoRegular,
    color: Colors.black_1,
  },
});
