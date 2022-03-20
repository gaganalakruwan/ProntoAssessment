import {StyleSheet} from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  textTitle: {
    fontSize: 25,
    padding: 10,
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  buttonTextStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
  },
  cardView: {
    width: 200,
    height: 200,
  },
  scanCardView: {
    width: 200,
    height: 200,
  },
  model1: {
    borderColor: ComponentsStyles.COLORS.PINK,
    width: '100%',
    alignItems: 'center',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  registerStye: {
    fontSize: 18,
    color: ComponentsStyles.COLORS.ICON_BLUE,
    fontWeight: '600',
  },
});
