import React from "react"
import styled from "styled-components";

const Conteiner = styled.div`
  position: absolute;

  bottom: 10px;
  right: 10px;

  width: 200px;
  height: 48px;
`;

const Title = styled.h2`
  width: 100%;

  font-size: ${({theme}) => theme.fonts.phone.m};
  font-weight: 500;
  text-align: center;

  margin: 0 0 5px 0;
`;

const Text = styled.div`
  width: 100%;

  font-size: ${({theme}) => theme.fonts.phone.xl};
  font-weight: 500;
  text-align: center;
`;

const Description = ({title, description}) => (
  <Conteiner>
    <Title>{title}</Title>
    <Text>{description}</Text>
  </Conteiner>
);


export default Description;