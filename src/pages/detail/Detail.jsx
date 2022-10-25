// react import
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// styled import
import {
  DetailBody,
  DetailTitle,
  DetailContent,
  BackButton,
} from './DetailStyled';

const Detail = ({ detail, setDetail, setClick }) => {
  //env
  const navigate = useNavigate();
  const TOKEN = process.env.REACT_APP_TOKEN;
  const URL = process.env.REACT_APP_URL;
  const param = detail.split('&');
  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    axios
      .get(`${URL}/${TOKEN}/${param[1]}-posts/${param[0]}`)
      .then((res) => setDetailData(res.data));
  }, []);

  return detailData ? (
    <>
      <DetailBody>
        <DetailTitle>{detailData.title}</DetailTitle>
        <DetailContent>{detailData.content}</DetailContent>
      </DetailBody>
      <BackButton
        onClick={() => {
          setDetail('');
          setClick(false);
        }}
      >
        뒤로가기
      </BackButton>
    </>
  ) : null;
};

export default Detail;
