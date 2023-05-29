import { Pressable, View, Text, StyleSheet, Platform,Dimensions,ImageBackground } from "react-native";



function CategoryGridTile({title, color, onPress}) {

    const url = { uri: color };

    return (
        
    <View style={[styles.gridItem, {backgroundColor:color}]}>
        <ImageBackground style={styles.image} source={url}>
        <Pressable android_ripple={{color: '#ccc', borderless: true}} style={styles.button} onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
        </ImageBackground>
    </View> 
    
    )

}

export default CategoryGridTile;

const deviceWidht = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const devicefontsize = Dimensions.get('window').fontScale;

const styles= StyleSheet.create({
    image:{
        flex:1
    },
     gridItem: {
        flex:1,
        marginTop: deviceWidht <380 ? 20 : 30,
        margin: deviceWidht <380 ? 20 : 20 ,
        height: deviceHeight < 250 ? 100 : 180,
        borderRadius: deviceWidht <380 ? 15 : 20,
        overflow:Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: deviceWidht <450 ? 3 : 6,
        
     },
     button: {
        flex:1,
        
     },
    innerContainer: {
        flex:1,
        padding: deviceWidht <450 ? 8: 8  && deviceWidht <450 ? 10 : 20,
        justifyContent:"center",
        alignItems:"center",
    },
    title: {
      fontFamily:'Rowdies-Bold',
      fontSize: devicefontsize <450 ? 30 : 30,
    },

})