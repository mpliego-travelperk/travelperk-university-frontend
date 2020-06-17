import React, {useState, useEffect} from 'react';
import {Recipe, RecipeAPI} from "../api/recipe";
import {Recipe as RecipeComponent} from '../components/Recipe';
import {Redirect} from "react-router-dom";

export const RecipeList = () => {
    const [data, setData] = useState([] as Array<Recipe>);
    const [redirect, setRedirect] = useState();
    const onDelete = (id: string) => {
        RecipeAPI.destroy(id).then(() =>
            RecipeAPI.getAll().then(value => setData(value)))
    }
    const onEdit = (id: string) => {
        setRedirect(`/recipe/${id}`)
    }
    useEffect(() => {
        RecipeAPI.getAll()
            .then(value => setData(value))
    }, []);
    return (
        <div>
            {redirect && <Redirect key="redirect" to={redirect}/>}
            <RecipeComponent.List key="recipe" recipes={data} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    )
}