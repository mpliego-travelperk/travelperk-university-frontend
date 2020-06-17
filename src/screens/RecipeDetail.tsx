import React, {useState, useEffect} from 'react';
import {Recipe, RecipeAPI} from "../api/recipe";
import {Recipe as RecipeComponent} from '../components/Recipe';
import {useParams, Redirect} from 'react-router-dom';

export const RecipeDetail = () => {
    const {id} = useParams();
    const [recipeID, setRecipeID] = useState(id as string);
    const [data, setData] = useState();
    const [redirect, setRedirect] = useState(false);
    const onSubmit = (recipe: Recipe, isUpdate: boolean) => {
        if (isUpdate) {
            RecipeAPI.update(recipe).then(value => setRecipeID(value.id))
        } else {
            RecipeAPI.create(recipe).then(value => setRecipeID(value.id))
        }
    }
    const onCreateTag = (name: string) => {
        RecipeAPI.addIngredient(recipeID, name).then(() =>
            RecipeAPI.get(recipeID).then(value =>
                setData(value)))
    }
    const onDeleteTag = (id: string) => {
        RecipeAPI.removeIngredient(id).then(() =>
            RecipeAPI.get(recipeID).then(value =>
                setData(value)))
    }
    useEffect(() => {
        if (recipeID) {
            RecipeAPI.get(recipeID)
                .then(value => setData(value))
                .catch(() => setRedirect(true))
        }
    }, [recipeID]);
    return (
        <div>
            {redirect && <Redirect to="/recipe"/>}
            {(data || !recipeID) &&
            <RecipeComponent.Detail recipe={data}
                                    onSubmit={onSubmit}
                                    onCreateTag={onCreateTag}
                                    onDeleteTag={onDeleteTag}/>}
        </div>
    )
}