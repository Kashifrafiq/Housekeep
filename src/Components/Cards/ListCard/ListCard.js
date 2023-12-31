import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../../../assets/colors/Colors';
import NoteIcon from '../../../../assets/icons/note.png';
import Starfill from '../../../../assets/icons/starfill.png';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import NotePoint from '../../../../assets/icons/pointYellow.png';
import { navigate } from '../../../Navigation/navigationUtils';
import Routes from '../../../Navigation/routesNames';
import { useDispatch } from 'react-redux';
import {
  changeCompleted as storeCompleted
} from '../../../store/slices/HouskeepingSlice'
import { useNavigation } from '@react-navigation/native';
import {usePostHousekeepingStatus} from '../../../Hooks/api'
import { useRefresh, useUser } from '../../../Hooks';
import {useProgress} from '../../ProgressHud/ProgressContext'



const ListCard = ({title, status, doNotDisturb, roomOccupied , item, note, setRelaod}) => {

  const dispatch = useDispatch();
  const navigation = useNavigation()
  const housekeepingStatusUpdate = usePostHousekeepingStatus()
  const {showProgress, hideProgress} = useProgress()
  const {fetchUsers} = useUser()
  const [refreshClicked, setRefreshClicked] = useState(false);
  const [turnover, setTurnover] = useState(true);
  const [completed, setComplete] = useState(false);
  const [notes, setNotes] = useState(note);

  useEffect(()=>{
    if(note === ''){
      setNotes(false);
    }else{
      setNotes(true);
    }
  
  }, [])

  const onPressStar = () => {
    setTurnover(!turnover);
    
  };

  const onPressCheck = () => {
   
    
    
   
  
    
   
    
    housekeepingStatusUpdate.mutate({
      roomID: item.roomID,
      roomCondition: "clean"
    })
    
   
    fetchUsers(true)
    
    
   
  };

  

  
  const OnPressNote =() => {
    navigation.navigate(Routes.Housekeeping, {item: item})
  }

  return (
    <View
      style={[
        styles.container,
        completed
          ? {backgroundColor: COLORS.fog100}
          : {backgroundColor: COLORS.white},
      ]}>
      <View style={styles.leftContainer}>
        <Pressable onPress={onPressCheck} style={styles.checkContainer}>
          {completed ? (
            <Icon1 name={'check'} size={12} color={COLORS.Lightning900} />
          ) : null}
        </Pressable>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              completed
                ? {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  }
                : null,
            ]}>
            {title}
          </Text>
          <Text
            style={[
              styles.status,
              completed
                ? {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  }
                : null,
            ]}>
            {roomOccupied && doNotDisturb ? 'Occupied & Do not disturb' : roomOccupied ? 'Occupied' : doNotDisturb ? 'Do not disturb' : null}
          </Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
      <View style={styles.rightConatiner}>
        <Pressable onPress={OnPressNote}>
          <Image source={NoteIcon} style={styles.icon} />
          {
            notes?  <Image source={NotePoint} style={styles.notepoint} /> : null
          }
          
        </Pressable>
        
        <Pressable onPress={onPressStar}>
          {turnover ? (
            <Icon name={'star'} color={COLORS.Lightning900} size={20} />
          ) : (
            <Image source={Starfill} style={styles.icon} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    marginTop: 7,

    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
  },
  rightConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.Lightning900,
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.Lightning900,
  },
  checkContainer: {
    width: 22,
    height: 22,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  textContainer: {
    marginLeft: 12,
  },
  notepoint: {
    position: 'absolute',
    height: 16,
    width: 16,
    top: -7,
    right: -8,
  },
});
