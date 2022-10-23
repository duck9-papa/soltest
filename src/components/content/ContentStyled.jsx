import styled from 'styled-components';

export const ContentBody = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  &:hover{
    cursor: pointer;
    background-color: #a5a7ab;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  width: 100%;
`;
export const TitleContent = styled.div`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 16px;
  font-weight: 500;
`;

export const ContentText = styled.div`
    font-size: 12px;
    max-width: 100%;
    text-align: start;
    display: flex;
    justify-content: start;

    padding: 10px;
`