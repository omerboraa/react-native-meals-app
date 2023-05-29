import HeaderComponent from "../HeaderComponent";
import {MEALS} from '../../data/dummy-data';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ScrollableImage from "../ScrollableImage";
import Subtitle from "./Subtitle";
import List from '../../components/mealDetail/List';
import { Ionicons } from '@expo/vector-icons'; 
import PopUpButton from "./PopUp-spe";
import { IconButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { FavoritesContext } from "../../store/Favorites";
import { useState } from "react";
import { useEffect } from "react";





function MealDetailUI ({ mealId }) {
    
    const SelectMeal = MEALS.find((meal) =>meal.id ===mealId)
   
    const favCtx= useContext(FavoritesContext);

    const favoritesMealList = favCtx.favorites;
    const mealIsFavorite = favoritesMealList.includes(mealId);
    

      function ChangeFavoriteStatusHandler () {
        
        if(mealIsFavorite) {
          favCtx.unFavorite(mealId);
           
        }
        else {
         favCtx.addFavorite(mealId);
           
        }
    }

   
    


    return (
        <>
        <ScrollView>
            <HeaderComponent mainStyle={styles.main} buttonStyle={styles.button} />
            <Text style={styles.title}>{SelectMeal.title}</Text>
            <IconButton icon={ mealIsFavorite ? 'star' : 'star-outline'} style={styles.star} size={40} onPress={ChangeFavoriteStatusHandler} color={"yellow"}/>
            <ScrollableImage />
            <View style={styles.row}>
            <Text style={styles.duration}>Tahmini Süre : {SelectMeal.duration}DK</Text>
            <Text style={styles.duration}>Yapımı : {SelectMeal.complexity}</Text>
            </View>
            <Subtitle></Subtitle>
            <View style={styles.roww}>
            <PopUpButton SelectMeal={SelectMeal} selected={SelectMeal.ingredients} title="Malzemeler" buttonTitle="Malzemeler" icon="basket-outline"/>
            <PopUpButton icon="bonfire" title="Püf Noktaları" buttonTitle= "Püf noktalar" selected={SelectMeal.tricks}/>
            
            </View>
           
            <View style = {styles.scrollInfo}>
               <Text style={styles.recipeInfoText}>Tarifi görmek için aşağıya kaydır</Text>
               <Ionicons name= "arrow-down-circle-sharp" size={25}/>
            </View>
            <View styles={styles.recipe}>
               
            <List data={SelectMeal.steps}/>
            </View>

            
            </ScrollView>
            
        </>
    );
}

export default MealDetailUI ;

const styles = StyleSheet.create({
    main: {
        height:75,
        borderRadius:2,
    },
    button:{
        padding:2,
        margin:0,
    },
    image: {
        width:'100%',
        height: 350
    },
    title: {
        margin:5,
        color: 'white',fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Rowdies-Regular'
    },
    duration: {
        margin:10,
        backgroundColor: 'black',
        color: 'white',
        fontSize:18,
        width: 180,
        height: 30,
        fontFamily :'Rowdies-Light',
        borderRadius: 8,
        textAlign: 'center'

    },
    row: {
        flexDirection: 'row',
        alignItems :'center',
        justifyContent: 'center'
    },
    ingredients: {
        backgroundColor : 'white',
        
    },
    icon: {
        backgroundColor: 'white',
        color: 'black',
        padding:10,
    },
   
    scrollInfo: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor: '#C9EEFF',
        height: 130,
    },
    recipeInfoText: {
        fontSize:25,
        fontFamily: 'Rowdies-Light'
    },
    recipe: {
        backgroundColor: '#C9EEFF',
    },
    iconMain: {
        width:150,
        marginHorizontal:25,
    },
    star: {
        alignSelf: 'flex-end',
        color: 'yellow',
        backgroundColor: 'yellow'
    },
    roww: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems :'center',
        justifyContent: 'center',
        
    },
})