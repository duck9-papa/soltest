import styled from 'styled-components';

export const MainBody = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;
export const MainInputDiv = styled.div`
  padding: 15px;
  border-radius: 5px;
  transition: all 0.5s;
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.borderColor};
  margin: 50px;
  &:hover {
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
`;

export const TabArea = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  width: 80%;
`;

export const TabDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : 'black')};
  &:hover {
    background-color: #a5a7ab;
    opacity: 0.5;
    color: blue;
    cursor: pointer;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0.5px solid gray;
  padding: 10px;
`;

export const ScrollDiv = styled.div`
  height: 30px;
`;
