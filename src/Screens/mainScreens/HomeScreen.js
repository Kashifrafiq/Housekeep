import {ImageBackground, StyleSheet, Text, StatusBar, View} from 'react-native';
import React, { useRef, useState } from 'react';
import BackgroundImage from '../../../assets/backgroundImage/backgroundImage.png';
import HomeHeader from '../../Components/headers/HomeHeader';
import {getDateWithoutNames, getDatewithNames} from '../../Services/Date';
import {COLORS} from '../../../assets/colors/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomizeList from '../../Components/lists/CustomizeLists/CustomizeList';

import HomeList from '../../Components/lists/HomeList';
import SortList from '../../Components/lists/CustomizeLists/SortList';
import PropertiesList from '../../Components/lists/CustomizeLists/PropertiesList';


const HomeScreen = () => {
  const [isCoastline, setIsCoastline] = useState(false);
  const [isDelta, setIsDelta] = useState(false);
  const [isLakeside, setIsLakeside] = useState(false);

  const date = getDatewithNames();
  const CLrbSheetRef = useRef();
  const SortListrbSheetRef = useRef();
  const PropertiesListrbSheetRef = useRef();
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
      customStyles={{container:{borderTopLeftRadius: 16, borderTopRightRadius: 16 }}}
      >
        <CustomizeList rbSheetRef={SortListrbSheetRef} PropertiesListrbSheetRef={PropertiesListrbSheetRef}/>

      </RBSheet>
      <RBSheet
      ref={SortListrbSheetRef}
      animationType='fade'
      height={400}
      customStyles={{container:{borderTopLeftRadius: 16, borderTopRightRadius: 16 }}}
      >
        <SortList rbSheetRef={SortListrbSheetRef}/>

      </RBSheet>
      <RBSheet
      ref={PropertiesListrbSheetRef}
      animationType='slide'
      height={250}
      customStyles={{container:{borderTopLeftRadius: 16, borderTopRightRadius: 16 }}}
      >
        <PropertiesList rbSheetRef={PropertiesListrbSheetRef} setIsCoastline={setIsCoastline} setIsDelta={setIsDelta} setIsLakeside={setIsLakeside} isCoastline={isCoastline}
         isDelta={isDelta} isLakeside={isLakeside} />

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
