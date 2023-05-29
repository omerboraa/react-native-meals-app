
import { StyleSheet, View, Text, } from "react-native";
function MealDetails ({duration, complexity, affordability, style, textStyle}) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItems,textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItems,textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItems,textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    
        details: {
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            padding:5,
            fontFamily:'Rowdies-Regular'
        },
        detailItems: {
            marginHorizontal:3,
            fontSize:15,
            fontFamily:'Rowdies-Light'
        },
        
  
})