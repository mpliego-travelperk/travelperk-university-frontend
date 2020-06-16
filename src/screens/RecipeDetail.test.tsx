import React from 'react'
import {render, waitForElement, screen} from '@testing-library/react'
import {Recipe, RecipeAPI} from "../api/recipe";
import {RecipeDetail} from "./RecipeDetail";
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom';

beforeEach(() => jest.clearAllMocks())

describe('RecipeDetail', () => {
    it('should return information', async () => {
        jest.spyOn(RecipeAPI, 'getRecipe')
            .mockImplementation(() => Promise.resolve({
                id: 1,
                name: 'Tomato',
                description: 'Tomato Description'
            } as Recipe))
        const history = createMemoryHistory()
        const route = '/recipe/1'
        history.push(route)
        render(
            <Router history={history}>
                <RecipeDetail/>
            </Router>
        )
        expect(await waitForElement(() => screen.queryByText('1'))).toBeInTheDocument()
        expect(await waitForElement(() => screen.queryByText('Tomato'))).toBeInTheDocument()
        expect(await waitForElement(() => screen.queryByText('Tomato Description'))).toBeInTheDocument()
    })
});