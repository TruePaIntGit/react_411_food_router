import './MealItem.css';

function MealItem(props){
    const {strMeal, strMealThumb} = props;
    return(
        <div className='card'>
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>
        </div>
    )
}
export default MealItem;