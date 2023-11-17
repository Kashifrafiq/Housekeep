import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileImage = ({large}) => {
  name= 'AP'
  return (
    <View style={large? styles.large : styles.small}>
      <Text style={[styles.text, large? {fontSize: 28}: {fontSize: 18}]}>{name}</Text>
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
    small:{
        width: 40,
        height: 40,
        backgroundColor: '#668CFF',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    large:{
      width: 80,
      height: 80,
      backgroundColor: '#668CFF',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center'
  },

    text: {
        color: 'white',
        fontWeight: '400',
    }
})