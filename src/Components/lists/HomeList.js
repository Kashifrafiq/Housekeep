import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import ListHeader from '../headers/ListHeader';
import ListCard from '../Cards/ListCard/ListCard';
import CompleteListCard from '../Cards/ListCard/CompleteListCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

const HomeList = ({ name, data, completeList, setReload }) => {
  const [openList, setOpenList] = useState(false);
  const [listData, setListData] = useState(data); // Manage data state using useState
  console.log('HomeList:', listData)
  useEffect(()=>{
    setListData(data)
  }, [data])

  const onDragEnd = (newData) => {
    setListData(newData); // Update the state with the new ordered data
  };




  const renderItem = ({ item, drag }) => {
    return (
      <ScaleDecorator>
        {completeList ? (
          <Pressable onLongPress={drag}>
            <CompleteListCard
              title={item?.roomName}
              propertyName={item?.propertyName}
              item={item}
              note={item?.roomComments}
            />
          </Pressable>
        ) : (
          <Pressable onLongPress={drag}>
            <ListCard
              title={item?.roomName}
              status={item?.frontdeskStatus}
              doNotDisturb={item?.doNotDisturb}
              roomOccupied={item?.roomOccupied}
              item={item}
              note={item?.roomComments}
              setReload={setReload}
            />
          </Pressable>
        )}
      </ScaleDecorator>
    );
  };

  return (
    <View style={{ marginTop: 10 }}>
      <ListHeader title={name} openList={setOpenList} liststatus={openList} />
      <GestureHandlerRootView>
        {openList ? (
          <DraggableFlatList
            data={listData} // Use listData in DraggableFlatList instead of data
            keyExtractor={(item) => item.roomID}
            scrollEnabled={false}
            renderItem={renderItem}
            onDragEnd={({ data: newData }) => onDragEnd(newData)}
          />
        ) : null}
      </GestureHandlerRootView>
    </View>
  );
};

export default HomeList;
