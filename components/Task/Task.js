import React from "react";
import { View,Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from './Task.style'

const Task = (props) => {

    return(

        <View style = {styles.item}>
            <View style = {styles.item_left}>
                <TouchableOpacity style = {styles.square}></TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circular}>
                
            </View>
            
        </View>


    )

}

export default Task;