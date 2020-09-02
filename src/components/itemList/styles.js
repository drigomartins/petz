import styled from 'styled-components'

export const Div = styled.div`

`;

export const Content = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    -webkit-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 15px;
    transition: 0.2s;
    &:hover {
        border-style: solid;
        border-width: 1px;
        box-shadow: 0px 0px 0px #FFD400;
        border-color: #FFD400;
        border-width: 2px;
    }

`;
export const Description = styled.div`
    width: 80%;
    color: #555;
    font-size: 14px;
    font-weight: bold;
`;
export const Options = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
`;
export const Info = styled.i`
    color: #6E6E6E;
    transition: 0.2s;
    &:hover {
        color: #00A0E4;
    }
`;