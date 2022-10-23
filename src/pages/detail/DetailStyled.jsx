import styled from "styled-components";

export const DetailBody = styled.div`
    width: 900px;
    height: 200px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    margin-top: 100px;
`
export const DetailTitle = styled.h2`
    text-align: center;
`
export const DetailContent = styled.div`
    font-size: 14px;
    margin: auto 0;
    padding: 10px;
`
export const BackButton = styled.div`
    padding: 10px;
    background-color: blue;
    color : white;
    width: 80px;
    height: 20px;
    margin: 15px 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
`