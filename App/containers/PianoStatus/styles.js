import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import { textScale } from '../../utils/textUtil';
import { getDeviceHeight } from '../../utils/extension';

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15)
  },
  mainCard: {
    width: '100%',
    flexDirection: 'row'
  },
  octaveVolume: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: Colors.greyColor,
  },
  effects: {
    flex: 1
  },
  heading: {
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(16),
    fontWeight: '700',
    color: Colors.greyColor,
    textAlign: 'center'
  },
  octaveValue: {
    textAlign: 'center',
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(45),
    fontWeight: '700',
    color: Colors.greyColor,
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  volumeWrapper: {
    marginTop: scale(8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  outlineCircle: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.black,
    marginHorizontal: scale(8)
  },
  switchWrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  subHeading: {
    width: scale(200),
    textAlign: 'center',
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(20),
    fontWeight: '500',
    color: 'white',
    marginTop: scale(10),
    marginBottom: scale(49),
  },
  vspace: {
    height: scale(20)
  },  
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },  
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: scale(300),
    paddingTop: scale(50),
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  deviceLabel: {
    width: scale(200),
    textAlign: 'center',
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(18),
    fontWeight: '700',
    color: 'white',
    marginBottom: scale(20),
  },
  deviceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceIcon: {
    width: scale(20),
    height: scale(20),
  },
  deviceName: {
    marginLeft: scale(5),
    textAlign: 'center',
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(15),
    fontWeight: '700',
    color: 'white',
  }
});
