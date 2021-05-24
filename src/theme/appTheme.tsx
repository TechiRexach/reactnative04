import { StyleSheet } from "react-native";

export const colours = {
    primary: 'red'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande:{
        width:100,
        height: 100,
        backgroundColor: 'pink',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10
    },
    botonGrandeTexto: {
        fontSize: 20
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    avatar:{
        width: 150,
        height:150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        alignItems: 'flex-start'
    },
    menuButton:{
        marginVertical: 10
    },
    menuText:{
        fontSize: 20
    }
})