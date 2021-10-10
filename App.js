import React from 'react';
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import {Item} from "./Component/Data"
import Header from './Component/Header';
import Feed from './Component/Fedd';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BottomHeight=70
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Container:{
    height:70,
    width:'100%',
    backgroundColor:'#fff',
    position:'absolute',
    left:0,
    right:0,
    bottom:0
  },
  Image:{
    height:160,
    width:170,
    borderRadius:15,
    // resizeMode:'contain'
  },
  List:{
    alignSelf:'center',
    
  },
  SongC:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    top:10
  },
  SongN:{
    fontSize:13,
    fontWeight:'700',
    color:'gray',
    top:10,
    bottom:4
  }
});
export default function App() {
  const Y = useSharedValue(0);
  const config={
    mass:0.3,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:10,
    restSpeedThreshold:10
  }
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startX + event.translationY;
   
    },
    onEnd: (_) => {
    
    // if(Y.value<-600) {
    //     Y.value=withSpring(0)
    //   }
      
    },
  });
  
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
    
     
      height:withSpring(interpolate(Y.value,[0,-10],[BottomHeight,windowHeight],Extrapolate.CLAMP),config)

    };
  });
  const renderItem=({item,index})=>{
    return(
      <View style={{padding:8}}>
         <Image
         source={{uri:item.img}}
         style={styles.Image}
         />
         <Text style={styles.SongC}>{item.name}</Text>
         <Text style={styles.SongN}>{item.song}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.List}>
          <FlatList
          data={Item}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListHeaderComponent={<Feed/>}
          numColumns={2}
          />
        
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.Container,animatedStyle,]}>
      </Animated.View>
      </PanGestureHandler>
     <StatusBar/>
    </View>
  );
}


