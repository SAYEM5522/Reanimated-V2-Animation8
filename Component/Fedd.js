import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Fedd = () => {
  return (
    <View >
     <View style={styles.ImageS}>
      <Image
     source={{uri:'https://t4.ftcdn.net/jpg/03/26/55/55/360_F_326555521_3Fdxm6Ue8OCATwOt9Kc7dMy2S0Ml5jaz.jpg'}}
     style={styles.Image}
     />
       </View>
     <Text style={styles.SongC}>Favorites</Text>
     <Text style={styles.SongN}>10 songs</Text>
    </View>
  )
}

export default Fedd

const styles = StyleSheet.create({
  Image:{
    height:155,
    width:350,
    alignSelf:'center',
    borderRadius:20,
   
  },
  SongC:{
    fontSize:16,
    fontWeight:'bold',
    left:15,
    top:10
  },
  SongN:{
    fontSize:13,
    fontWeight:'700',
    color:'gray',
    top:10,
    left:15,
    marginBottom:6
  },
  ImageS:{
    overflow: 'visible',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 100,
    elevation: 10,
    height:155,
    width:350,
    left:12
 
  }
})
