/**
 * @author Gagana Lakruwan
 */

import React, {useState, useRef, useEffect} from 'react';
import {StatusBar, Text, TouchableOpacity, View, Alert} from 'react-native';

import styles from './style';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ActionButton from '../../Components/ActionButton';
import {useNavigation} from '@react-navigation/native';
import * as DB from '../../SQLiteDatabaseAction/DBService';
import {useSelector, useDispatch} from 'react-redux';
import {addUserDetails} from '../../Redux/Action';
import Modal from 'react-native-modal';
import RegisterForm from '../../Components/RegisterForm';
import * as DB_Register from '../../SQLiteDatabaseAction/DBControllers/RegisterController';

const Login = () => {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  var scanner = useRef<any>(null);
  const {userDetails} = useSelector(state => state.reducer);

  useEffect(() => {
    DB.createTables();
    // check user log or not with redux store data
    if (userDetails[0]?.username) {
      navigation.navigate('Home');
    }
  }, []);

  const onSuccess = (e: any) => {
    try {
      // when detect qr code data check user exist or not in database
      DB_Register.getUserById(e.data, (res, error) => {
        if (res[0]) {
          // Save data in redux store
          dispatch(addUserDetails(res));
          navigation.navigate('Home');
        } else {
          Alert.alert('No User Found', 'Please Register First');
        }
      });
    } catch (error) {
      Alert.alert('No User With this email');
    }
    setScan(false);
    setScanResult(true);
  };

  const activeQR = () => {
    setScan(true);
  };
  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };

  const visibleDialog1 = val => {
    setVisible(!visible);
  };

  const showDialog = () => {
    return (
      <Modal
        style={{justifyContent: 'center', alignItems: 'center'}}
        isVisible={visible}
        animationIn={'fadeInUpBig'}
        animationOut={'fadeOutDownBig'}
        animationInTiming={500}
        animationOutTiming={500}>
        <View style={styles.model1}>
          <RegisterForm visibleDialog1={visibleDialog1} />
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {showDialog()}
      <Text style={styles.textTitle}>{`Welcome to\n Pronto App`}</Text>
      {!scan && !scanResult && (
        <View style={styles.cardView}>
          <ActionButton title="Click to Signin" onPress={activeQR} />
        </View>
      )}

      {scanResult && (
        <View style={scanResult ? styles.scanCardView : styles.cardView}>
          <ActionButton title="Click to Scan again!" onPress={scanAgain} />
          <Text
            style={{
              marginTop: 10,
              alignSelf: 'center',
            }}>
            No User Found!
          </Text>
        </View>
      )}

      {scan && (
        <QRCodeScanner
          reactivate={true}
          showMarker={true}
          ref={node => {
            scanner = node;
          }}
          onRead={onSuccess}
          bottomContent={
            <View>
              <ActionButton title="Stop Scan" onPress={() => setScan(false)} />
            </View>
          }
        />
      )}

      <TouchableOpacity onPress={() => visibleDialog1()}>
        <Text style={styles.registerStye}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
