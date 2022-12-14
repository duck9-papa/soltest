// react import
import React, { useEffect, useRef, useState, useCallback } from 'react';
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
import Detail from '../detail/Detail';
function Main() {
  // env
  const TOKEN = process.env.REACT_APP_TOKEN;
  const URL = process.env.REACT_APP_URL;
  // input 영역 ref
  const inputBodyRef = useRef();
  // foucs 일때 테두리 색 변화
  const [focus, setFocus] = useState(false);
  // 스크롤 값
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  // 클릭 값 ( 클릭 시 디테일로 전환 )
  const [click, setClick] = useState(false);
  // 디테일 데이터 값
  const [detail, setDetail] = useState('');
  // 무한스크롤 감지
  const [scrollRef, viewScroll] = useInView();
  // 검색 창 ref
  const textInput = useRef();
  // 카테고리 상태 값
  const [tab, setTab] = useState('a');
  // 검색 배열 & 값
  const [search, setSearch] = useState('');
  const [search_Arr, setSearch_Arr] = useState([]);
  // 카테고리 별 배열 값
  const [A_Arr, setA_Arr] = useState([]);
  const [B_Arr, setB_Arr] = useState([]);
  const [A_Page, setA_Page] = useState(0);
  const [B_Page, setB_Page] = useState(0);

  // 영역 외 클릭 시 포커스 해제
  const handleClickOutside = (e) => {
    if (!inputBodyRef.current.contains(e.target)) {
      setFocus(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [inputBodyRef]);

  // 스크롤 복원
  useEffect(() => {
    if (!click) {
      window.scrollTo(0, y);
    }
  }, [click]);

  //클릭시 인풋에 포커스
  const OnInput = () => {
    textInput.current.focus();
  };

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

  return click ? (
    <Detail
      detail={detail}
      setClick={setClick}
      setDetail={setDetail}
      setY={setY}
    />
  ) : (
    <MainBody>
      {/* input */}
      <MainInputDiv
        borderColor={focus ? 'blue' : 'gray'}
        onClick={() => setFocus(true)}
        ref={inputBodyRef}
      >
        <SearchIconDiv onClick={OnInput}>
          <Search color={'gray'} onClick={OnInput} />
        </SearchIconDiv>
        <MainInput
          ref={textInput}
          value={search}
          id="searchInput"
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
                setClick={setClick}
                setDetail={setDetail}
                setY={setY}
              />
            ))
          : // 검색중이 아니고 a탭일때
          tab === 'a'
          ? A_Arr.map((item) => (
              <Content
                item={item}
                key={item.title + item.id}
                tab={tab}
                setClick={setClick}
                setDetail={setDetail}
                setY={setY}
              />
            ))
          : // b탭일때
            B_Arr.map((item) => (
              <Content
                item={item}
                key={item.title + item.id}
                tab={tab}
                setClick={setClick}
                setDetail={setDetail}
                setY={setY}
              />
            ))}
        <ScrollDiv ref={scrollRef} />
      </ContentArea>
    </MainBody>
  );
}

export default Main;
