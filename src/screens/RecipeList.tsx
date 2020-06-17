import React, {useState, useEffect} from 'react';
import {Recipe, RecipeAPI} from "../api/recipe";
import {Recipe as RecipeComponent} from '../components/Recipe';

export const RecipeList = () => {
    const [data, setData] = useState([] as Array<Recipe>);

    useEffect(() => {
        RecipeAPI.getRecipeList()
            .then(value => setData(value))
    },[]);
    return (
        <RecipeComponent.List recipes={data}/>
    )
}