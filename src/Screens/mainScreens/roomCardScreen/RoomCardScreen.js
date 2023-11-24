import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform, StatusBar
} from 'react-native';
// import CheckBox from 'react-native-check-box';
import { COLORS } from '../../../../assets/colors/Colors';
import childrenCountIcon from '../../../../assets/icons/childrenCount.png';
import nightsStandIcon from '../../../../assets/icons/nightsStand.png';
import personCountIcon from '../../../../assets/icons/personCount.png';
import LeftIcon from '../../../../assets/icons/arrowleft.png';
import selectedIcon from '../../../../assets/icons/selectedIcon.png';
import RoomCard from '../../../Components/Cards/RoomCard/RoomCard';
import CheckBox from '@react-native-community/checkbox';

import RBSheet from 'react-native-raw-bottom-sheet';
import DownIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import { goBack, navigate } from '../../../Navigation/navigationUtils';
import Routes from '../../../Navigation/routesNames';
import { useRoute } from '@react-navigation/native';

const RoomCardScreen = ({ }) => {
  const route = useRoute()
  const { item } = route.params

  const [isChecked, setIsChecked] = useState(item?.doNotDisturb)
  const [isOccupied, setIsOccupied] = useState(item?.roomOccupied);
  const [isDirty, setIsDirty] = useState(true);
  const RoomComment = item?.roomComments;
  const nightsStand = 4;
  const personCount = 12;
  const childrenCount = 0;
  const bottomSheetRef = useRef();
  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };
  useEffect(() => {
    if (item?.roomCondition === 'clean') {
      setIsDirty(false)
    } else { setIsDirty(true) }
  }, [])

  console.log('item: ', item)
  const onPressMyDay = () => {
   goBack();
  }
  return (
    <View style={[{ padding: 15 },  Platform.OS === 'ios' && styles.iOSMargin]}>
      {/* <RoomCard /> */}
      <View style={styles.header}>
        <View style={styles.listContainerRight}>
          <Pressable onPress={onPressMyDay}>
            <Image
              source={LeftIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={styles.headerText}>My day</Text>
        </View>
      </View>
      <View style={{ paddingTop: 8 }}>

        <RoomCard roomName={item?.roomName} roomTypeName={item?.roomTypeName} />
      </View>
      <View style={styles.container}>
        <View style={styles.DoNotDisturbCheckBox}>
          <CheckBox
            disabled={false}
            value={isChecked}
            tintColors={{ true: '#3366FF', false: '#3366FF' }}
            onValueChange={(newValue) => setIsChecked(newValue)
            }
          />
          <Text style={styles.DoNotDisturbText}>Do Not Disturb</Text>
        </View>
        <View style={styles.DoNotDisturbCheckBox}>
          <CheckBox
            disabled={true}
            value={isOccupied}
            tintColors={{ true: '#3366FF', false: '#3366FF' }}
            onValueChange={(newValue1) => setIsOccupied(newValue1)}
            style={{ opacity: 0.50 }}
          />
          <Text style={styles.DoNotDisturbText}>Occupied</Text>
        </View>
      </View>
      <View >
        <View style={styles.dropdownheading}>
          <Text style={styles.conditionHeading}>Condition</Text>
        </View>
        <View style={styles.ConditionDropDownBar}>
          <Pressable onPress={openBottomSheet}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                justifyContent: 'space-between',
                width: '100%',
              }}>
              {
                isDirty ? <Text style={{ fontSize: 14, color: COLORS.Lightning900 }}>
                  Dirty
                </Text> : <Text style={{ fontSize: 14, color: COLORS.Lightning900 }}>
                  Clean
                </Text>
              }
              <DownIcon name="chevron-down" size={14} color="black" />
            </View>
          </Pressable>
          <RBSheet
            ref={bottomSheetRef}
            height={200}
            openDuration={250}
            closeOnPressMask
            customStyles={{
              container: {
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              },
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{ color: COLORS.black, fontSize: 18, fontWeight: '500' }}>
                Condition
              </Text>
              <Pressable onPress={() => bottomSheetRef.current.close()}>
                <DownIcon name="cross" size={24} color="black" />
              </Pressable>
            </View>
            <View
              style={{
                borderWidth: 0.18,
                width: '100%',
                marginLeft: 15,
                backgroundColor: COLORS.fog300,
              }}>
            </View>
            <View style={styles.listSection}>
              <Pressable style={styles.listContainer} onPress={() => setIsDirty(false)}>
                {
                  <View style={styles.listContainerRight}>
                    <View style={styles.tickContainer} >
                      {
                        isDirty ? null :
                          <Image
                            source={selectedIcon}
                            style={styles.customIcon}
                            resizeMode="contain" />
                      }
                    </View>
                    <Text
                      style={[{
                        color: COLORS.black,
                        fontSize: 18,
                        paddingLeft: 10,
                      }, isDirty ? null : { fontWeight: '700' }]}>
                      Clean
                    </Text>
                  </View>
                }
              </Pressable>
              <Pressable style={styles.listContainer} onPress={() => setIsDirty(true)}>
                {
                  <View style={styles.listContainerRight}>
                    <View style={styles.tickContainer} >
                      {
                        isDirty ? <Image
                          source={selectedIcon}
                          style={styles.customIcon}
                          resizeMode="contain" /> : null
                      }
                    </View>
                    <Text
                      style={[{
                        color: COLORS.black,
                        fontSize: 18,
                        paddingLeft: 10,
                      }, isDirty ? { fontWeight: '700', } : null]}>
                      Dirty
                    </Text>
                  </View>
                }
              </Pressable>
            </View>
          </RBSheet>
        </View>
      </View>

      {/* Room Status */}
      <View style={styles.RoomStatusMain}>
        <View>
          <Text style={styles.RoomStatusHeading}>Room Status</Text>
        </View>

        <View style={styles.TurnOverOptions}>
          <Text style={styles.turnoverText}>{item?.frontdeskStatus}</Text>
          <View style={styles.nightsStandCounter}>
            <Text style={styles.nightsstandText}>{nightsStand}</Text>
            <Image style={styles.nightsstandIcon} source={nightsStandIcon} />
          </View>
          <View style={styles.personCount}>
            <Text style={styles.nightsstandText}>{personCount}</Text>
            <Image style={styles.nightsstandIcon} source={personCountIcon} />
          </View>
          <View style={styles.childrenCount}>
            <Text style={styles.nightsstandText}>{childrenCount}</Text>
            <Image style={styles.nightsstandIcon} source={childrenCountIcon} />
          </View>
        </View>
      </View>

      {/* Room Comments */}
      <View>
        <View style={styles.roomCommentheading}>
          <Text style={styles.roomCommentsText}>Room Comments</Text>
          <View style={styles.commentSection}>
            <Text style={{ fontSize: 14, color: COLORS.Lightning900, paddingHorizontal: 16, paddingVertical: 8, fontWeight: '400' }}>
              {RoomComment}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoomCardScreen;

const styles = StyleSheet.create({
  CheckBoxes: {
    marginVertical: 15,
  },
  DoNotDisturbCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBoxStyle: {
    fontSize: 18,
  },
  DoNotDisturbText: {
    fontSize: 14,
    paddingLeft: 8,
    fontWeight: '400',
    color: COLORS.Lightning900,
  },
  OccupiedCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  container: {
    paddingTop: 10,
  },
  conditionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    paddingBottom: 10,
    paddingTop: 10
  },
  RoomStatusHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
  },
  RoomStatusMain: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  TurnOverOptions: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  turnoverText: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
    paddingRight: 5,
  },
  nightsStandCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDE0E4',
    padding: 5,
    paddingRight: 10,
    borderRadius: 5,
  },
  nightsstandText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    paddingHorizontal: 5,
  },
  nightsstandIcon: {
    height: 14,
    width: 12.76,
  },
  personCount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDE0E4',
    padding: 5,
    paddingRight: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  childrenCount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDE0E4',
    padding: 5,
    paddingRight: 10,
    borderRadius: 5,
  },
  roomCommentsText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    paddingBottom: 10,
  },
  commentSection: {
    borderWidth: 1,
    borderColor: COLORS.fog,
    borderRadius: 4,
    width: '100%',
  },
  ConditionDropDownBar: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: COLORS.fog,
    borderRadius: 4,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  listContainerRight: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    marginLeft: 12,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 18,
  },
  listSection: {
    width: '100%',
    paddingHorizontal: 13,
  },
  customIcon: {
    height: 15,
    width: 15,
  },
  tickContainer: {
    width: '5%'
  },
  iOSMargin: {
    paddingTop: StatusBar.currentHeight || 20,
  },
});
