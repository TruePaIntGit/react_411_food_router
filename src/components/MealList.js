import './MealList.css';
import MealItem from './MealItem';

function MealList({catalog = []}){
    return(
        <div className='list'>
            {
                catalog.map
                (
                    el => (<MealItem key={el.idMeal} {...el} />)
                )
            }

        </div>
    )
}
export default MealList;
