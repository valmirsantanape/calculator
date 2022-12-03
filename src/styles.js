import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom, rgb(182, 126, 22), rgb(230, 74, 74));

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Content = styled.div`
    background-color: rgb(70, 100, 100);
    width: 80%;
    border-radius: 10px;
    padding: 3px;
    
`
export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`