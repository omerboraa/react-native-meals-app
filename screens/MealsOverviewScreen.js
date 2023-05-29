
import { useLayoutEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import MealList from "../components/MealList/MealList";
import { MEALS, CATEGORIES } from "../data/dummy-data";
function MealOverviewScreen({ route, navigation }) {


    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId)  >= 0;
    })

    useLayoutEffect(()=> {
        const categoryTitle = CATEGORIES.find((category) => category.id===catId).title;
        navigation.setOptions({
            title:categoryTitle
        });
    },[catId, navigation])

    return ( 
        <>
        <HeaderComponent  title="Şehrin Ünlü Yemekleri"/>
        <MealList items={displayedMeals} />
        </>
       
        );

    

    
}

export default MealOverviewScreen;

