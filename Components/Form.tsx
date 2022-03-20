/**
 * @author Gagana Lakruwan
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import ComponentsStyles from '../Constant/Components.styles';
import InputText from './InputText';
import Icon from 'react-native-vector-icons/AntDesign';
import ActionButton from './ActionButton';
import * as DB_Note from '../SQLiteDatabaseAction/DBControllers/NoteController';

type ParamTypes = {
  visibleDialog1: Function;
  docId?: String;
};
const numberOfLines = 5;

const Form = ({visibleDialog1, docId}: ParamTypes) => {
  const [subject, setSubject] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    //get select note details from database using documnet id
    DB_Note.getNoteById(docId, (res, error) => {
      let newArray = [...res];
      setSubject(newArray[0].subject);
      setNote(newArray[0].note);
    });
  }, []);
  const saveData = () => {
    if (subject && note) {
      let saveData = {
        subject: subject,
        note: note,
        date: new Date().toString(),
      };
      //save New note details in local database
      DB_Note.saveNote(saveData, (res, err) => {
        if (res) {
          visibleDialog1();
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {!docId ? (
          <Text style={styles.headerText}>New Note</Text>
        ) : (
          <Text style={styles.headerText}>Note Details</Text>
        )}
        <TouchableOpacity onPress={() => visibleDialog1()}>
          <Icon
            name="close"
            size={25}
            style={{color: ComponentsStyles.COLORS.ICON_BLUE}}
          />
        </TouchableOpacity>
      </View>

      <InputText title={'Subject'} stateValue={subject} setState={setSubject} />

      <View style={{padding: 5}} />

      <Text style={styles.commentSubTitle}>Comment</Text>

      <View style={styles.textContainer}>
        <TextInput
          multiline={true}
          numberOfLines={Platform.OS === 'ios' ? null : numberOfLines}
          minHeight={
            Platform.OS === 'ios' && numberOfLines ? 20 * numberOfLines : null
          }
          defaultValue={note}
          onChangeText={text => setNote(text)}
          style={styles.commentInput}
        />
      </View>
      <View style={{padding: 5}} />
      {!docId ? <ActionButton title="Save" onPress={() => saveData()} /> : null}
    </View>
  );
};
export default Form;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },
  headerText: {
    alignSelf: 'flex-start',
    fontSize: 22,
    color: ComponentsStyles.COLORS.ICON_BLUE,
    fontWeight: 'bold',
  },

  textContainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ComponentsStyles.COLORS.Accent_900,
  },

  commentSubTitle: {
    marginTop: 10,
    color: ComponentsStyles.COLORS.ICON_BLUE,
    opacity: 0.8,
  },

  commentInput: {
    color: ComponentsStyles.COLORS.ICON_BLUE,
    textAlignVertical: 'top',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
