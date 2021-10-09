import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  const Y = useSharedValue(0);
  const config={
    mass:0.01,
    damping:10,
    overshootClamping:false,
    restDisplacementThreshold:10,
    restSpeedThreshold:0.1
  }
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startX + event.translationY;
    },
    onEnd: (_) => {
      
    //  Y.value=withSpring(-100)
      
    },
  });
  
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      // transform: [
      //   {
      //     translateY:Y.value
      //   },
      // ],
      height:withSpring(interpolate(Y.value,[0,-10],[70,720],Extrapolate.CLAMP),config)

    };
  });
  return (
    <View style={styles.container}>
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
  }
});
