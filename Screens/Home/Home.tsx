/**
 * @author Gagana Lakruwan
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './style';
import comStyle from '../../Constant/Components.styles';
import Form from '../../Components/Form';
import Modal from 'react-native-modal';
import IconA from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  getAllNote,
  getNoteById,
} from '../../SQLiteDatabaseAction/DBControllers/NoteController';
import ViewTableData from '../../Components/ViewTableData';
import {useSelector, useDispatch} from 'react-redux';

import {removeUserDetails} from '../../Redux/Action';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState([]);
  const [dicumentId, setDocumentId] = useState('');
  const {userDetails} = useSelector(state => state.reducer); //get user details from redux store
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const visibleDialog1 = val => {
    setVisible(!visible);

    if (val) {
      setDocumentId(val);
    } else {
      setDocumentId('');
    }
  };

  useEffect(() => {
    getAllData();
  }, [visible]);

  const getAllData = () => {
    // get all note from local sqlite database
    getAllNote((res, error) => {
      let newArray = [...res];
      setRecord(newArray);
    });
  };

  const logoutUser = () => {
    navigation.goBack();
    dispatch(removeUserDetails());
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
          <Form visibleDialog1={visibleDialog1} docId={dicumentId} />
        </View>
      </Modal>
    );
  };
  return (
    <SafeAreaView style={comStyle.CONTAINER}>
      <View style={comStyle.CONTENT}>
        {showDialog()}

        <View style={{alignSelf: 'flex-start'}}>
          <View style={styles.detailsContainer}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconM
                  name="account-circle"
                  size={25}
                  color="#0091D5"
                  style={{}}
                />
                <Text style={styles.textStyle}>{userDetails[0]?.username}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.textStyle}>{userDetails[0]?.email}</Text>
              </View>
            </View>

            <View style={{flex: 1}} />
            <TouchableOpacity onPress={() => logoutUser()}>
              <IconM name="logout" size={30} color="red" />
            </TouchableOpacity>
          </View>

          <Text style={styles.headerStyle}>Note List</Text>
        </View>

        <View style={styles.flatListHeader}>
          <FlatList
            keyExtractor={item => item.docId}
            data={record}
            renderItem={({item}) => {
              return (
                <ViewTableData
                  subject={item.subject}
                  note={item.note}
                  date={item.dateTime}
                  onPress={() => visibleDialog1(item.docId)}
                />
              );
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.floatingBtn}
          onPress={() => visibleDialog1()}>
          <IconA name="circle-with-plus" size={50} color="red" style={{}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
