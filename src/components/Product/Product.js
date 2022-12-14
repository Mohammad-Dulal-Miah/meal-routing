import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({food}) => {

    const {idMeal , strMeal , strMealThumb,strArea} = food;
    const navigate = useNavigate();

    const createPath = ()=>{

        const path = `/food/${idMeal}`;
        navigate(path);
    }


    return (
        <div className='product-container'>
            <h4>{strMeal}</h4>
            <img src={strMealThumb} alt=""/>
            <p><small>{strArea}</small></p>
            <button onClick={createPath}>Full Information</button>
        </div>
    );
};

export default Product;