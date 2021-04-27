import React from 'react';
import styled from 'styled-components';

const Heading = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: capitalize;
  font-size: 3rem;
`;

export default Heading;
