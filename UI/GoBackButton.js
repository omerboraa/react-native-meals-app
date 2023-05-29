import { Pressable, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

function GoBackButton({style}) {

    const navigation = useNavigation();


    function GoBack() {
    navigation.goBack();
    }

    return (
    <Pressable style={(pressed) => pressed && styles.pressed} onPress={GoBack}>
    <View style={styles.main}>
        <Ionicons name="ios-arrow-back" style={[ styles.icon, style]}/>
    </View>
    </Pressable>
    );
}

export default GoBackButton ;
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        padding:5,
        borderRadius:8,
    },
    pressed: {
       
    },
    icon: {
        color: 'white',
        fontSize:25
    }
})