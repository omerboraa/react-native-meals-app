
import MealDetailUI from '../components/mealDetail/MealDetailUI';


function MealDetailScreen({route,}) {
const  mealId = route.params.mealId;


    return (
        <MealDetailUI mealId={mealId}/>
       
    );
}

export default MealDetailScreen;

