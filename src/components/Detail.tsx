import styled from 'styled-components'

const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
`

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: auto;
`

const Name = styled.div`
    align-self: center;
    margin: 5px;
    font-weight: bold;
`

const Value = styled.div`
    align-self: center;
    margin: 5px;
`

export const Detail = {Container, Row, Name, Value};