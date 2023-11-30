import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../../../assets/colors/Colors';
import ImportanceIcon from '../../../../assets/icons/importance.png';
import AlphabeticallyIcon from '../../../../assets/icons/Alphabetically.png';
import FrontdeskIcon from '../../../../assets/icons/Frontdesk.png';
import UnoccupiedIcon from '../../../../assets/icons/Unoccupied.png';
import ManuallyIcon from '../../../../assets/icons/Manually.png';
import { navigate } from '../../../Navigation/navigationUtils';
import Routes from '../../../Navigation/routesNames';

const SortList = ({ rbSheetRef, data }) => {
  const [selectedItem, setSelectedItem] = useState('Importance')

  const onPressCustomizeList = () => {
    rbSheetRef.current.close()
  }


  const onPressSortOption = (option) => {

    switch (option) {
      case 'Importance':
        setSelectedItem(option)
        console.log(selectedItem, 'Pressed')
        break;
      case 'Alphabetically-Numerically':
        setSelectedItem(option)
        console.log(selectedItem, 'Pressed')
        break;


      case 'Frontdesk-Status':

        setSelectedItem(option)
        console.log(selectedItem, 'Pressed')
        break;

      case 'Unoccupied':
        setSelectedItem(option)
        console.log(selectedItem, 'Pressed')
        break


      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.listContainerRight}>
          <Pressable onPress={onPressCustomizeList}>
            <Icon name={'chevron-small-left'} size={24} color={COLORS.black} />
          </Pressable>
          <Text style={styles.headerText}>Sort by</Text>
        </View>
        <Pressable onPress={onPressCustomizeList}>
          <Icon name={'cross'} size={24} color={COLORS.black} />
        </Pressable>
      </View>
      <View style={styles.line}></View>
      <View style={styles.listSection}>
        <Pressable style={styles.listContainer}
          onPress={() => onPressSortOption('Importance')}
        >
          <View style={styles.listContainerRight}>
            <Image
              source={ImportanceIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
            <Text style={[selectedItem === 'Importance' ? styles.listTextBold : styles.listText]}>Importance</Text>
          </View>
        </Pressable>

        <Pressable style={styles.listContainer}
          onPress={() => onPressSortOption('Alphabetically-Numerically')}
        >
          <View style={styles.listContainerRight}>
            <Image
              source={AlphabeticallyIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
            <Text style={[selectedItem === 'Alphabetically-Numerically' ? styles.listTextBold : styles.listText]}>Alphabetically / Numerically</Text>
          </View>
        </Pressable>

        <Pressable style={styles.listContainer}
          onPress={() => onPressSortOption('Frontdesk-Status')}
        >
          <View style={styles.listContainerRight}>
            <Image
              source={FrontdeskIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
            <Text style={[selectedItem === 'Frontdesk-Status' ? styles.listTextBold : styles.listText]}>Frontdesk Status</Text>
          </View>
        </Pressable>

        <Pressable style={styles.listContainer}
          onPress={() => onPressSortOption('Unoccupied')}
        >
          <View style={styles.listContainerRight}>
            <Image
              source={UnoccupiedIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
            <Text style={[selectedItem === 'Unoccupied' ? styles.listTextBold : styles.listText]}>Unoccupied / Disturb</Text>
          </View>
        </Pressable>

        <Pressable style={styles.listContainer}>
          <View style={styles.listContainerRight}>
            <Image
              source={ManuallyIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
            <Text style={styles.listText}>Manually</Text>
          </View>
        </Pressable>

      </View>
    </View>
  );
};

export default SortList;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    marginLeft: 12,
  },
  line: {
    borderBottomColor: '#DDE0E4',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  listSection: {
    width: '100%',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 18,
  },
  listContainerRight: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  customIcon: {
    height: 15,
    width: 15,
  },
  listTextBold: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.black,
    marginLeft: 12,
    fontWeight: '700'
  },
  listText: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.black,
    marginLeft: 12,
    width: '100%'
  },
});
