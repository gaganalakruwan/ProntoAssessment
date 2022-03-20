import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ComponentsStyles from '../Constant/Components.styles';
import moment from 'moment';

type ParamTypes = {
  subject: String;
  note: String;
  date: any;
  onPress: Function;
};

const ViewTableData = ({subject, note, date, onPress}: ParamTypes) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
  }, []);

  return (
    <TouchableOpacity
      style={[styles.container, ComponentsStyles.SHADOW]}
      onPress={onPress}>
      <Text style={styles.subjectStyle}>{subject}</Text>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 2}
        style={styles.noteStyle}>
        {note}
      </Text>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.clockView}>
          <Icon
            name="calendar-month"
            size={18}
            color={ComponentsStyles.COLORS.ICON_BLUE}
          />
          <View style={{padding: 2}} />
          <Text style={styles.dateTitle}>
            {moment(new Date(date)).format('DD/MM/YYYY')}
          </Text>
        </View>
        <View style={styles.clockView}>
          <Icon
            name="clock-outline"
            size={18}
            color={ComponentsStyles.COLORS.ICON_BLUE}
          />
          <View style={{padding: 2}} />
          <Text style={styles.dateTitle}>
            {moment(new Date(date)).format('hh:mm a')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ViewTableData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    elevation: 6,
    margin: 5,
    backgroundColor: '#fff',
  },
  dateField: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  dateTitle: {
    fontSize: 13,
    color: ComponentsStyles.COLORS.Accent_900,
    fontWeight: 'bold',
  },
  subjectStyle: {
    flex: 1,
    fontSize: 16,
    color: ComponentsStyles.COLORS.BLACK,
  },
  noteStyle: {
    flex: 1,
    fontSize: 14,
    color: ComponentsStyles.COLORS.BLACK,
    lineHeight: 21,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
