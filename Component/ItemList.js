import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

const ItemList = ({color,index,translationX}) => {
  const BackgroundAnimation=useAnimatedStyle(()=>{
    return{
      backgroundColor:color,
      position:(index==0)&&"absolute",
      top:(index==0)?17:0,
      left:(index==0)?26:20,
      borderRadius:(index==0)?40:30,
      top:(index==0)?interpolate(translationX.value,[0,100],[17,-100],Extrapolate.CLAMP):0,
      height:(index==0)?interpolate(translationX.value,[0,100],[412,750],Extrapolate.CLAMP):430,

      
    }
  })
  return (
    
    <Animated.View style={[styles.Container,BackgroundAnimation]}>

    </Animated.View>
  )
}

export default ItemList

const styles = StyleSheet.create({
  Container:{
    // height:800,
    width:310,
    alignSelf:'center',
    top:100,
    borderRadius:30,
    left:50,
    zIndex:1000,
    
  },

})
