// import { StatusBar } from 'expo-status-bar'
import React, { useState } from "react"

import { StyleSheet, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { yellow100 } from 'react-native-paper/src/styles/themes/v2/colors';
// import {CountDown} from "./src/components/CountDown";
import {Timer} from "./src/features/Timer";
export default function App() {
  const [currentSubject,setCurrentSubject] = useState('test');

  return (
    <SafeAreaView style={styles.container}>
      {/* <Focus /> */}
        {
          !currentSubject ? <Focus addSubject={setCurrentSubject}/> :
              (
                  <Timer
                      task={currentSubject}
                      clearSubject={()=>setCurrentSubject(null)}
                  />
              )
        }
        {/*<CountDown/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#252250',
    // backgroundColor: yellow100
  },
  text: {
    color: Colors.white,
    // fontSize: 
  }
});
