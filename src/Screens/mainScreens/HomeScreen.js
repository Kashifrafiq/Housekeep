import {ImageBackground, StyleSheet, Text, StatusBar, View} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import BackgroundImage from '../../../assets/backgroundImage/backgroundImage.png';
import HomeHeader from '../../Components/headers/HomeHeader';
import {getDateWithoutNames, getDatewithNames} from '../../Services/Date';
import {COLORS} from '../../../assets/colors/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomizeList from '../../Components/lists/CustomizeLists/CustomizeList';
import {useGetHousekeepingStatus} from '../../Hooks/api'
import {useSelector} from 'react-redux'
import { RootState } from '../../store/store';

import HomeList from '../../Components/lists/HomeList';
import SortList from '../../Components/lists/CustomizeLists/SortList';
import PropertiesList from '../../Components/lists/CustomizeLists/PropertiesList';


const HomeScreen = () => {
  const [isCoastline, setIsCoastline] = useState(false);
  const [isDelta, setIsDelta] = useState(false);
  const [isLakeside, setIsLakeside] = useState(false);

  const date = getDatewithNames();
  const CLrbSheetRef = useRef();
  const rbSheetRef = useRef();
  const PropertiesListrbSheetRef = useRef();
  const {currentHousekeepingstatus} = useSelector((state)=> state.housekeeping)
  console.log('HomeScreen: ', currentHousekeepingstatus)

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View style={styles.overlay}>
        <HomeHeader RbsheetReference={CLrbSheetRef} />
        <Text style={styles.dateText}>
          {date.day}, {date.month} {date.date}
        </Text>
        <HomeList name={'Coastline Villas'} data={currentHousekeepingstatus}/>
        <HomeList name={'Delta Villas'} data={currentHousekeepingstatus} />
        <HomeList name={'Completed'} data={currentHousekeepingstatus} />
      </View>
      <RBSheet
      ref={CLrbSheetRef}
      animationType='slide'
      height={200}
      customStyles={{container:{borderTopLeftRadius: 16, borderTopRightRadius: 16 }}}
      >
        
          <CustomizeList rbSheetRef={rbSheetRef} PropertiesListrbSheetRef={PropertiesListrbSheetRef} />
      
      </RBSheet>
      <RBSheet
      ref={rbSheetRef}
      animationType='slide'
      height={400}
      customStyles={{container:{borderTopLeftRadius: 16, borderTopRightRadius: 16 }}}
      >
        
          <SortList rbSheetRef={rbSheetRef} />
      
      </RBSheet>
      <RBSheet
      ref={PropertiesListrbSheetRef}
      animationType='slide'
      height={300}
      customStyles={{container:{borderTopLeftRadius: 16, borderTopRightRadius: 16 }}}
      >
        
          <PropertiesList rbSheetRef={PropertiesListrbSheetRef} isCoastline={isCoastline} isDelta={isDelta} isLakeside={isLakeside} 
          setIsCoastline={setIsCoastline} setIsDelta={setIsDelta} setIsLakeside={setIsLakeside}/>
      
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },

  dateText: {
    fontWeight: '400',
    fontSize: 18,
    color: COLORS.white,
  },
});
