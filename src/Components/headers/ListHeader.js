import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../../assets/colors/Colors'; // Make sure this import is correct

const ListHeader = ({title, openList, liststatus}) => {
  return (
    <Pressable onPress={() => openList(!liststatus)} style={styles.container}>
      {liststatus ? (
        <Icon name="chevron-down" size={16} color={COLORS.white} />
      ) : (
        <Icon name="chevron-right" size={16} color={COLORS.white} />
      )}

      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    width:'40%',
    backgroundColor: COLORS.fog,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.white,
  },
});
