import { StyleSheet, View, FlatList,  } from "react-native";
import MealItem from "../MealList/MealItem";

function MealList({items}) {
    function renderMealItem(itemData, navigation) {


        const item = itemData.item;
        const mealItemsProps ={
            id:item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,

        }
        return <MealItem {...mealItemsProps} />
    }

    return (

          <View style={styles.container}>
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} style={styles.flatlist}/>
          </View>
         
       
    );
}

export default MealList;

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
    },
    flatlist: {
        
        
    }
})