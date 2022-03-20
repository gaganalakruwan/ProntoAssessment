import {StyleSheet} from 'react-native';
import ComponentsStyles from '../../Constant/Components.styles';

export default StyleSheet.create({
  floatingBtn: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 1,
    right: 1,
    zIndex: 1000,
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
  headerStyle: {
    marginTop: 15,
    marginHorizontal: 5,
    marginBottom: 5,
    fontSize: 25,
    color: ComponentsStyles.COLORS.BLACK,
    fontWeight: 'bold',
  },
  flatListHeader: {
    paddingBottom: 50,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  textStyle: {
    fontSize: 14,
    color: ComponentsStyles.COLORS.ICON_BLUE,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
