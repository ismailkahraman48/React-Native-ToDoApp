import { StyleSheet } from "react-native";

export default StyleSheet.create({
    item: {
        backgroundColor : 'white',
        padding : 15,
        borderRadius : 13,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20,
    },

    item_left: {
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : "wrap"
    },

    square: {
        height : 24,
        width : 24,
        backgroundColor : '#55BCF6',
        borderRadius : 10,
        opacity : 0.5,
        marginRight : 15

    },
    itemText: {
        fontSize : 20,
        fontFamily : 'AppleSDGothicNeo-SemiBold',
        color : 'green'
    },

    circular: {
        width : 12,
        height : 12,
        borderWidth : 2,
        borderRadius : 5,
        borderColor : '#55BCF6'
    },

})