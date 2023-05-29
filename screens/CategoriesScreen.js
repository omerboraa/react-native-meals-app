import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, FlatList,ImageBackground } from "react-native";
import CategoryGridTile from '../components/CategoryGridTile';



function CategoriesScreen ({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverwiev", {
                categoryId: itemData.item.id,
            });
        }
    
        return (
         <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={pressHandler}
        />
            
        
        ); 
    }
    return (
    <ImageBackground style={styles.main} source= {require('../assets/kızkulesi.jpg')}>
    <FlatList 
    data={CATEGORIES} keyExtractor={(item) => item.id}renderItem=
    {renderCategoryItem}numColumns={2} />
    </ImageBackground>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%', // applied to Image
       height: '100%'
    }

});