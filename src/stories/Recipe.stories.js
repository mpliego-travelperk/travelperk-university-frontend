import React, {useState} from 'react';
import {Recipe} from '../components/Recipe'

export default {
    title: 'Recipe',
    component: Recipe,
};

export const List = () => {
    const [action, setAction] = useState("Do an action!")
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Tomato Soup',
            description: 'It\'s a tomato soup.',
            ingredients: [{id: 1, name: 'tomato'}, {id: 2, name: 'water'}]
        },
        {
            id: 2,
            name: 'Hamburger',
            description: 'It\'s a hamburger.',
            ingredients: [{id: 1, name: 'tomato'}, {id: 2, name: 'meat'}, {id: 3, name: 'bread'}]
        }]);
    const onDelete = (id) => {
        setAction(`Delete ${id}!`)
        setData([...data].filter(value => value.id !== id))
    }
    const onEdit = (id) => {
        setAction(`Edited ${id}!`)
        setData([...data].map(value => {
            if(value.id === id){
                value.name = "Edited " + value.name
            }
            return value
        }))
    }
    return (
        <div>
            <span key="label">Action: {action}</span>
            <Recipe.List recipes={data} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    );
}

export const Edit = () => {
    const [data] = useState({
        id: 1,
        name: 'Tomato Soup',
        description: 'It\'s a tomato soup.',
        ingredients: [{id: 1, name: 'tomato'}, {id: 2, name: 'water'}]
    });
    const onSubmit = recipe => {
        console.log(recipe)
    }
    return (
        <Recipe.Detail recipe={data} onSubmit={onSubmit}/>
    );
}

export const New = () => {
    const [data] = useState();
    const onSubmit = recipe => {
        console.log(recipe)
    }
    return (
        <Recipe.Detail recipe={data} onSubmit={onSubmit}/>
    );
}
