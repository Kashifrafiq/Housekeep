import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import BackgroundImage from '../../../assets/roomcard/RoomCard.png';
import {LinearGradient} from 'react-native-linear-gradient';
import { COLORS } from '../../../assets/colors/Colors';

const RoomCard = () => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.cardImage}>
      <LinearGradient
        colors={[
          'rgba(197.82, 197.82, 197.82, 0)', // Lighter white color with 50% opacity
          'rgba(197.82, 197.82, 197.82, 0)', // Lighter gray color with 50% opacity
          'rgba(97.75, 97.75, 97.75, 0)', // Lighter gray color with 25% opacity
          'rgba(45.33, 45.33, 45.33, .7)', // Lighter gray color with 50% opacity
        ]}
        start={{x: 0, y: 0 }}
        end={{x: 0, y: 0.1}}>
        <View style={styles.cardText}>
          <Text style={styles.title}>QS(201) — Queen Single </Text>
          <Text style={styles.subtitle}>Coastline Villas </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  cardImage: {
    height: 239,
    width: 370,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
  },
});
