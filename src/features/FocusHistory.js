import React from "react";
import {StyleSheet, Text, View, FlatList } from "react-native";
import {fontSize, spacing} from "../utils/size";
import {Colors} from "../utils/colors";

export const FocusHistory = ({history}) => {
    if(!history || !history.length ) return  null;
    const renderItem = ({item}) => <Text style={styles.item}>{item}</Text>
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            padding: spacing.md,
            flex:1,
        },
        item: {
            fontSize: fontSize.md,
            color: Colors.white,
            paddingTop: spacing.sm
        },
        title: {
            color: Colors.white,
            fontSize: fontSize.md,
            fontWeight: 'bold',
        },
    }
)