import {
  ImageBackground,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Platform,
  Dimensions,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import BackgroundImage from '../../../assets/backgroundImage/backgroundImage.png'
import HomeHeader from '../../Components/headers/HomeHeader'
import { getDateWithoutNames, getDatewithNames } from '../../Services/Date'
import { COLORS } from '../../../assets/colors/Colors'
import RBSheet from 'react-native-raw-bottom-sheet'
import CustomizeList from '../../Components/lists/CustomizeLists/CustomizeList'
import { useGetHousekeepingStatus } from '../../Hooks/api'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

import HomeList from '../../Components/lists/HomeList'
import SortList from '../../Components/lists/CustomizeLists/SortList'
import PropertiesList from '../../Components/lists/CustomizeLists/PropertiesList'
import { FlatList, ScrollView, SectionList } from 'native-base'
import { useUser } from '../../Hooks'
import SettingScreen from './SettingScreen'

const { height } = Dimensions.get('screen')

const HomeScreen = () => {
  const [isCoastline, setIsCoastline] = useState(false)
  const [isDelta, setIsDelta] = useState(false)
  const [isLakeside, setIsLakeside] = useState(false)
  const [reload, setRelaod] = useState(false)

  const date = getDatewithNames()

  const CLrbSheetRef = useRef()
  const rbSheetRef = useRef()
  const settingScreenRef = useRef()
  const PropertiesListrbSheetRef = useRef()
  const { currentHousekeepingstatus, housekeepingstatus, completed } =
    useSelector(state => state.housekeeping)
  const [completeList, setCompleteList] = useState([])
  const [dityRooms, setDirtyRooms] = useState([])
  const { properties, fetchUsers } = useUser()

  useEffect(() => {
    // console.log("HomeScreen: ", housekeepingstatus)
    const currentRooms = housekeepingstatus.filter(f => f.roomCondition === 'dirty')
    setDirtyRooms(currentRooms)
    const completedRooms = housekeepingstatus.filter(f => f.roomCondition === 'clean')
    setCompleteList(completedRooms)
    // console.log('curreentRooms Homescreen:' , currentRooms)
  }, [fetchUsers, housekeepingstatus])

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
      <StatusBar
        barStyle="light-content" />
      <View style={[styles.overlay, Platform.OS === 'ios' && styles.iOSMargin]}>
        <HomeHeader
          RbsheetReference={CLrbSheetRef}
          settingScreenRef={settingScreenRef}
        />
        <Text style={styles.dateText}>
          {date.day}, {date.month} {date.date}
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          {
            properties.map(e => (
              <HomeList name={e.propertyName} data={dityRooms} completeList={false} setRelaod={setRelaod} />
            ))
          }
          <HomeList name={'Completed'} data={completeList} completeList={true} />
        </ScrollView>

        {/* <SectionList 
        sections={array}
        renderSectionHeader={({section: {title}})=>{
          return(
             <Text style={styles.header}>{title}</Text>
          )
         
        }}

        renderItem={({item})=>{
          return(
            <Text>{item.roomName}</Text>
          )
        }
      }
        /> */}

        {/* <ScrollView>
        <HomeList name={'Coastline Villas'} data={housekeepingstatus}/>
        <HomeList name={'Delta Villas'} data={currentHousekeepingstatus} />
        <HomeList name={'Completed'} data={currentHousekeepingstatus} />
        </ScrollView> */}
      </View>
      <RBSheet
        ref={CLrbSheetRef}
        // animationType="slide"
        height={200}
        customStyles={{
          container: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
        }}>
        <CustomizeList
          rbSheetRef={rbSheetRef}
          PropertiesListrbSheetRef={PropertiesListrbSheetRef}
          myDaySheetRef={CLrbSheetRef}
        />
      </RBSheet>
      <RBSheet
        ref={rbSheetRef}
        // animationType="slide"
        height={400}
        customStyles={{
          container: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
        }}>
        <SortList rbSheetRef={rbSheetRef} />
      </RBSheet>
      <RBSheet
        ref={PropertiesListrbSheetRef}
        // animationType="slide"
        height={300}
        customStyles={{
          container: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
        }}>
        <PropertiesList
          rbSheetRef={PropertiesListrbSheetRef}
          isCoastline={isCoastline}
          isDelta={isDelta}
          isLakeside={isLakeside}
          setIsCoastline={setIsCoastline}
          setIsDelta={setIsDelta}
          setIsLakeside={setIsLakeside}
        />
      </RBSheet>
      <RBSheet
        ref={settingScreenRef}
        // animationType="slide"
        height={height - 40}
        customStyles={{
          container: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
        }}>
        <SettingScreen settingScreenRef={settingScreenRef} />
      </RBSheet>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  overlay: {
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  dateText: {
    fontWeight: '400',
    fontSize: 18,
    color: COLORS.white,
  },
  iOSMargin: {
    paddingTop: StatusBar.currentHeight || 60,
  },
})
