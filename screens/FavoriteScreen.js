import { StyleSheet, View, Text} from "react-native";
import {MEALS} from '../data/dummy-data';
import MealList from "../components/MealList/MealList";
import { useContext, useState } from "react";
import { FavoritesContext } from "../store/Favorites";
function FavoriteScreen() {
    

    const favCtx = useContext(FavoritesContext);
    const FavoriteMealsIds = favCtx.favorites;
    const favoriteMeals = MEALS.filter(meal => 
    FavoriteMealsIds.includes(meal.id));

        
    

    if( favoriteMeals.length ===0 ) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>Beğendiğin yemekleri favorin 
            olarak buraya eklemek çok kolaydır
            Tek yapman gereken yıldıza dokunmak 
            sonra tekrar buraya geldiğin zaman 
            favori olarak eklendiğini göreceksin 
            Kaldırmak için ise tekrar aynı yıldıza dokun (:</Text>
            <Text style={styles.support}>Destek verdiğin için teşekkür ederim</Text>
        </View>
    }
    
    return <MealList items={favoriteMeals}/>
}

export default FavoriteScreen;

const styles= StyleSheet.create({
    rootContainer: {
        flex:1,
        backgroundColor: '#AA77FF',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:40,
        fontWeight: 'Rowdies-Light',
        color: 'white',
    },
    support: {
        fontSize:20,
        marginTop:20,
    }

})