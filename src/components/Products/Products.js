import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {


    const [foods , setFoods] = useState([]);
    const [text , setText] = useState('');

    const foodName = (e)=>{

        let name = e.target.value;
        setText(name);
    }
    useEffect(()=>{

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
        
    },[text]);

  
    return (
        <div className='products-container'>
            <input onChange={foodName} type="text" name="name" placeholder='Food Name'/>
            <br/>
           
            <p>Search food: {foods.length}</p>
            <div className='food'>
            {
                foods.map(food => <Product food={food} key={food.idMeal}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;

//strMeal
//strMealThumb

//strInstructions
//strArea
//idMeal
