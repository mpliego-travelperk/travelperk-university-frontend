import React, {useState} from 'react';
import {Recipe} from '../components/Recipe'

export default {
    title: 'RecipeDetail',
    component: Recipe,
};

export const WithData = () => {
    const [data, setData] = useState({
        id: 1,
        name: 'Tomato Soup',
        description: 'It\'s a tomato soup.',
        ingredients: [{id:1,name:'tomato'}, {id:1,name:'water'}]
    });
    return (
        <Recipe.Detail recipe={data}/>
    );
}
