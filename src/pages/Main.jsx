// react import
import React, { useEffect, useRef, useState } from 'react';
// styled import
import { MainBody, MainInputDiv, SearchIconDiv, MainInput } from './MainStyled';
import Search from '../Icon/Search';
function Main() {
  const textInput = useRef();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('A');
  //클릭시 인풋에 포커스
  const OnInput = () => {
    textInput.current.focus();
  }

useEffect(()=>{
    console.log(textInput.current.hasFocus())
})
  return (
    <MainBody>
      {/* input */}
      <MainInputDiv >
        <SearchIconDiv onClick={OnInput}>
          <Search color={"gray"} onClick={OnInput}/>
        </SearchIconDiv>
        <MainInput ref={textInput} value={search} id="textInput" onChange={(e)=>setSearch(e.target.value)}/>
      </MainInputDiv>
    </MainBody>
  );
}

export default Main;
