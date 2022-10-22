import styled from 'styled-components';

export const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MainInputDiv = styled.div`
  padding: 15px;
  border-radius: 5px;
  transition: all 0.5s;
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  margin: 50px;
  &:hover{
    border-color: blue;
  }
`;
export const SearchIconDiv = styled.div`
  margin-right: 0.5rem;
  width: 14px;
  height: 14px;
`;
export const MainInput = styled.input`
  width: 285px;
  height: 21px;
  border: none;
  outline: none;
  &:focus {}
`;
