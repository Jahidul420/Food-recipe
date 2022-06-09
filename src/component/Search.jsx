import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Search() {

    const[input, setInput] = useState('');
    const navigate = useNavigate();
    const SubmitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }
  return (
    <FormStyle onSubmit={SubmitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`

  width: 100%;
  div{
      width: 50%;
      position: relative;
      margin: auto;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    color: white;
    padding: 8px 0px 8px 40px;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
