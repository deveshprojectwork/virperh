import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../../../constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    paddingVertical: hp('3%'),
  },
  nameContainer: {
    minHeight: hp('16.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: Fonts.robotoLight,
    fontSize: wp('6.66%'),
    color: Colors.gray_2,
  },
  menusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: hp('6%'),
    paddingBottom: hp('3%'),
    backgroundColor: Colors.white_1,
  },
  menuContainer: {
    width: wp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    // backgroundColor: 'red',
  },
  menuIcon: {
    height: 60,
    width: 60,
    backgroundColor: Colors.white,
    elevation: 3,
    borderRadius: 30,
    marginBottom: 15,
  },
  menuText: {
    fontFamily: Fonts.robotoRegular,
    fontSize: wp('3%'),
    color: Colors.black_1,
  },
});
