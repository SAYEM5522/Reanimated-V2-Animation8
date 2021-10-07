import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Item } from './Component/Data';
import ItemList from './Component/ItemList';
export default function App() {

  const translationX = useSharedValue(0);
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });
  const BackgroundAnimation=useAnimatedStyle(()=>{
    return{
      // transform:[{
      //   translateY:interpolate(translationX.value,[0,100],[0,-150],Extrapolate.CLAMP)
      // }],
      // height:interpolate(translationX.value,[0,100],[130,0],Extrapolate.CLAMP),
      top:interpolate(translationX.value,[0,100],[0,-150],Extrapolate.CLAMP)
    }
  })

 
  const renderItem=({item,index})=>{
   
    return(
      <Animated.View style={[styles.Container]}>
         <ItemList key={index} color={item.color} translationX={translationX} index={index} />
      </Animated.View>
    )
  }
  return (
    <View style={styles.container}>
     
      <Animated.View style={[styles.Header,BackgroundAnimation]}> 
      <Animated.View style={[styles.RoundView]}/>
       </Animated.View>
      {/* <Animated.View style={[styles.ItemList,]}> */}
        <AnimatedFlatlist
        data={Item}
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        />
      {/* </Animated.View> */}
     <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // top:20,
    flex: 1,
    backgroundColor: '#fff',
    
  
  },
  Header:{
    height:130,
    width:"75%",
    backgroundColor:'#B6E3DB',
    alignSelf:'center',
    marginBottom:15,
    borderRadius:30,
    // top:-130
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
   top:-100,
   height:750
   },
  Container:{
    padding:10,
    // top:130
    
  },
});
