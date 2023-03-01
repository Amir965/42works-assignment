/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  FooterContainer,
  Container,
  CopyRightSection,
  FooterTop,
  TopText,
  SubmitSection,
  InputGroup,
  Button,
  FooterMid,
  MidCol1,
  MidCol,
  SocialLinkwrapper,
  FooterBottom,
} from "./styles";

export const FooterComponent = () => {
  const moveTop = () => {
    let htmlTag = document.querySelector("html");
    htmlTag.scrollTop = 0;
  };
  return (
    <FooterContainer>
      <Container className="container">
        <FooterTop>
          <TopText>
            <h2 className="footer-h1">Sign Up For Legal Updates</h2>
            <p className="footer-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              facilisis eget at semper tellus, nunc venenatis a commodo.
            </p>
          </TopText>
          <SubmitSection>
            <InputGroup>
              <input type="text" placeholder="Your email address" />
              <Button>Submit</Button>
            </InputGroup>
            <InputGroup className="bottom">
              <label className="footer-check-box">
                <input type="checkbox" />
                <span>
                  <img src="./assets/img/tick-white.png" alt="" />
                </span>
              </label>
              <p className="small-text">
                By checking this box, I agree to the privacy policy, subscribing
                to updates, newsletters and marketing information by e-mail from
                Law For Me
              </p>
            </InputGroup>
          </SubmitSection>
        </FooterTop>
        <FooterMid>
          <MidCol1>
            <a className="link logo" style={{ display: "flex" }}>
              <img src="./assets/img/footer-logo.svg" alt="logo" />
            </a>
            <p className="provided-text">
              Provide you with legal and HR documents, how to guides, and legal
              advice from qualified Solicitors and Barristers
            </p>
            <SocialLinkwrapper>
              <a className="link" href="https://www.twitter.com">
                <img src="./assets/img/footer-twitter.svg" alt="twitter" />
              </a>
              <a className="link" href="https://www.instagram.com">
                <img src="./assets/img/footer-instagram.svg" alt="insta" />
              </a>
              <a className="link" href="https://www.facebook.com">
                <img src="./assets/img/footer-facebook.svg" alt="fb" />
              </a>
              <a className="link" href="https://www.linkedin.com">
                <img src="./assets/img/footer-linkedin.svg" alt="linkedin" />
              </a>
            </SocialLinkwrapper>
          </MidCol1>
          <MidCol>
            <p className="title">Products</p>
            <a className="link">Commercial Law</a>
            <a className="link">Employment Law</a>
            <a className="link">GDPR Templates</a>
            <a className="link">Making a Claim</a>
          </MidCol>
          <MidCol>
            <p className="title">Legal Documents</p>
            <a className="link">Mus purus nulla lorem.</a>
            <a className="link">Mi a urna ultricies nisi.</a>
            <a className="link">Risus cursus pretium vel.</a>
            <a className="link">Pretium convallis cursus.</a>
            <a className="link">Gravida id et vulputate.</a>
          </MidCol>
          <button className="move-top" onClick={moveTop}>
            <img src="./assets/img/move-top-icon.svg" alt="" />
          </button>
        </FooterMid>
        <FooterBottom>
          <a className="link">Terms And Conditions</a>
          <span>|</span>
          <a className="link">Terms Of Use</a>
          <span>|</span>
          <a className="link">Privacy Policy</a>
          <span>|</span>
          <a className="link">Cookie Policy</a>
        </FooterBottom>
      </Container>
      <CopyRightSection>
        <Container>
          <p>Copyright 2022 KB and Co Ltd t/a Law For Me</p>
          <p className="small">
            KB and Co Ltd t/a Law For Me is not a regulated entity and is not
            authorised by the Solicitors Regulation Authority, the Bar Standards
            Board or CILEX
          </p>
        </Container>
      </CopyRightSection>
    </FooterContainer>
  );
};
