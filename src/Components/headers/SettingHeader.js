import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { COLORS } from '../../../assets/colors/Colors'
import { navigate } from '../../Navigation/navigationUtils'
import Routes from '../../Navigation/routesNames'


const SettingHeader = ({settingRef}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Pressable onPress={()=> settingRef.current.close()}>
         <Icon name= {'cross'} size={24} color={COLORS.black} />
      </Pressable>
    </View>
  )
}

export default SettingHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '7%',
        width: '100%',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.fog300,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.black
    }
})