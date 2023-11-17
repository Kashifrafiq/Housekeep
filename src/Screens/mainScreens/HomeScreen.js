import {ImageBackground, StyleSheet, Text, StatusBar, View} from 'react-native';
import React, { useRef } from 'react';
import BackgroundImage from '../../../assets/backgroundImage/backgroundImage.png';
import HomeHeader from '../../Components/headers/HomeHeader';
import {getDateWithoutNames, getDatewithNames} from '../../Services/Date';
import {COLORS} from '../../../assets/colors/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomizeList from '../../Components/lists/CustomizeLists/CustomizeList';

import HomeList from '../../Components/lists/HomeList';


const HomeScreen = () => {
  const date = getDatewithNames();
  const CLrbSheetRef = useRef();
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View style={styles.overlay}>
        <HomeHeader RbsheetReference={CLrbSheetRef} />
        <Text style={styles.dateText}>
          {date.day}, {date.month} {date.date}
        </Text>
        <HomeList name={'Coastline Villas'} />
        <HomeList name={'Delta Villas'} />
        <HomeList name={'Completed'} />
      </View>
      <RBSheet
      ref={CLrbSheetRef}
      animationType='slide'
      height={200}
      >
        <CustomizeList />

      </RBSheet>
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
