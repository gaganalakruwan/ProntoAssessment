import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import ComponentsStyles from '../Constant/Components.styles';
import InputText from './InputText';
import Icon from 'react-native-vector-icons/AntDesign';
import ActionButton from './ActionButton';
import * as DB_Register from '../SQLiteDatabaseAction/DBControllers/RegisterController';

type ParamTypes = {
  visibleDialog1: Function;
};
const RegisterForm = ({visibleDialog1}: ParamTypes) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //Save user data in local sqlite database
  const saveData = () => {
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        let regData = {
          username: username,
          password: password,
          email: email,
        };
        //check user exist or not in database before registration
        DB_Register.getUserById(username, (res: any, error: any) => {
          if (res[0]) {
            Alert.alert('User Already Registered..!');
          } else {
            DB_Register.saveNote(regData, (res, error) => {
              if (res) {
                visibleDialog1();
              }
            });
          }
        });
      } else {
        Alert.alert("Password Doesn't Match");
      }
    } else {
      Alert.alert('Please fill all fields for Registration');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.hederText}>Register Here</Text>
        <TouchableOpacity onPress={() => visibleDialog1()}>
          <Icon
            name="close"
            size={25}
            style={{color: ComponentsStyles.COLORS.ICON_BLUE}}
          />
        </TouchableOpacity>
      </View>

      <InputText
        placeholder="Username"
        title={'Username'}
        stateValue={username}
        setState={setUsername}
      />
      <View style={{padding: 5}} />
      <InputText
        placeholder="Email"
        title={'Email'}
        stateValue={email}
        setState={setEmail}
      />
      <View style={{padding: 5}} />
      <InputText
        placeholder="Password"
        title={'Password'}
        stateValue={password}
        setState={setPassword}
        secureTextEntry={true}
      />
      <View style={{padding: 5}} />
      <InputText
        placeholder="Confirm Password"
        title={'Confirm Password'}
        stateValue={confirmPassword}
        setState={setConfirmPassword}
        secureTextEntry={true}
      />

      <View style={{padding: 10}} />
      <ActionButton title="Save" onPress={() => saveData()} />
    </View>
  );
};
export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },
  hederText: {
    alignSelf: 'flex-start',
    fontSize: 22,
    color: ComponentsStyles.COLORS.ICON_BLUE,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
