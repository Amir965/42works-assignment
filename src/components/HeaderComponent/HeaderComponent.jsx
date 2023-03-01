import {
  HeaderContainer,
  TopHeader,
  TopheaderWrapper,
  TopRightSection,
  TopLink,
  TopLeftSection,
  Navigaion,
  NavListWrapper,
  NavListItem,
  NavListLink,
  NavListBtn,
  Cart,
} from "./styles";

export const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <TopheaderWrapper>
        <TopHeader className="container">
          <TopLeftSection>
            <img
              src="./assets/img/tag-icon.svg"
              alt="tag"
              className="tag-icon"
            />
            <TopLink>Some Offer</TopLink>/<TopLink>CTA goes here</TopLink>/
            <TopLink>Lorem Ipsum</TopLink>
          </TopLeftSection>
          <TopRightSection>
            <TopLink>Who We Are</TopLink>
            <TopLink as="span">Contact Us</TopLink>
            <TopLink>
              <img src="./assets/img/facebook-icon.svg" alt="fb" />
            </TopLink>
            <TopLink>
              <img src="./assets/img/linkedin-icon.svg" alt="linkedin" />
            </TopLink>
            <TopLink>
              <img src="./assets/img/twitter-icon.svg" alt="twitter" />
            </TopLink>
            <TopLink>
              <img src="./assets/img/instagram-icon.svg" alt="instagram" />
            </TopLink>
          </TopRightSection>
        </TopHeader>
      </TopheaderWrapper>
      <Navigaion>
        <NavListWrapper className="container">
          <NavListItem>
            <NavListLink ddl>Legal Documents</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink ddl>Legal Documents</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink>Subscription Plans</NavListLink>
          </NavListItem>
          <NavListItem className="logo-item">
            <NavListLink>
              <img
                src="./assets/img/logo.svg"
                alt="logo"
                className="logo-img"
              />
            </NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink>Blog Name Here</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink>Meet the Lawyers</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink>
              <Cart totalItem={0}>
                <img src="./assets/img/cart.svg" alt="cart" />
              </Cart>
            </NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListBtn>
              <img src="./assets/img/user-circle.svg" alt="cart" />
              <span>My Legal Hub</span>
            </NavListBtn>
          </NavListItem>
        </NavListWrapper>
      </Navigaion>
    </HeaderContainer>
  );
};
