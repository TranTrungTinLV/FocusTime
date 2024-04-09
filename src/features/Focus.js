import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../utils/colors"
import { TextInput } from 'react-native-paper';
import { RoundedButton } from "../components/ButtonRounded";
import { size } from "../utils/size";

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);
    console.log(subject)
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>
                sdasdasd
            </Text> */}
            <View style={styles.inputContainer}>
                <TextInput label="Focus on?" onChangeText={setSubject} style={styles.textInput} />
                <View>
                    <RoundedButton title="+" size={50} style={styles.button} onPress= {()=> addSubject(subject)} />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // gap: 1
    },
    button: {
        justifyContent: 'center'
    },
    textInput: {
        flex: 0.8,
        marginRight: size.md
    },
    inputContainer: {
        // flex: 1/4,
        padding: size.xxxl,
        justifyContent: 'top',
        backgroundColor: Colors.blue,
        flexDirection: 'row'
    },
    text: {
        // fontSize: 20,
        color: Colors.white
    },

})