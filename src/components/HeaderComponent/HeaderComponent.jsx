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
  Cart
} from './styles'

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
          {/*------------ TopRightSection end ---------------- */}
          <TopRightSection>
            <TopLink>Who We Are</TopLink>
            <TopLink as="span">Contact Us</TopLink>
            <TopLink>
              <img src="./assets/img/facebook-icon.svg" />
            </TopLink>
            <TopLink>
              <img src="./assets/img/linkedin-icon.svg" />
            </TopLink>
            <TopLink>
              <img src="./assets/img/twitter-icon.svg" />
            </TopLink>
            <TopLink>
              <img src="./assets/img/instagram-icon.svg" />
            </TopLink>
          </TopRightSection>
          {/*------------ TopLeftSection end ---------------- */}
        </TopHeader>
      </TopheaderWrapper>
      {/*--------------------- TopHeader end -------------- */}
      <Navigaion>
        <NavListWrapper className="container">
          <NavListItem>
            <NavListLink ddl>Legal Documents</NavListLink>
          </NavListItem>
          {/* -------- NavListItem - 1 end --------- */}
          <NavListItem>
            <NavListLink ddl>Legal Documents</NavListLink>
          </NavListItem>
          {/* -------- NavListItem - 2 end --------- */}
          <NavListItem>
            <NavListLink>Subscription Plans</NavListLink>
          </NavListItem>
          {/* -------- NavListItem - 3 end --------- */}
          <NavListItem className="logo-item">
            <NavListLink>
              <img
                src="./assets/img/logo.svg"
                alt="logo"
                className="logo-img"
              />
            </NavListLink>
          </NavListItem>
          {/* -------- NavListItem - 4 - Logo end --------- */}
          <NavListItem>
            <NavListLink>Blog Name Here</NavListLink>
          </NavListItem>
          {/* -------- NavListItem - 5 end --------- */}
          <NavListItem>
            <NavListLink>Meet the Lawyers</NavListLink>
          </NavListItem>
          {/* -------- NavListItem - 6 end --------- */}
          <NavListItem>
            <NavListLink>
              <Cart totalItem={0}>
                <img src="./assets/img/cart.svg" alt="cart" />
              </Cart>
            </NavListLink>
          </NavListItem>
          {/* -------- NavListItem - 7 end --------- */}
          <NavListItem>
            <NavListBtn>
              <img src="./assets/img/user-circle.svg" alt="cart" />
              <span>My Legal Hub</span>
            </NavListBtn>
          </NavListItem>
          {/* -------- NavListItem - 8 end --------- */}
        </NavListWrapper>
      </Navigaion>
    </HeaderContainer>
  );
};


