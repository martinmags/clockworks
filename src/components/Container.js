import React from 'react';
import styled from 'styled-components';

const Container = ({children}) => {
  return <Wrapper>{children}</Wrapper>
 };

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};

`;

export default Container;