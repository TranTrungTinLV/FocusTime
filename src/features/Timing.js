import React from "react";
import {StyleSheet, View} from "react-native";
import {RoundedButton} from "../components/ButtonRounded";
import {Colors} from "../utils/colors";


export  const Timing = ({onchangeTime}) => {
    return (
       <>
           <View style={styles.timingButton}>
               <RoundedButton size={75} title = "5" onPress={()=> onchangeTime(5)}/>
           </View>
               <View style={styles.timingButton}>
               <RoundedButton size={75} title = "10" onPress={()=> onchangeTime(10)}/>
               </View>
                   <View style={styles.timingButton}>
               <RoundedButton size={75} title = "15" onPress={()=> onchangeTime(15)}/>
           </View>
       </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: "center",

        justifyContent: 'center',


        // backgroundColor: 'yellow'
    }
})