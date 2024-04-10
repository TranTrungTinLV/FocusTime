import React, {useState} from 'react';
import {StyleSheet, Text, View, Vibration} from "react-native";
import {Colors} from "../utils/colors";
import {ProgressBar,MD3Colors} from 'react-native-paper'
import {CountDown} from "../components/CountDown";
import  {RoundedButton} from "../components/ButtonRounded";
import {spacing} from "../utils/size";
import {Timing} from "./Timing";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
];


export const  Timer = ({task,clearSubject}) => {
    const [isStarted,setStarted] = useState(false);
    const [progress,setPropress] = useState(1);
    const  [minutes,setMinutes] = useState(0.1);
    const onEnd = (reset)=>{
        Vibration.vibrate(PATTERN);
        setStarted(false);
        setPropress(1);
        // setMinutes(0.1)
        reset()
    }
   return(
       <View style={styles.container}>
           {/*<Text style={styles.text}>*/}
           {/*    Focus Timer {FocusObject}*/}
           {/*</Text>*/}

           <View style={styles.countdown}>
               <CountDown minutes={minutes} isPaused={!isStarted}  onProgress={(progress)=>setPropress(progress)} onEnd={onEnd} />
               <View style={{paddingTop: spacing.xxl}}>
                   <Text style={styles.title}>Focus on:</Text>
                   <Text style={styles.text}>{task}</Text>
               </View>
           </View>

            <View style={{paddingTop: spacing.sm}}>
                <ProgressBar
                    color={Colors.progressBar}
                    progress={progress}
                    style={{height: 10}}
                />
            </View>

           <View style={styles.timingWrapper}>
               <Timing onchangeTime={setMinutes}/>
           </View>
           <View style={styles.buttonWrapper}>
               {!isStarted &&
                   <RoundedButton title="start" onPress={()=> {setStarted(true)}}/>
               }
               {isStarted &&
                   <RoundedButton title="pause" onPress={()=> {setStarted(false)}}/>
               }
               {/*<RoundedButton title="-"/>*/}
           </View>
           <View style={styles.clearSubjectWrapper}>
               <RoundedButton size={50} title="-" onPress={clearSubject}/>
               <RoundedButton size={50} title="+"/>
           </View>

       </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:20,
        // backgroundColor: 'green'
    },
    countdown: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    buttonWrapper: {
        // backgroundColor: '#4b0082',
        padding: 15,
        flexDirection: 'row',
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center'
    },
    clearSubjectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    timingWrapper: {
        flex: 0.1,
        flexDirection: 'row',
        paddingTop: spacing.xxl,
    },
    title: {
        color: Colors.white,
        fontWeight: 'bold',

        textAlign: 'center'
    },
    text: {
        marginTop:3,
        color: Colors.white,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    }
})