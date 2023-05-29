import { StyleSheet, View, Text, Pressable, Image, Dimensions  } from "react-native";
import { useNavigation } from "@react-navigation/native";
function mealItem({ id,title, imageUrl, duration, complexity, affordability }) {
    const navigation= useNavigation();
    function SelectMealItem() {
       navigation.navigate('MealDetail', {
         mealId: id,
    })

    }
    
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}onPress={SelectMealItem}>
                <View>
                    <Image source={{uri: imageUrl}}style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
               
            
            </Pressable>
           
        </View>
    );
}

export default mealItem;

const screenWidht = Dimensions.get('window').width;
const screenfont = Dimensions.get('window').fontScale;

const styles = StyleSheet.create({
    mealItem: {
        margin: screenWidht < 380 ? 20 : 30,
        borderRadius:screenWidht < 380 ? 20 : 30,
        overflow:'hidden',
        backgroundColor: 'white',
        elevation:screenWidht < 380 ? 5 : 10,
    },
    image: {
        width:'100%',
        height: screenWidht < 380 ? 250 : 350,
    },
    title: {
        fontFamily:'Kanit-Bold',
        textAlign:'center',
        fontSize: screenfont <380 ? 35 : 40,
        margin :screenfont <250 ? 20 : 20
    },
    
    

})