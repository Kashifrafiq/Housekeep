import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import ListHeader from '../headers/ListHeader';
import ListCard from '../Cards/ListCard/ListCard';
import CompleteListCard from '../Cards/ListCard/CompleteListCard';

const HomeList = ({ name, data, completeList, setRelaod}) => {

  const [openList, setOpenList] = useState(false);
  // console.log('ListData:', data)
  



  return (
    <View style={styles.container}>
      <ListHeader title={name} openList={setOpenList} liststatus={openList} />
      {openList ? 
      <View>
        <FlatList
        data={data}
        keyExtractor={(item)=> item.roomID}
        scrollEnabled={false}
        renderItem={({item })=>{
          console.log('This:', item?.roomName)
            
            return completeList ? (
             < CompleteListCard title={item?.roomName} propertyName={item?.propertyName}
                item={item} note={item?.roomComments} />
            
            ) : (< ListCard title={item?.roomName} status={item?.frontdeskStatus} 
              doNotDisturb={item?.doNotDisturb} roomOccupied={item?.roomOccupied}  item={item} note={item?.roomComments} setRelaod={setRelaod}/> )
              
            
              
          
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
