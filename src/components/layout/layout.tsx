import * as React from "react"
import "./layout.css"
import Header from "./header/header"
import Footer from "./footer/footer"
import styled from 'styled-components';

const MainWrapper = styled.main`
  margin: 0 auto;
  width: 80%;
`;

interface Props {
  children: React.ReactNode
}

const layout = (props: Props) => {
  return (
    <>
      <Header />
      <MainWrapper>{props.children}</MainWrapper>
      <Footer />
    </>
  )
}

export default layout
