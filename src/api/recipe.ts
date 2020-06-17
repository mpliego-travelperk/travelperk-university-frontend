import {newAxiosInstance} from "../util/api";

export interface Recipe {
    id: string
    name: string
    description: string
    ingredients: Array<Ingredient>
}

export interface Ingredient {
    id: string
    name: string
}

const get = async (
    id: string
): Promise<Recipe> => {
    const recipe = await newAxiosInstance().request<Recipe>({
        url: `/v1/recipe/${id}/`,
    })
    return recipe.data
};

const getAll = async (): Promise<Array<Recipe>> => {
    const recipe = await newAxiosInstance().request<Array<Recipe>>({
        url: `/v1/recipe/`,
    })
    return recipe.data
};

const create = async (recipe: Recipe): Promise<Recipe> => {
    const response = await newAxiosInstance().request<Recipe>({
        method: 'POST',
        url: `/v1/recipe/`,
        data: recipe
    })
    return response.data
};

const update = async (recipe: Recipe): Promise<Recipe> => {
    const response = await newAxiosInstance().request<Recipe>({
        method: 'PUT',
        url: `/v1/recipe/${recipe.id}/`,
        data: recipe
    })
    return response.data
};

const destroy = async (id: string): Promise<Recipe> => {
    const response = await newAxiosInstance().request<Recipe>({
        method: 'DELETE',
        url: `/v1/recipe/${id}/`
    })
    return response.data
};

const addIngredient = async (recipeID: string, name: string): Promise<Recipe> => {
    const response = await newAxiosInstance().request<Recipe>({
        method: 'POST',
        url: `/v1/recipe/${recipeID}/add-ingredient/`,
        data: {
            name: name
        }
    })
    return response.data
};

const removeIngredient = async (id: string): Promise<Recipe> => {
    const response = await newAxiosInstance().request<Recipe>({
        method: 'DELETE',
        url: `/v1/ingredient/${id}/`
    })
    return response.data
};

export const RecipeAPI = {get, getAll, create, update, destroy, addIngredient, removeIngredient};