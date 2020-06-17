import React from 'react'
import {render, waitForElement, screen} from '@testing-library/react'
import {Recipe, RecipeAPI} from "../api/recipe";
import {RecipeDetail} from "./RecipeDetail";
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom';
import {RecipeList} from "./RecipeList";

beforeEach(() => jest.clearAllMocks())

describe('RecipeDetail', () => {
    it('should return information', async () => {
        jest.spyOn(RecipeAPI, 'getRecipeList')
            .mockImplementation(() => Promise.resolve([{
                id: 1,
                name: 'Tomato',
                description: 'Tomato Description',
                ingredients: []
            }, {
                id: 2,
                name: 'Banana',
                description: 'A Simple Banana',
                ingredients: []
            }] as Array<Recipe>))
        render(
            <RecipeList/>
        )
        expect(await waitForElement(() => screen.queryByText('1'))).toBeInTheDocument()
        expect(await waitForElement(() => screen.queryByText('2'))).toBeInTheDocument()
    })
});