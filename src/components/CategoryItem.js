import './CategoryItem.css';
import { Link } from 'react-router-dom';

function CategoryItem(props)
{
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;
    return(
        <div className='card'>
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>{strCategory}</h2>
            <p>{strCategory}</p>
            <p>{strCategoryDescription}</p>
            <div className='card-action'>
                <Link to='/Meals'>{strCategory}</Link>
                <a href={strCategory}>Watch category</a>
            </div>
        </div>
    )
}
export default CategoryItem;