import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../../assets/colors/Colors'; // Make sure this import is correct

const ListHeader = ({ title, openList, liststatus }) => {
  return (
    <Pressable onPress={() => openList(!liststatus)} style={styles.container}>
      <View style={styles.internalStyle}>
        {liststatus ? (
          <Icon name="chevron-down" size={16} color={COLORS.white} />
        ) : (
          <Icon name="chevron-right" size={16} color={COLORS.white} />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'flex-start'
  },
  internalStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.fog,
    paddingLeft:3,
    paddingVertical:2,
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.white,
    paddingHorizontal: 5,
    
  },
});
