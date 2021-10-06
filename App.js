import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Item } from './Component/Data';
import ItemList from './Component/ItemList';
export default function App() {

  const translationX = useSharedValue(0);
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });
  const Slide = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });
  const renderItem=({item,index})=>{
   
    return(
      <View style={styles.Container}>
         <ItemList key={index} color={item.color} index={index} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
      </View>
      <View style={styles.RoundView}/>
      <View style={styles.ItemList}>
        <AnimatedFlatlist
        data={Item}
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        />
      </View>
     <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:15,
    flex: 1,
    backgroundColor: '#fff',
  
  },
  Header:{
    height:130,
    width:"75%",
    backgroundColor:'#B6E3DB',
    alignSelf:'center',
    marginBottom:15,
    borderRadius:30
  },
  RoundView:{
    width:60,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:8
  },
  ItemList:{
    height:460,
  },
  Container:{
    padding:10,
  },
});
