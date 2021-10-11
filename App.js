import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import {Item} from "./Component/Data"
import Header from './Component/Header';
import Feed from './Component/Fedd';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { MaterialIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BottomHeight=70
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Container:{
    height:windowHeight,
    width:'100%',
    backgroundColor:'#fff',
    position:'absolute',
    left:0,
    right:0,
    // bottom:0
  },
  Image:{
    height:160,
    width:170,
    borderRadius:15,
  },
  List:{
    alignSelf:'center',
    
  },
  SongC:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    top:10
  },
  SongN:{
    fontSize:13,
    fontWeight:'700',
    color:'gray',
    top:10,
    bottom:4
  },
  ImageS:{
    overflow: 'visible',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    height:160,
    width:170,
    borderRadius:15,
 
  },
  HeaderS:{
    height:70,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    left:30,
    top:10
  },
  BImage:{
    height:(windowHeight/2)-50,
    width:windowWidth-55,
    alignSelf:'center',
    borderRadius:30
  },
  HeaderST:{
    fontSize:15,
    left:120,
    fontWeight:'bold'
  },
  CBImage:{
    overflow: 'visible',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 12,
    // height:(windowHeight/2)-50,
    // width:windowWidth-55,
    borderRadius:30,
    alignSelf:'center',
  },
  TextC:{
    left:30,
    top:33,
    flexDirection:'row',
    alignItems:'center'
  },
  TextC1:{
    fontSize:22,
    fontWeight:'bold',

  },
  TextC2:{
    fontSize:15,
    fontWeight:'700',
    color:'gray',
    left:5
  },
  Heart:{
    marginLeft:(windowWidth-195)
  },
  Slader:{
    width: windowWidth-25,
     height: 40,
     alignSelf:'center',
     top:40
  },
  play:{
    alignSelf:"center",
    padding:20,
    backgroundColor:'black',
    borderRadius:45,
  },
  PlayList:{
    flexDirection:"row",
    alignItems:'center',
    top:60,
    justifyContent:'space-evenly'
  }

 
});
export default function App() {
  const [play ,setPlay]=useState(false)
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
    
    if(Y.value<-30) {
        Y.value=withSpring(-(windowHeight-95),config)
      }
      if(Y.value<-370){
        Y.value=withSpring(0,config)

      }
    },
  });

  
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      top:windowHeight-95,
      transform:[{
        translateY:clamp(Y.value,-(windowHeight-95),0)
      }]
    };
  });
  const HeaderOpacity = useAnimatedStyle(() => {
    return {
      opacity:interpolate(Y.value,[0,-(windowHeight-95)],[0,1],Extrapolate.CLAMP)
    };
  });
  const ImageAnimation = useAnimatedStyle(() => {
    return {
     transform:[{
       translateX:interpolate(Y.value,[0,-(windowHeight-95)],[-150,0],Extrapolate.CLAMP),
     },
     {
       scale:interpolate(Y.value,[0,-(windowHeight-95)],[0.15,1],Extrapolate.CLAMP),
     }
    ],
    top:interpolate(Y.value,[0,-(windowHeight-95)],[-193,10],Extrapolate.CLAMP),
    borderRadius:interpolate(Y.value,[0,-(windowHeight-95)],[20,30],Extrapolate.CLAMP),
    };
  });
  const TextCnimation = useAnimatedStyle(() => {
    return {
     transform:[{
       translateY:interpolate(Y.value,[0,-(windowHeight-95)],[-410,0],Extrapolate.CLAMP),
     },
     {
      translateX:interpolate(Y.value,[0,-(windowHeight-95)],[70,0],Extrapolate.CLAMP),
     }
    ],
    };
  });
  const Text1Animation = useAnimatedStyle(() => {
    return {
      fontSize:interpolate(Y.value,[0,-(windowHeight-95)],[15,22],Extrapolate.CLAMP),
    };
  });
  
  const IconAnimation= useAnimatedStyle(() => {
    return {
     opacity:interpolate(Y.value,[-590,-600],[0,1],Extrapolate.CLAMP),
    };
  });
  const playMusic=()=>{
    'worklet'
    setPlay(false)
  }
  const PuseMusic=()=>{
    'worklet'
    setPlay(true)
  }
  const renderItem=({item,index})=>{
    return(
      <View style={{padding:8}}>
        <View style={styles.ImageS}>
         <Image
         source={{uri:item.img}}
         style={styles.Image}
         />
         </View>
         <Text style={styles.SongC}>{item.name}</Text>
         <Text style={styles.SongN}>{item.song}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.List}>
          <FlatList
          data={Item}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListHeaderComponent={<Feed/>}
          numColumns={2}
          />
        
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.Container,animatedStyle,]}>
        <Animated.View style={[styles.HeaderS,HeaderOpacity]}>
        <AntDesign name="down" size={26} color="black" />
        <Text style={styles.HeaderST}>Daniel</Text>
        </Animated.View>
        <Animated.View style={[styles.CBImage,ImageAnimation]}>
        <Image
        source={{uri:'https://weart.co/v2/wp-content/uploads/2017/05/WE_ART_DAVID_BLACK_1705_2.jpg'}}
        style={[styles.BImage]}
        />
        </Animated.View>
        <View  style={styles.TextC}>
        <Animated.View style={TextCnimation}>
          <Animated.Text style={[styles.TextC1,Text1Animation]}>Jude Wild</Animated.Text>
          <Text style={styles.TextC2}>Daniel</Text>
        </Animated.View>
        <Animated.View style={IconAnimation}>
        <AntDesign name="hearto" style={[styles.Heart]} size={24} color="black" />
        </Animated.View>
        </View>
        <Slider
          style={styles.Slader}
          minimumValue={0}
          maximumValue={3.5}
          minimumTrackTintColor="black"
          maximumTrackTintColor="#000000"  
          thumbTintColor="black"
          initial value={1.7}    
  />
        <View style={styles.PlayList}>
        <AntDesign name="banckward" size={28} color="black" />
      {
        play?<AntDesign name="pause" onPress={playMusic} style={styles.play} size={40} color="white" />
        :<MaterialIcons name="play-arrow" onPress={PuseMusic} size={40} color="white" style={styles.play} />
      }
      <AntDesign name="forward" size={28} color="black" />
        </View>
      </Animated.View>
      </PanGestureHandler>
     <StatusBar/>
    </View>
  );
}


