import {ImageBackground, StyleSheet, Text, StatusBar, View} from 'react-native';
import React, { useRef } from 'react';
import BackgroundImage from '../../../assets/backgroundImage/backgroundImage.png';
import HomeHeader from '../../components/headers/HomeHeader';
import {getDateWithoutNames, getDatewithNames} from '../../Services/Date';
import {COLORS} from '../../../assets/colors/Colors';
import ListHeader from '../../components/headers/ListHeader';
import ListCard from '../../components/Cards/ListCard/ListCard';
import HomeList from '../../components/lists/HomeList';
import RBSheet from 'react-native-raw-bottom-sheet';

const HomeScreen = () => {
  const date = getDatewithNames();
  const CLrbSheetRef = useRef();
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View style={styles.overlay}>
        <HomeHeader />
        <Text style={styles.dateText}>
          {date.day}, {date.month} {date.date}
        </Text>
        <HomeList name={'Coastline Villas'} />
        <HomeList name={'Delta Villas'} />
        <HomeList name={'Completed'} />
      </View>
      {/* <RBSheet
      ref={CLrbSheetRef}
      animationType='slide'
      height={400}
      >

      </RBSheet> */}
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  overlay: {
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity (fourth value) as needed
  },

  dateText: {
    fontWeight: '400',
    fontSize: 18,
    color: COLORS.white,
  },
});
