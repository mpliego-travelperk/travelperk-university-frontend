import React from 'react';
import {Recipe} from '../components/Recipe'

export default {
    title: 'RecipeDetail',
    component: Recipe,
};

export const Empty = () => (
    <Recipe.Detail recipe={{}}/>
);

export const WithData = () => (
    <Recipe.Detail recipe={{
        name: 'Tomato Soup',
        description:'It\'s a tomato soup.'
    }}/>
);
