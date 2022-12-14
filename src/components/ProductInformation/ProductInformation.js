import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Product/Product.css';

const ProductInformation = () => {

    const {idMeal} = useParams();
    const [food , setFood] = useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => {
            setFood(data.meals[0])
            console.log(data.meals[0])
        })
    },[idMeal]);

  

    return (
        <div className='product-container'>
            <h4>{food.strMeal}</h4>
            <img src={food.strMealThumb} alt=""/>
            <p><small>{food.strArea}</small></p>
            <small>{food.strInstructions}</small>
        </div>
    );
};

export default ProductInformation;