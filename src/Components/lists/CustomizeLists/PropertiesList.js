import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../../../assets/colors/Colors';
import selectedIcon from '../../../../assets/icons/selectedIcon.png';
import RBSheet from 'react-native-raw-bottom-sheet';


const PropertiesList = ({ rbSheetRef, setIsCoastline, setIsDelta, setIsLakeside, isCoastline, isDelta, isLakeside }) => {
  // const [isCoastline, setIsCoastline] = useState(false);
  // const [isDelta, setIsDelta] = useState(false);
  // const [isLakeside, setIsLakeside] = useState(false);
  const onPressCustomizeList = () => {
    rbSheetRef.current.close()
  }
  const PropertiesListrbSheetRef = useRef();
  const openBottomSheet = () => {
    PropertiesListrbSheetRef.current.open();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.listContainerRight}>
          <Pressable onPress={onPressCustomizeList}>
            <Icon name={'chevron-small-left'} size={24} color={COLORS.black} />
          </Pressable>
          <Text style={styles.headerText}>Properties</Text>
        </View>
        <Pressable onPress={onPressCustomizeList}             >
          <Icon name={'cross'} size={24} color={COLORS.black} />
        </Pressable>
      </View>
      <View style={styles.line}></View>
      <View style={styles.listSection}>
        <Pressable style={styles.listContainer} onPress={() => setIsCoastline(!isCoastline)}>
          <View style={styles.listContainerRight}>

            <View style={styles.tickContainer} >{
              isCoastline ?
                <Image
                  source={selectedIcon}
                  style={styles.customIcon}
                  resizeMode="contain" /> : null
                  }
            </View>
            <Text
              style={[
                styles.listTextBold,
                isCoastline ? null : styles.listText,
              ]}>
              Coastline Villas
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.listContainer} onPress={() => setIsDelta(!isDelta)}>
          <View style={styles.listContainerRight}>
          <View style={styles.tickContainer} >{
              isDelta ?
                <Image
                  source={selectedIcon}
                  style={styles.customIcon}
                  resizeMode="contain" /> : null
                }
                </View>
            <Text
              style={[
                styles.listTextBold,
                isDelta ? null : styles.listText,
              ]}>
              Delta Villas
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.listContainer} onPress={() => setIsLakeside(!isLakeside)}>
          <View style={styles.listContainerRight}>
          <View style={styles.tickContainer} >{
              isLakeside ? 
                <Image
                  source={selectedIcon}
                  style={styles.customIcon}
                  resizeMode="contain" /> : null
                }
                </View>
            <Text
              style={[
                styles.listTextBold,
                isLakeside ? null : styles.listText,
              ]}>
              Lakeside Estates
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default PropertiesList;

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
    marginBottom: 8,
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
    weight: '400'
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
  tickContainer:{
    width: '5%'
  }
});
