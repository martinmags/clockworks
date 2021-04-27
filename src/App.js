import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyles';
import Heading from 'components/Heading';
import Container from 'components/Container';
import AnalogClock from 'components/clocks/AnalogClock';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Heading title='Clockworks' />
        <AnalogClock />
      </Container>
    </ThemeProvider>
  );
};

export default App;
