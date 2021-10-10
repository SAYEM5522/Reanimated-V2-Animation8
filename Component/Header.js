import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Browse</Text>
      <Image
      source={{uri:'https://p4.wallpaperbetter.com/wallpaper/352/204/925/taylor-swift-women-singer-blue-eyes-long-hair-hd-wallpaper-preview.jpg'}}
      style={styles.Image}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Image:{
    height:35,
    width:35,
    borderRadius:20
  },
  HeaderText:{
    fontSize:29,
    fontWeight:'bold',
    color:'black'
  },
  Container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:20
  }
})
