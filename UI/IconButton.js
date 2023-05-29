import { Pressable, StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton ({ icon, size, color, title, mainstyle, onPress}) {
    return <Pressable onPress={onPress}>
        
        <View style={[styles.main, mainstyle]}>
            <Ionicons name={icon} size={size} color={color} />
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
        
        
    </Pressable>
}

export default IconButton ;

const styles = StyleSheet.create({
    
    main: {
        backgroundColor: 'white',
        width:100,
        height:60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize:16,
        color: 'red',
        
    }
})