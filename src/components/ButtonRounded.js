
import { Text, TouchableOpacity } from "react-native"
import { Colors } from "../utils/colors"
import React from "react"



export const RoundedButton = (
    {
        style = {},
        textStyle = {},
        size = 125,
        ...props
    }
) => {
    return (
        <TouchableOpacity style={[styles(size).radius,style]} onPress={props.onPress}>
            <Text style={[styles(size).text,textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = (size) => ({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.white,
        borderWidth: 2
    },
    text: {
        color: Colors.white,
        fontSize: size / 3
    }
})