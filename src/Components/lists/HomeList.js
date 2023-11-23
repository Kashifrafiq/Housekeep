import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import ListHeader from '../headers/ListHeader';
import ListCard from '../Cards/ListCard/ListCard';

const HomeList = ({ name, data }) => {
  const [openList, setOpenList] = useState(false);



  return (
    <View style={styles.container}>
      <ListHeader title={name} openList={setOpenList} liststatus={openList} />
      {openList ?
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.roomID}
            scrollEnabled={false}
            renderItem={({ item }) => {

              return (
                <ListCard title={item?.roomName} status={item?.frontdeskStatus} doNotDisturb={item?.doNotDisturb} roomOccupied={item?.roomOccupied} />
              )

            }


            }
          />


        </View>


        : null}
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
