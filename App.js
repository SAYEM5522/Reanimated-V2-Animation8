import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export default function App() {


  return (
    <View style={styles.container}>
 
     <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({

});
