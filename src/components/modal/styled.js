import styled from "styled-components";


export const Container = styled.div`

    position: fixed;
    left: 0;
    top: 0;
    right:0; 
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.70);
    z-index: 999;
    display : ${props => props.active ? 'flex' : 'none' };
    justify-content: center;
    align-items: center;

`;

export const ModalBody = styled.div`

    width: 300px;
    height: 300px;
    background-color: #FFF;

`;