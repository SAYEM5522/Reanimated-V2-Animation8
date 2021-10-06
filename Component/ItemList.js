import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

const ItemList = ({color}) => {
  const BackgroundAnimation=useAnimatedStyle(()=>{
    return{
      backgroundColor:color
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
    height:430,
    width:310,
    alignSelf:'center',
    top:20,
    borderRadius:30,
    left:50
  }
})
