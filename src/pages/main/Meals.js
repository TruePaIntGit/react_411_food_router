import './Meals.css';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getFilteredCategory } from '../../api';
import MealList from '../../components/MealList';

function Meals(){
    const { category } = useParams();
    console.log(category);
    const [catalog, setCatalog] = useState([]);
    useEffect
    (
        () =>
        {
            getFilteredCategory(category).then((data)=>{setCatalog(data.meals);});
        },
        [category]
    );
    return(
        <div className='wrap'>
            <MealList catalog={catalog} />
        </div>
    )
}
export default Meals;