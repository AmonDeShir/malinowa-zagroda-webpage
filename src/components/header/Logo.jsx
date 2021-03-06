import React from 'react';
import styled from "styled-components";

import goat from "../../assets/images/header/goat.jpg";
import logo from "../../assets/images/logo.svg";


const Background = styled.div`  
  width: 100vw;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background: center / cover no-repeat url(${goat});

  @media (min-width: 1000px) {
    height: 250px;
  }
`;

const LogoImage = styled.div`
  width: 153.6px;
  height: 64.8px;
  background: center / cover no-repeat url(${logo});

  @media (min-width: 1000px) {
    width: 350px;
    height: 147.66px;
  }
`;

const Logo = () => (
  <Background>
    <LogoImage/>
  </Background>
);

export default Logo