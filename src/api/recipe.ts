import {newAxiosInstance} from "../util/api";

export interface Recipe {
    id: number
    name: string
    description: string
    ingredients: Array<Ingredient>
}

export interface Ingredient {
    id: number
    name: string
}

const getRecipe = async (
    id: number
): Promise<Recipe> => {
    const recipe = await newAxiosInstance().request<Recipe>({
        url: `/v1/recipe/${id}/`,
    })
    return recipe.data
};

const getRecipeList = async (): Promise<Array<Recipe>> => {
    const recipe = await newAxiosInstance().request<Array<Recipe>>({
        url: `/v1/recipe/`,
    })
    return recipe.data
};

export const RecipeAPI = {getRecipe, getRecipeList};