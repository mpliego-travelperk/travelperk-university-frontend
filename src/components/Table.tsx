import styled from 'styled-components'

const Container = styled.div`
    border: solid lightgray 1px;
`

const Row = styled.div`
    padding: 3px;
    border: solid lightgray 1px;
    display: flex;
    justify-content: flex-start;
    margin: auto;
`

const Cell = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: auto;
`

const Header = styled.div`
    padding: 10px;
    background-color: lightgrey;
    color: white;
    display: flex;
    justify-content: flex-start;
    margin: auto;
`

export const Table = {Container, Row, Cell, Header};