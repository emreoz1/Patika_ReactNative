import {Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        flex: 1,
    },
    image: {height: Dimensions.get('window').height /4, borderTopLeftRadius: 10, borderTopRightRadius: 10,},
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        marginTop: 3,
    },
    inner_container: {
        padding: 5,
    },
    inStock:{
        fontWeight: 'bold',
        color: 'red',
        fontSize: 18,
    },
});