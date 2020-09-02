import styled from 'styled-components'

export const Div = styled.div`
    
`;
export const Input = styled.input`
    width: 100%;
    margin-bottom: 20px;
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    padding: 7px;
    font-size: 12px;
    background-color: white;
    border-color: #6E6E6E;
    transition: 0.2s;
    &:focus {
        outline: none;
        box-shadow: 0px 2px 1px #febc00;
        border-color: #FFD400;
    }
`;