import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {useState} from 'react';
import RoomCard from '../../../components/RoomCard/RoomCard';
import CheckBox from 'react-native-check-box';
import {COLORS} from '../../../../assets/colors/Colors';
import nightsStandIcon from '../../../../assets/icons/nightsStand.png';
import personCountIcon from '../../../../assets/icons/personCount.png';
import childrenCountIcon from '../../../../assets/icons/childrenCount.png';
import Picker from 'react-native-picker-select';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Feather';
import DownIcon from 'react-native-vector-icons/Entypo';
import CheckIcon from 'react-native-vector-icons/Ionicons';

const RoomCardScreen = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isOccupied, setIsOccupied] = useState(true);
  const [isDirty, setIsDirty] = useState(true);
  const RoomComment = 'Shower is broken and in need of repair services.';
  const nightsStand = 4;
  const personCount = 12;
  const childrenCount = 0;
  const bottomSheetRef = useRef();
  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };
  return (
    <View style={{padding: 15}}>
      <RoomCard />

      {/* CheckBoxes */}
      <View style={styles.CheckBoxes}>
        <View style={styles.DoNotDisturbCheckBox}>
          <CheckBox
            checkBoxColor = "#3366FF"
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            style={{borderRadius: 5 }}
          />
          <Text style={styles.DoNotDisturbText}>Do Not Disturb</Text>
        </View>

        <View style={styles.OccupiedCheckBox}>
          <CheckBox
            checkBoxColor = "#3366FF"
            isChecked={isOccupied}
            onClick={() => setIsOccupied(!isOccupied)}
            style={{borderRadius: 5, opacity: 0.6}}
            disabled
          />
          <Text style={styles.DoNotDisturbText}>Occupied</Text>
        </View>
      </View>

      {/* Condition Drop Down  */}
      <View style={styles.ConditionDropDown}>
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
                  isDirty ?  <Text style={{fontSize: 14, color: COLORS.Lightning900}}>
                  Dirty
                </Text> : <Text style={{fontSize: 14, color: COLORS.Lightning900}}>
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
                style={{color: COLORS.black, fontSize: 18, fontWeight: '500'}}>
                Condition
              </Text>
              <Pressable onPress={()=>bottomSheetRef.current.close()}>
                <DownIcon name="cross" size={24} color="black" />
              </Pressable>
            </View>


            <View
              style={{
                borderWidth: 0.18,
                width: '100%',
                marginLeft: 15,
                backgroundColor: COLORS.fog300,
              }}></View>


            <Pressable onPress={()=> setIsDirty(false)}>
              { 
                <View style={{flexDirection: 'row', padding: 20}}>
                  {
                    isDirty ? null : 
                     <Icon name="check" size={24} color="white" />

                  }
                 
                  <Text
                    style={[{
                      color: COLORS.black,
                      fontSize: 18,
                      paddingLeft: 10,
                    }, isDirty? null: {fontWeight: 'bold'}]}>
                    Clean
                  </Text>
                </View>
              }
            </Pressable>

            <Pressable onPress={() => setIsDirty(true)}>
              {
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingLeft: 20,
                  }}>
                    {
                      isDirty ? <Icon name="check" size={24} color="green" /> : null
                    }
                  
                  <Text
                    style={[{
                      
                      color: COLORS.black,
                      fontSize: 18,
                      paddingLeft: 10,
                    },  isDirty? {fontWeight: 'bold',}: null   ]}>
                    Dirty
                  </Text>
                </View>
              }
            </Pressable>
          </RBSheet>
        </View>
      </View>

      {/* Room Status */}
      <View style={styles.RoomStatusMain}>
        <View>
          <Text style={styles.RoomStatusHeading}>Room Status</Text>
        </View>

        <View style={styles.TurnOverOptions}>
          <Text style={styles.turnoverText}>TurnOver</Text>
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
            <Text style={{fontSize: 14, color: COLORS.Lightning900, paddingHorizontal: 16, paddingVertical: 8, fontWeight: '400'}}>
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
    paddingLeft: 10,
    color: COLORS.Lightning900,
  },
  OccupiedCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  conditionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    paddingBottom: 10,
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
});
