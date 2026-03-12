import { useNavigate, useParams } from 'react-router-dom';
import './Category.css';
import { useEffect, useState } from 'react';
import { getFilteredCategory } from '../api';
import MealList from './MealList';
import Preloader from './Preloader/Preloader';

function Category()
{
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let goBack = () => navigate(-1);
    useEffect
    (
        () => 
        {
            setLoading(true);
            getFilteredCategory(name).then(data => setMeals(data.meals))
            .finally(() => {
                setLoading(false); // 👈 выключаем прелоадер
            });
        },[name]
    );
    if (loading) {
        return <Preloader fullScreen={true} text="Loading meals..." />;
    }
    return (
        <div className='wrap'>
            <MealList meals={meals} />
            <button className='btn' onClick={goBack}>Go back</button>
        </div>
    )
}
export default Category;