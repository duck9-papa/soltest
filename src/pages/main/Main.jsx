// react import
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
// styled import
import {
  MainBody,
  MainInputDiv,
  SearchIconDiv,
  MainInput,
  TabArea,
  TabDiv,
  ContentArea,
  ScrollDiv,
} from './MainStyled';
// components import
import Search from '../../Icon/Search';
import Content from '../../components/content/Content';
import { useLocation } from 'react-router-dom';
function Main() {
  // env
  const TOKEN = process.env.REACT_APP_TOKEN;
  const URL = process.env.REACT_APP_URL;
  // 저장값
  const location = useLocation();
  const [scrollRef, viewScroll] = useInView();
  const textInput = useRef();
  const [tab, setTab] = useState('a');
  const [search, setSearch] = useState('');
  const [search_Arr, setSearch_Arr] = useState([]);
  const [A_Arr, setA_Arr] = useState([]);
  const [B_Arr, setB_Arr] = useState([]);
  const [A_Page, setA_Page] = useState(0);
  const [B_Page, setB_Page] = useState(0);
  const saveData = {
    tab: tab,
    search: search,
    search_Arr: search_Arr,
    A_Arr: A_Arr,
    B_Arr: B_Arr,
    A_Page: A_Page,
    B_Page: B_Page,
  };

  //클릭시 인풋에 포커스
  const OnInput = () => {
    textInput.current.focus();
  };
  // 저장 값이 존재할 시 복구
  useEffect(() => {
    if (location.state) {
      setTab(location.state.tab);
      setA_Arr(location.state.A_Arr);
      setA_Page(location.state.A_Page);
      setB_Arr(location.state.B_Arr);
      setB_Page(location.state.B_Page);
      setSearch(location.state.search);
      setSearch_Arr(location.state.search_Arr);
    }
  }, []);
  console.log(saveData);
  //최하단 도달 시 페이지 증가
  useEffect(() => {
    if (viewScroll) {
      tab === 'a' ? setA_Page(A_Page + 1) : setB_Page(B_Page + 1);
    }
  }, [viewScroll]);
  //페이지 증가 시 통신
  useEffect(() => {
    axios
      .get(
        `${URL}/${TOKEN}/${tab}-posts?page=${
          tab === 'a' ? A_Arr.length / 10 : B_Arr.length / 10
        }`
      )
      .then((res) =>
        tab === 'a'
          ? setA_Arr([...A_Arr, ...res.data])
          : setB_Arr([...B_Arr, ...res.data])
      );
  }, [A_Page, B_Page]);
  // 검색 시 통신
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${URL}/${TOKEN}/${tab}-posts?search=${search}`)
        .then((res) => setSearch_Arr(res.data));
    }, 150);
  }, [search]);

  return (
    <MainBody>
      {/* input */}
      <MainInputDiv>
        <SearchIconDiv onClick={OnInput}>
          <Search color={'gray'} onClick={OnInput} />
        </SearchIconDiv>
        <MainInput
          ref={textInput}
          value={search}
          id="textInput"
          onChange={(e) => setSearch(e.target.value)}
        />
      </MainInputDiv>
      {/* tab */}
      <TabArea>
        <TabDiv
          color={tab === 'a' ? 'blue' : 'black'}
          onClick={() => setTab('a')}
        >
          {'A Post'}
        </TabDiv>
        <TabDiv
          color={tab === 'b' ? 'blue' : 'black'}
          onClick={() => setTab('b')}
        >
          {'B Post'}
        </TabDiv>
      </TabArea>
      {/* content */}
      <ContentArea>
        {/* 검색중일때 */}
        {search
          ? search_Arr.map((item) => (
              <Content
                item={item}
                key={item.title + item.id}
                tab={tab}
                saveData={saveData}
              />
            ))
          : // 검색중이 아니고 a탭일때
          tab === 'a'
          ? A_Arr.map((item) => (
              <Content
                item={item}
                key={item.title + item.id}
                tab={tab}
                saveData={saveData}
              />
            ))
          : // b탭일때
            B_Arr.map((item) => (
              <Content
                item={item}
                key={item.title + item.id}
                tab={tab}
                saveData={saveData}
              />
            ))}
        <ScrollDiv ref={scrollRef} />
      </ContentArea>
    </MainBody>
  );
}

export default Main;
