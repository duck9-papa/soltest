//react import
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//styled import
import {
  ContentBody,
  TitleArea,
  TitleContent,
  ContentText,
} from './ContentStyled';

const Content = ({ item, tab, saveData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <ContentBody
      onClick={() => {
        navigate(`/detail/${item.id}&${tab}`, { state: { save: saveData } });
        dispatch({ type: 'ContentSlice/save', payload: saveData });
      }}
    >
      <TitleArea>
        {/* 제목 */}
        <TitleContent color={'blue'}>{item.id + '.'}</TitleContent>
        <TitleContent>{item.title}</TitleContent>
      </TitleArea>
      {/* 내용 */}
      <ContentText>{item.content}</ContentText>
    </ContentBody>
  );
};

export default Content;
