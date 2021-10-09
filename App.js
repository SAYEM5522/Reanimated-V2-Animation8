import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import {Item} from "./Component/Data"
import Header from './Component/Header';
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
     
      height:withSpring(interpolate(Y.value,[0,-10],[70,720],Extrapolate.CLAMP),config)

    };
  });
  const renderItem=({item,index})=>{
    return(
      <View style={{padding:8}}>
         <Image
         source={{uri:'https://thumbs.dreamstime.com/b/young-african-american-man-s-listening-to-music-headphones-holding-smartphone-neon-light-gradient-background-concept-154090919.jpg'}}
         style={styles.Image}
         />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.List}>
        
          <FlatList
          data={Item}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListHeaderComponent={<Header/>}
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

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Container:{
    height:70,
    width:'100%',
    backgroundColor:'red',
    position:'absolute',
    left:0,
    right:0,
    bottom:0
  },
  Image:{
    height:150,
    width:150,
    borderRadius:10,
    resizeMode:'contain'
  },
  List:{
    alignSelf:'center',
    
  }
});
