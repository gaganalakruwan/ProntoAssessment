import {Dimensions, Platform} from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');
const BACKGROUND_COLOR = '#FFFFFF';
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

const CurrentDate = year + '-' + month + '-' + date;
export default {
  WIDTH: width,
  HEIGHT: height,

  COLORS: {
    WHITE: '#ffffff',
    PINK: '#d52471',
    BLACK: '#000000',
    ICON_BLUE: '#0091D5',
    HEADER_BLACK: '#0D0D0D',
    Accent_900: '#7AD4DD',
    TIME_COLOR: '#727272',
  },

  CONTAINER: {
    backgroundColor: 'white',
    flex: 1,
  },
  CONTENT: {
    margin: 25,
    flex: 1,
  },

  SHADOW: {
    shadowColor: `rgba(36, 4, 112, ${Platform.OS === 'ios' ? 0.5 : 0.6})`,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
};
