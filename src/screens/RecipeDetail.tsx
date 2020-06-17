import React, {useState, useEffect} from 'react';
import {Recipe, RecipeAPI} from "../api/recipe";
import {Recipe as RecipeComponent} from '../components/Recipe';
import {useParams, Redirect} from 'react-router-dom';

export const RecipeDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState({
        id: 0,
        name: '',
        description: '',
        ingredients: []
    } as Recipe);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        RecipeAPI.getRecipe(id)
            .then(value => setData(value))
            .catch(() => setRedirect(true))
    });
    return (
        <div>
            {redirect ?
                <Redirect to="/recipe"/> :
                <RecipeComponent.Detail recipe={data}/>}
        </div>
    )
}