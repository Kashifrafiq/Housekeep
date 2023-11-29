import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../../assets/colors/Colors'
import NoteIcon from '../../../../assets/icons/note.png'
import Starfill from '../../../../assets/icons/starfill.png'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import NotePoint from '../../../../assets/icons/pointYellow.png'
import { navigate } from '../../../Navigation/navigationUtils'
import Routes from '../../../Navigation/routesNames'
import { useDispatch } from 'react-redux'
import { changeCompleted as storeCompleted } from '../../../store/slices/HouskeepingSlice'
import { useNavigation } from '@react-navigation/native'
import {usePostHousekeepingStatus} from '../../../Hooks/api'
import { useUser } from '../../../Hooks'


const CompleteListCard = ({ title, note, propertyName, item }) => {

  const housekeepingStatusUpdate = usePostHousekeepingStatus()
  const {fetchUsers} = useUser()


  const dispatch = useDispatch()
  const navigation = useNavigation()


  const onPressCheck = () => {
    console.log(item)

    housekeepingStatusUpdate.mutate({
      roomID: item.roomID,
      roomCondition: "dirty"
    })

    fetchUsers(true)

    
    
  }
  const OnPressNote = () => {
    navigation.navigate(Routes.Housekeeping, { item: item })
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Pressable
          onPress={() => onPressCheck(item)}
          style={styles.checkContainer}>
          <Icon1 name={'check'} size={12} color={COLORS.Lightning900} />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.status}>{propertyName}</Text>
        </View>
      </View>
      <View style={styles.rightConatiner}>
        <Pressable onPress={OnPressNote}>
          <Image source={NoteIcon} style={styles.icon} />
          <Image source={NotePoint} style={styles.notepoint} />
        </Pressable>
        <Image source={Starfill} style={styles.icon} />
      </View>
    </View>
  )
}

export default CompleteListCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    marginTop: 7,
    backgroundColor: COLORS.fog100,
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
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.Lightning900,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
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
})
