import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { AntDesign } from '@expo/vector-icons';
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
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 25,
    borderRadius:10,
    position:"relative"
  },
  Icon:{
    position:'absolute',
    left:20,
    top:20
  },
  TextI:{
    position:'absolute',
    bottom:20,
    fontSize:35,
    fontWeight:'bold',
    color:"white",
    left:30,

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
     <AntDesign name="left" style={styles.Icon} size={24} color="white" />
     <Text style={styles.TextI}>Favorites</Text>
     </View>
    </View>
  )
}

export default DetailScreen


