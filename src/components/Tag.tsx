import React from 'react'
import styled from "styled-components"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faPlus} from '@fortawesome/free-solid-svg-icons'

const Display = (props: { name: string; }) => {
    return (
        <Container>
            <Box>
                <Label>
                    {props.name}
                </Label>
                <Action>
                    <FontAwesomeIcon icon={faTrash} size="xs"/>
                </Action>
            </Box>
        </Container>
    )
}

const Add = (props: { placeholder: string }) => {
    return (
        <Container>
            <Box>
                <Input placeholder={props.placeholder}/>
                <Action>
                    <FontAwesomeIcon icon={faPlus} size="xs"/>
                </Action>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Box = styled.div`
    display: flex;
    background-color: lightgrey;
    border-radius: 32px;
    border-width: 1px;
    border-style: solid;
    border-color: lightgrey;
    border-image: initial;
    box-sizing: border-box;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
`

const Label = styled.div`
`

const Input = styled.input`
    width: 6em;
    background-color: lightgrey;
    box-sizing: border-box;
    font-size: 16px;
    padding: 0px 14px;
    border-radius: 3px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    font-size: smaller;
`

const Action = styled.div`
    padding-left: 7px;
    cursor: pointer;
`

export const Tag = {Display, Add, Container, Box, Label, Action};