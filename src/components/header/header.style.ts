import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  align-items: center;
  background: #FFFFFF;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  display: flex;
  padding: 16px 5%;
  position: fixed;
  top: 0px;
  z-index: 1000;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
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

export const HeaderNavbarToggler = styled.button`
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderNavbar = styled.nav<{ isCollapsed: boolean; }>`
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    display: ${props => props.isCollapsed ? 'none' : 'block'};
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 1;
  }
`

export const NavItem = styled.div`
  text-align: center;

  @media(min-width: 768px) {
    margin-left: 20px;
  }
`

export const NavLink = styled.a`
  color: #000000;
  display: block;
  text-decoration: none;

  :after {
    content: "";
    position: relative;
    display: block;
    height: 5px;
    width: 0;
    border-radius: 16px;
    background: #80c4ff;
    transition: all .3s ease-out 0s;
  }

  :hover {
    :after {  
      @media(min-width: 768px) {
        width: 100%;
      }
    }
  }

  @media(max-width: 768px) {
    padding: .7rem 1rem;
  }
`;

