import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import ProfileImage from '../ProfileImage/ProfileImage'
import settingIcons from '../../../assets/icons/setting.png'
import informationIcon from '../../../assets/icons/information.png'




const InformationIcon = () =>{
    return (
        <View style={styles.informationIconContainer}>
            <Image source={informationIcon} resizeMode= 'contain'/>
        </View>
    )
}

const SettingIcon = ({RbSheetRef}) => {
    return (
        <Pressable onPress={()=> RbSheetRef.current.open()}>
            <Image source={settingIcons} />
        </Pressable>
    )
}

const HomeHeader = ({RbsheetReference, settingScreenRef}) => {
  return (
    <View style={styles.mainContainer}>

      <View style= { styles.leftContainer}>
        <Text style={styles.text1}>My Day</Text>
      </View>
      

      <View style={ styles.rightcontainer}>
        
        <ProfileImage large={false} settingScreenRef={settingScreenRef}  />
        <InformationIcon />
        <SettingIcon RbSheetRef={RbsheetReference} />
        

      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingVertical: 10,
       
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftContainer: {
        width: '60%'
    },
    rightcontainer: {
        width: '40%',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text1: {
        fontSize: 24,
        color: 'white',
        fontWeight: '600'
    },
    informationIconContainer: {
        height: 24,
        width: 24,
    },
})