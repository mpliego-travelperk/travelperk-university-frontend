import React, {useState, useEffect} from 'react';
import {Recipe, RecipeAPI} from "../api/recipe";
import {Recipe as RecipeComponent} from '../components/Recipe';

export const RecipeList = () => {
    const [data, setData] = useState([] as Array<Recipe>);
    const onDelete = (id: string) => {
        RecipeAPI.getAll()
            .then(value => setData(value))
    }
    useEffect(() => {
        RecipeAPI.getAll()
            .then(value => setData(value))
    }, []);
    return (
        <RecipeComponent.List recipes={data} onDelete={onDelete}/>
    )
}