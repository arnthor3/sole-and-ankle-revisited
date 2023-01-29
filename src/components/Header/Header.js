import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { QUERIES } from "../../breakPoints";
import Logo from "../Logo";
import Icon from "../Icon";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag"></Icon>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search"></Icon>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="menu"></Icon>
          </UnstyledButton>
        </MobileNav>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SecondSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const MobileNav = styled.nav`
  justify-content: flex-end;
  display: flex;
  flex: 1;
  gap: 16px;
  margin-left: auto;
  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
  }
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Nav = styled.nav`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 48px;
    margin: 0px 48px;
  }
  display: none;
`;

const Side = styled.div`
  flex: 1;
`;

const SecondSide = styled(Side)`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
