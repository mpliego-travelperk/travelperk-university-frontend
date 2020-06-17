import styled from 'styled-components'

const Container = styled.div`
`

const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: auto;
`

const Name = styled.div`
    align-self: center;
    margin: 5px;
    font-weight: bold;
    flex: 1;
`

const Value = styled.div`
    align-self: center;
    margin: 5px;
    flex: 2;
`

export const Detail = {Container, Row, Name, Value};