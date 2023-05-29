
import  CategoriesScreen from './screens/CategoriesScreen.js';
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import MealsOverviewScreen from './screens/MealsOverviewScreen.js';
import MealDetailScreen from './screens/MealDetailScreen.js';
import FavoriteScreen from './screens/FavoriteScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import  FavoritesContextProvider, { FavoritesContext }  from './store/Favorites';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Tab.Navigator 
    activeColor='black'
    screenOptions={{
      
      headerShown: false,
          tabBarStyle: { backgroundColor: "#010e1b" ,borderTopWidth:0,
          position: 'absolute',
          left: 40,
          right: 30,
          bottom: 20,
          height: 100,
          borderRadius:20, }, 
    }}
    >
      <Tab.Screen name="Şehirler" component={CategoriesScreen} options={{
        tabBarIcon: ({color,}) => (
          <Ionicons  name='home'color={color}size={26}/>
        ),
      }}
      
      />
      <Tab.Screen name="Favoriler" component={FavoriteScreen}options={{
        tabBarIcon: ({color}) => (
          <Ionicons  name='star'color={color}size={26}/>
        ), 
      }}
      
      />
    </Tab.Navigator>
  );

  
}



function StackNavigator() {
  
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor:'white',
      contentStyle:{backgroundColor: '#3f2f25'}
    }}>
      <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
        headerShown:false,
        
      }}/>

      <Stack.Screen name='MealsOverwiev'component={MealsOverviewScreen} options={{
        headerShown: false
      }}/>

       <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
        headerShown: false
       }}/>
</Stack.Navigator>
  );
}
 


export default function App() {

  const [fontsLoaded] = useFonts({
    'Kanit-Bold': require('./fonts/Kanit-Bold.ttf'),
    'Rowdies-Bold': require('./fonts/Rowdies-Bold.ttf'),
    'Rowdies-Light': require('./fonts/Rowdies-Light.ttf'),
    'Rowdies-Regular': require('./fonts/Rowdies-Regular.ttf'),
   })
   


      
   

   if(!fontsLoaded) 
   {return <AppLoading />}
    
    return (
    <FavoritesContextProvider>
      
   <StatusBar style="dark" />
   <NavigationContainer >
    <StackNavigator />
   </NavigationContainer>
   
   </FavoritesContextProvider>
  
    );
   
}


