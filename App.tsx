
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
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

  const [firstBg, setFirstBg]= useState('#ffffff')
  const [secondBg, setSecondBg]= useState('#ffffff')
  const [thirdBg, setThirdBg]= useState('#ffffff')


  const generateColor = () => {
    const hexRange = "0123456abcdef"

    let color = "#"

    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      }
      setFirstBg(color)
      setSecondBg(color)
      setThirdBg(color)

  }

 return (
 <>
 <StatusBar backgroundColor={firstBg}></StatusBar>
 
 <LinearGradient colors={[firstBg, secondBg, thirdBg]} style={styles.linearGradient}>
 <View style={[styles.sectionContainer, {backgroundColor:firstBg}]}>
 <Pressable onPress={generateColor}>
 <Text style={styles.sectionTitle}> Press me</Text>
 </Pressable>
 </View>
</LinearGradient>
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
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
