import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

const ItemList = ({color,index}) => {
  const BackgroundAnimation=useAnimatedStyle(()=>{
    return{
      backgroundColor:color,
      position:(index==0)&&"absolute",
      height:(index==0)?412:430,
      top:(index==0)?17:0,
      left:(index==0)?12:5,
      borderRadius:(index==0)?40:30
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
    left:50,
    zIndex:1000,

  },
  LeftView:{
    height:430,
    width:50,
    backgroundColor:'black',
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderRadius:30,
    left:-50,
    zIndex:-1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position:'absolute'
  }
})
