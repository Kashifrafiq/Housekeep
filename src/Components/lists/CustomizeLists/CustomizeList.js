import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../../../assets/colors/Colors';
import SortIcon from '../../../../assets/icons/sort.png';
import propertyIcon from '../../../../assets/icons/property.png'
import { navigate } from '../../../Navigation/navigationUtils';
import Routes from '../../../Navigation/routesNames';

const CustomizeList = ({ rbSheetRef, PropertiesListrbSheetRef, myDaySheetRef }) => {

  const onPressSort = () => {
    rbSheetRef.current.open()
  }
  const onPressProperties = () => {
    PropertiesListrbSheetRef.current.open()
  }
  const onPressMyDay = () => {
    myDaySheetRef.current.close()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Customize List</Text>
        <Pressable onPress={onPressMyDay}>
          <Icon name={'cross'} size={24} color={COLORS.black} />
        </Pressable>
      </View>
      <View style={styles.line}></View>
      <View style={styles.listSection}>
        <Pressable style={styles.listContainer} onPress={onPressSort}>
          <View style={styles.listContainerRight}>
            <Image
              source={SortIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
            <Text style={styles.listText}>Sort by</Text>
          </View>
          <Icon name={'chevron-small-right'} size={24} color={COLORS.black} />
        </Pressable>

        <Pressable style={styles.listContainer} onPress={onPressProperties}>
          <View style={styles.listContainerRight}>
            <Image
              source={propertyIcon}
              style={styles.customIcon}
              resizeMode="contain"
            />
            <Text style={styles.listText}>Properties</Text>
          </View>
          <Icon name={'chevron-small-right'} size={24} color={COLORS.black} />
        </Pressable>

      </View>
    </View>
  );
};

export default CustomizeList;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  listSection: {
    width: '100%',
    marginTop: -10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 18,
  },
  listContainerRight: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  line: {
    borderBottomColor: '#DDE0E4',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  customIcon: {
    height: 15,
    width: 15,
  },
  listText: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.black,
    marginLeft: 12,
  }
});
