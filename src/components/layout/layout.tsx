import * as React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"
import styled, { ThemeProvider } from 'styled-components';
import Theme, { themeLight } from './theme';

const MainWrapper = styled.main`
  margin: 0 auto;
  width: 80%;
`;

interface Props {
  children: React.ReactNode
}

const layout = (props: Props) => {
  const theme: Theme = themeLight

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainWrapper>{props.children}</MainWrapper>
      <Footer />
    </ThemeProvider>
  )
}

export default layout
