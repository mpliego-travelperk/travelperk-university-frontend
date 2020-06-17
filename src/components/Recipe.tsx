import React from 'react';
import {Detail as DetailComponent} from './Detail';
import {Recipe as RecipeAPI} from "../api/recipe";
import {Tag} from './Tag';
import {Table} from './Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'


const Detail = (props: { recipe: RecipeAPI; }) => {
    return (
        <DetailComponent.Container>
            <DetailComponent.Row>
                <DetailComponent.Name>ID:</DetailComponent.Name>
                <DetailComponent.Value>{props.recipe.id}</DetailComponent.Value>
            </DetailComponent.Row>
            <DetailComponent.Row>
                <DetailComponent.Name>Name:</DetailComponent.Name>
                <DetailComponent.Value>{props.recipe.name}</DetailComponent.Value>
            </DetailComponent.Row>
            <DetailComponent.Row>
                <DetailComponent.Name>Description:</DetailComponent.Name>
                <DetailComponent.Value>{props.recipe.description}</DetailComponent.Value>
            </DetailComponent.Row>
            <DetailComponent.Row>
                {props.recipe.ingredients.map((value) => {
                    return (
                        <div style={{paddingRight: '5px'}}>
                            <Tag.Display name={value.name}/>
                        </div>
                    )
                })}
                <Tag.Add placeholder="New Tag"/>
            </DetailComponent.Row>
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