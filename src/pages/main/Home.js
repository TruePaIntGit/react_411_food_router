import './Home.css';
import { useState, useEffect, use } from 'react';
import { getAllCategories } from '../../api';
import Preloader from '../../components/Preloader/Preloader';
import CategoryList from '../../components/categoryList/CategoryList';

function Home()
{
    const [loading, setLoading] = useState(true);
    const [catalog, setCatalog] = useState([]);
    useEffect
    (
        () => 
        {
            setLoading(true);
            getAllCategories().then((data) => {setCatalog(data.categories);})
            .finally(()=> {
                setLoading(false);
            });
        },
        []
    );
    if (loading){
        return(<Preloader fullScreen={true} text='Loading categories...'></Preloader>)
    }
    return(
        <div className='wrap'>
            <CategoryList catalog={catalog} />
        </div>
    )
}
export default Home;