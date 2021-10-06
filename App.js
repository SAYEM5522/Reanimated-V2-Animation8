import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import ItemList from './Component/ItemList';
 const Item=[{
  id:'1',
  img:"https://cdn.pixabay.com/photo/2016/05/03/12/19/credit-card-1369111__340.png",
  name:"Dont Smile at Me",
  color:'rgb(0,0,0)'

},
{
  id:'2',
  img:"https://cdn.pixabay.com/photo/2016/09/19/13/54/credit-card-1680348_960_720.jpg",
  name:"Dont Smile at Me",
  color:'#B6E3DB'
},
{
  id:'3',
  img:"https://cdn.pixabay.com/photo/2020/09/21/21/30/credit-card-5591300_960_720.png",
  name:"Dont Smile at Me",
  color:'#f7e2cb'

},
]
export default function App() {

  const translationX = useSharedValue(0);
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });
  const Slide = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });
  const renderItem=({item,index})=>{
   
    return(
      <View style={styles.Container}>
         <ItemList key={index} color={item.color} index={index} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
      </View>
      <View style={styles.RoundView}/>
      <View style={styles.ItemList}>
        <AnimatedFlatlist
        data={Item}
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        />
      </View>
     <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:15,
    flex: 1,
    backgroundColor: '#fff',
  
  },
  Header:{
    height:120,
    backgroundColor:'red'
  },
  RoundView:{
    width:60,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:8
  },
  ItemList:{
    height:460,
  },
  Container:{
    padding:10,
  },


 
});
