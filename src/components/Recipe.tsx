import React, {FormEvent} from 'react';
import {Detail as DetailComponent} from './Detail';
import {Recipe as RecipeAPI} from "../api/recipe";
import {Tag} from './Tag';
import {Table} from './Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import useFormInput from "../hooks/useFormInput";


const Detail = (props: { recipe?: RecipeAPI; onSubmit: Function }) => {
    const [name, handleNameChange] = useFormInput((props.recipe) ? props.recipe.name : '');
    const [description, handleDescriptionChange] = useFormInput((props.recipe) ? props.recipe.description : '');

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        let newRecipe = (props.recipe) ? props.recipe : {} as RecipeAPI
        let isUpdate = (props.recipe !== undefined)
        newRecipe.name = name
        newRecipe.description = description
        console.log(newRecipe)
        props.onSubmit(newRecipe, isUpdate);
    }

    return (
        <DetailComponent.Container>
            <form onSubmit={handleFormSubmit}>
                <DetailComponent.Row>
                    <DetailComponent.Name>ID:</DetailComponent.Name>
                    <DetailComponent.Value>{(props.recipe) ? props.recipe.id : "New ID"}</DetailComponent.Value>
                </DetailComponent.Row>
                <DetailComponent.Row>
                    <DetailComponent.Name>Name:</DetailComponent.Name>
                    <DetailComponent.Value>
                        <input type="text" name="name" value={name} onChange={handleNameChange}
                               placeholder='Name'/>
                    </DetailComponent.Value>
                </DetailComponent.Row>
                <DetailComponent.Row>
                    <DetailComponent.Name>Description:</DetailComponent.Name>
                    <DetailComponent.Value>
                        <input type="text" name="description" value={description} onChange={handleDescriptionChange}
                               placeholder='Name'/>
                    </DetailComponent.Value>
                </DetailComponent.Row>
                {props.recipe &&
                <DetailComponent.Row>
                    {props.recipe.ingredients.map((value) => {
                        return (
                            <div style={{paddingRight: '5px', paddingBottom: '5px'}}>
                                <Tag.Display name={value.name}/>
                            </div>
                        )
                    })}
                    <Tag.Add placeholder="New Tag"/>
                </DetailComponent.Row>
                }
                <button type="submit" value="Submit">{(props.recipe) ? 'Update' : 'Create'}</button>
            </form>
        </DetailComponent.Container>
    )
}

const List = (props: { recipes: Array<RecipeAPI>; onDelete?: Function; onEdit?: Function }) => {
    return (
        <Table.Container>
            <Table.Header key="header">
                <Table.Cell key="id">ID</Table.Cell>
                <Table.Cell key="name">Name</Table.Cell>
                <Table.Cell key="description">Description</Table.Cell>
                <Table.Cell key="ingredients">Ingredients</Table.Cell>
                <Table.Cell key="actions">Actions</Table.Cell>
            </Table.Header>
            {props.recipes.map((value: RecipeAPI) => {
                return (
                    <Table.Row key={value.id}>
                        <Table.Cell key="id">{value.id}</Table.Cell>
                        <Table.Cell key="name">{value.name}</Table.Cell>
                        <Table.Cell key="description">{value.description}</Table.Cell>
                        <Table.Cell key="ingredients">
                            {value.ingredients.map((value) => {
                                return (
                                    <div style={{paddingRight: '5px'}} key={value.id}>
                                        <Tag.Display name={value.name}/>
                                    </div>
                                )
                            })}
                        </Table.Cell>
                        <Table.Cell key="actions">
                            <FontAwesomeIcon icon={faTrash} size="xs" key="delete"
                                             onClick={() => props.onDelete && props.onDelete(value.id)}/>
                            <FontAwesomeIcon icon={faEdit} size="xs" key="edit" style={{paddingLeft: "4px"}}
                                             onClick={() => props.onEdit && props.onEdit(value.id)}/>
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Container>
    )
}

export const Recipe = {Detail, List};