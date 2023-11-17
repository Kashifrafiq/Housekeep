import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import SettingHeader from '../../Components/headers/SettingHeader'
import ProfileImage from '../../Components/ProfileImage/ProfileImage'
import Icon from 'react-native-vector-icons/Feather'
import FIcon from '../../../assets/icons/information.png'
import { COLORS } from '../../../assets/colors/Colors'

const SettingScreen = () => {
   const name= "Alice Parker"
   const email = 'aparker@email.com'
  return (
    <View style={styles.container}>
      <SettingHeader />
      <ProfileImage large={true}/>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version</Text>
        <Text style={styles.versionNumber}>1.2.18</Text>
      </View>
      <Pressable style={styles.feedbackButton}>
        <Image source={FIcon} tintColor={COLORS.Lightning500} resizeMode='contain' style={styles.informationICon} />
        <Text style={styles.feedbackText}>Give feedback or report an issue</Text>
        <Icon name= 'chevron-right' size={20} color= {COLORS.Lightning500} style={{marginLeft: 20,}} />
      </Pressable>
      <Pressable style={styles.logoutButton}>
        <Text style={styles.buttonText}>Log out</Text>
      </Pressable>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flex: 1,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.black
    },
    email: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.black
    },
    versionContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent:'space-between',
        marginTop: 15,
        height: 24,
    },
    versionText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.black
    },
    versionNumber: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.Lightning900
    },
    feedbackButton : {
      flexDirection: 'row',
      width: '100%',
      height: 30,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 20,
    },
    informationICon: {
      width: 13,
      height:13
    },
    feedbackText: {
      fontSize: 14,
      fontWeight: '400',
      color: COLORS.Lightning500
    },
    logoutButton: {
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: COLORS.button_Border,
      height: 48,
      borderRadius: 24,
      position: 'absolute',
      bottom: 25,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: COLORS.Lightning900,
    }


})