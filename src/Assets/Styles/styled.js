import styled from 'styled-components';
import { Button } from 'reactstrap';

export const StyledNavbar = styled.div`
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding: 10px;
`
export const StyledImg = styled.img`
    width: 150px;
    padding: 0;
`
export const StyledGenre = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 80px;
    font-size: 20px;
`
export const StyledSignUp = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h5`
    font-size: 100%;
    font-weight: bolder;
`
export const StyledInput = styled.input`
    width: 100%;
`
export const StyledButton = styled.button`
    width: 80px;
    background-color: white;
    color: black;
    border: none;
    font-weight: bolder;
    padding-top: 5px;
`
export const GroupButton = styled(Button)`
    opacity: 0.8;
    margin: 5px;
    padding: 5px;
    border-radius: 15px;
    text-align: center;
`