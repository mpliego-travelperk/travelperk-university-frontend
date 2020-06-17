import React from 'react';
import {Detail as DetailComponent} from './Detail';
import {Recipe as RecipeAPI} from "../api/recipe";
import {Tag} from './Tag';

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
                {props.recipe.ingredients.map((value, index) => {
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

export const Recipe = {Detail};