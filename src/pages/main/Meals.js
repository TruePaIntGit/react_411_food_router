import './Meals.css';
import {useState, useEffect} from 'react';
import { getFilteredCategory } from '../../api';
import MealList from '../../components/MealList';

function Meals(selectedCategory){
    const [catalog, setCatalog] = useState([]);
    useEffect
    (
        () =>
        {
            getFilteredCategory(selectedCategory).then((data)=>{setCatalog(data.meals);});
        },
        []
    );
    return(
        <div className='wrap'>
            <MealList catalog={catalog} />
        </div>
    )
}
export default Meals;