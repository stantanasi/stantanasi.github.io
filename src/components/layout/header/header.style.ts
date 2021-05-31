import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  align-items: center;
  background: ${props => props.theme.colors.primaryBackgroundColor};
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  display: flex;
  min-height: 60px;
  padding: 5px 5%;
  position: fixed;
  top: 0px;
  z-index: 1000;

  @media (max-width: 768px) {
    visibility: hidden;
  }
`

export const HeaderNavbar = styled.nav`
  width: 100%;
  align-items: center;
  display: flex;
  margin: auto;
`

export const HeaderLogo = styled.div`
  margin-right: auto;

  a {
    cursor: pointer;

    img {
      width: 35px;
    }
  }
`

export const HeaderNavMenu = styled.div`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 32px;
  }
`

export const HeaderNavItem = styled.div`
  align-self: center;
`
