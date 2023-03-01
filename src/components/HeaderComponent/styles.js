import styled from "styled-components";
export const HeaderContainer = styled.header`
  box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.06);
  background: #fff;
`;

export  const TopHeader = styled.section`
  min-height: 4.1rem;
  display: flex;
  justify-content: space-between;
  color: var(--black);
  align-items: center;
`;

export const TopheaderWrapper = styled.section`
  background: rgba(87, 152, 192, 0.1);
`;

export const TopLeftSection = styled.section`
  display: flex;
  align-items: center;
  .tag-icon {
    margin-right: 0.5rem;
  }
`;

export const TopLink = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
  font-weight: 300;
  font-size: 1.4rem;
`;

export const TopRightSection = styled.section`
  display: flex;
  align-items: center;
  ${TopLink} {
    font-size: 1.6rem;
    margin: 0 0 0 1.6rem;
    color: var(--dark);
  }
`;

export const Navigaion = styled.nav``;

export const NavListWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  min-height: 9.3rem;
`;

export const NavListItem = styled.li`
  position: relative;
  display: inline-flex;
  justify-content: center;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &.logo-item {
    flex: 1;
  }
`;

export const NavListLink = styled.a`
  position: relative;
  display: inline-flex;
  color: var(--dark);
  /* font-weight: 400; */
  font-size: 1.8rem;
  &::after {
    content: url("./assets/img/ddl-icon.png");
    display: ${({ ddl }) => (ddl ? "inline-block" : "none")};
    margin-left: 0.8rem;
  }
  .logo-img {
    max-width: 100%;
  }
`;
export const NavListBtn = styled.button`
  background: var(--gradient-pink);
  padding: 1.6rem;
  border-radius: 0.8rem;
  color: #fff;
  font-weight: 500;
  font-size: 1.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 0.8rem;
  }
`;

export const Cart = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: "${({ totalItem }) => totalItem || 0}";
    font-size: 0.8rem;
    color: #fff;
    display: inline-flex;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.1rem;
    height: 1.1rem;
    background: var(--sky-blue);
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
  }
`;