
import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





function App(): React.JSX.Element {

  const [randomBg, setRandomBg]= useState('#ffffff')

  const generateColor = () => {
    const hexRange = "0123456ABCDEF"

    let color = "#"

    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      }
      setRandomBg(color)
      console.warn(color)
  }

 return (
 <>
 <StatusBar backgroundColor={randomBg}></StatusBar>
 <View style={[styles.sectionContainer, {backgroundColor:randomBg}]}>
 <Pressable onPress={generateColor}>
 <Text style={styles.sectionTitle}> Press me</Text>
 </Pressable>
 </View>
 </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    flex:1,
    paddingHorizontal: 24,
    justifyContent:'center',
    alignItems:'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color:'white',
    borderRadius:12,
    backgroundColor:'red',
    paddingVertical:10,
    paddingHorizontal:40,
    textTransform:'uppercase'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
