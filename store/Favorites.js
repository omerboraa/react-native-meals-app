import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";



 export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (id) => {} ,
    unFavorite: (id) => {},
    
});

 function FavoritesContextProvider ({ children }) {

useEffect(() => {
    function FetchFirstData() {
        const firstData = AsyncStorage.getItem("favorites")
        .then(req => {
            let json =  JSON.parse(req);
    
     if (!json) {
       json = [];
     }
     
     const FavoritesMealsIds=[...json];
     setData(FavoritesMealsIds);
        });
    }
    FetchFirstData();
}, []);
   
    

    const [data, setData] = useState([]);

    async function addFavorite(id) {
        
       setData([...data, id]);
       const favorites = [...data, id];
            await  AsyncStorage.setItem("favorites", JSON.stringify(favorites));
        
    }
   async function unFavorite(id) {
        const favorites = data.filter((item) => item !== id);
        setData(favorites);
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    }
    
    
    const value= {
        favorites: data,
        addFavorite: addFavorite,
        unFavorite: unFavorite,
    }


    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider ;