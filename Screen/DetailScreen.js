import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#fff'
  },
  Image:{
    height:windowHeight/2,
    width:windowWidth,
  },
  ImageContainer:{
    height:windowHeight/2,
    width:windowWidth,
    overflow: 'visible',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 25,
    borderRadius:10
  }
})
const DetailScreen = ({route}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
     <Image
     source={{uri:route.params.img}}
     style={styles.Image}
     />
     </View>
    </View>
  )
}

export default DetailScreen


