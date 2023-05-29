import { StyleSheet, View, Text } from "react-native";
function Subtitle({children}) {
    return (
        <View style={styles.subtitleContaeiner}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContaeiner: {
        margin:0,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        padding:6,
        marginHorizontal:0,
        marginVertical:4,
    },
    subTitle: {
        color:'#e2b497',
        fontSize:18,
        fontFamily:'Rowdies-Regular',
        textAlign:'center',
        justifyContent:'center',
    },
})
