import { useState, useRef } from "react";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { DocumentCard } from "../../components/DocumentCard/DocumentCard";
import { bussinessSvg, empSvg, willSvg, agreementsSvg } from "./svg";
import Slider from "react-slick";
import {
  HeroSection,
  HeroContainer,
  HeroLeftSection,
  HeroRightSection,
  HeroImageContainer,
  HeroTitle,
  WokringWithSection,
  LeagalSeaction,
  SectionTitie,
  SectionSubtitle,
  LeagleContiner,
  TabContainer,
  TabButton,
  TabPanel,
  TabPanelConatiner,
  TabPanelLeft,
  TabPanelRight,
  TabpanelTitle,
  TabCardRow,
  TabCardCol,
  SubscriptionSection,
  SubscriptionContainer,
  SubscriptionRow,
  SubscriptionCol1,
  SubscriptionCol,
  ExplorePlanCard,
  SubscriptionBtn,
  SubscriptionPlanCard,
  SubscriptionOverLay,
  OverlayRow,
  OverlayCol1,
  OverlayCol,
  AdvisorSection,
  SliderHeader,
  SliderHeaderLeft,
  SliderHeaderReight,
  AdvisorCard,
  AdvisorImage,
  AdvisorTitle,
  PrvButton,
  NextButton,
  LawyerSection,
  LawyerContainer,
  LawyerHeader,
  LawyerHeaderLeft,
  LawyerHeaderRight,
  NormalButton,
  LawyerRow,
  LawyerCol,
  LawyerCardImage,
  LawyerCard,
  LawyerCardText,
  HowToGuidSection,
  HowToGuidConatiner,
  HowToGuidRow,
  HowToGuidCol,
  InfoCard,
  OurTeamSection,
  OurTeamConatiner,
  JoinOurTeamCardWrapper,
  JoinOurTeamCard,
  JoinOurTeamCol,
  JoinImageWrapper,
  CustomerSaySlider,
  CustomerSaysCard,
  StarContainer
} from "./styles";

const NewSlider = (props)=>{
  return <Slider {...props}></Slider>
} 
export const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const adviceSliderRef = useRef();
  const customerSliderRef = useRef();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let customerSlidesettings = {
    dots: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <HeroSection>
        <HeaderComponent />
        <HeroContainer className="container">
          <HeroLeftSection>
            <HeroImageContainer>
              <img src="./assets/img/home-hero-img.png" alt="" />
            </HeroImageContainer>
          </HeroLeftSection>
          {/* ----------- HeroLeftSection end ---------------- */}
          <HeroRightSection>
            <HeroTitle>
              Law For Me helps you{" "}
              <span className="blue-text"> understand </span> the law
            </HeroTitle>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              scelerisque faucibus nunc, turpis metus volutpat ac tristique non.
              Ultricies faucibus amet,
            </p>

            <SearchBox className="search-box-component" />
            {/* SearchBox component end  */}

            <WokringWithSection>
              <p>Working with</p>
              <ul>
                <li>
                  <img src="./assets/img/ey-logo.png" alt="Ey" />
                </li>
                <li>
                  <img src="./assets/img/adrg-logo.png" alt="adrg" />
                </li>
                <li>
                  <img src="./assets/img/adr-odr-logo.png" alt="adr-odr" />
                </li>
              </ul>
            </WokringWithSection>
          </HeroRightSection>
          {/* ----------- HeroRightSection end ---------------- */}
        </HeroContainer>
      </HeroSection>
      {/* hero section end */}
      <LeagalSeaction>
        <LeagleContiner className="container">
          <SectionTitie>Legal Documents</SectionTitie>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, non
            massa commodo, nibh sed diam arcu. Condimentum sagittis purus.
          </SectionSubtitle>

          <TabContainer>
            <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
              <i
                className="icon"
                dangerouslySetInnerHTML={{ __html: empSvg }}
              ></i>
              <span className="btn-text">Employment Law & HR</span>
            </TabButton>
            {/* TabButton  end 1*/}
            <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
              <i
                className="icon"
                dangerouslySetInnerHTML={{ __html: bussinessSvg }}
              ></i>
              <span className="btn-text">Business Law</span>
            </TabButton>
            {/* TabButton  end 2*/}
            <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)}>
              <i
                className="icon"
                dangerouslySetInnerHTML={{ __html: willSvg }}
              ></i>
              <span className="btn-text">Wills & Trusts</span>
            </TabButton>
            {/* TabButton  end 3*/}
            <TabButton active={activeTab === 3} onClick={() => setActiveTab(3)}>
              <i
                className="icon"
                dangerouslySetInnerHTML={{ __html: agreementsSvg }}
              ></i>
              <span className="btn-text">Bespoke Agreements</span>
            </TabButton>
            {/* TabButton  end 4*/}
            <TabPanel active={activeTab === 0}>
              <TabPanelConatiner>
                <TabPanelLeft>
                  <TabpanelTitle>How it Works</TabpanelTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <img
                    className="animation-img"
                    src="./assets/img/how-it-wroks.png"
                    alt=""
                  />
                </TabPanelLeft>
                <TabPanelRight>
                  <TabCardRow>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Agreements`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Court Documents`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                  </TabCardRow>
                </TabPanelRight>
              </TabPanelConatiner>
            </TabPanel>
            {/* TabPanel end 1 */}
            <TabPanel active={activeTab === 1}>
              <TabPanelConatiner>
                <TabPanelLeft>
                  <TabpanelTitle>How it Works 2</TabpanelTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <img
                    className="animation-img"
                    src="./assets/img/how-it-wroks.png"
                    alt=""
                  />
                </TabPanelLeft>
                <TabPanelRight>
                  <TabCardRow>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Agreements`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Court Documents`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                  </TabCardRow>
                </TabPanelRight>
              </TabPanelConatiner>
            </TabPanel>
            {/* TabPanel end 2 */}
            <TabPanel active={activeTab === 2}>
              <TabPanelConatiner>
                <TabPanelLeft>
                  <TabpanelTitle>How it Works 3</TabpanelTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <img
                    className="animation-img"
                    src="./assets/img/how-it-wroks.png"
                    alt=""
                  />
                </TabPanelLeft>
                <TabPanelRight>
                  <TabCardRow>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Agreements`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Court Documents`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                  </TabCardRow>
                </TabPanelRight>
              </TabPanelConatiner>
            </TabPanel>
            {/* TabPanel end 3 */}
            <TabPanel active={activeTab === 3}>
              <TabPanelConatiner>
                <TabPanelLeft>
                  <TabpanelTitle>How it Works 4</TabpanelTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <img
                    className="animation-img"
                    src="./assets/img/how-it-wroks.png"
                    alt=""
                  />
                </TabPanelLeft>
                <TabPanelRight>
                  <TabCardRow>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Agreements`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Court Documents`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                    <TabCardCol>
                      <DocumentCard
                        title={`Letters`}
                        vat={125}
                        contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.`}
                      />
                    </TabCardCol>
                  </TabCardRow>
                </TabPanelRight>
              </TabPanelConatiner>
            </TabPanel>
            {/* TabPanel end 4 */}
          </TabContainer>
        </LeagleContiner>
      </LeagalSeaction>
      {/* LeagalSeaction end */}

      <SubscriptionSection>
        <SubscriptionContainer className="container">
          <SectionTitie>Subscription Plans</SectionTitie>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sit
            quis sapien turpis.
          </SectionSubtitle>
          <SubscriptionRow>
            <SubscriptionCol1>
              <ExplorePlanCard>
                <p>Want a bespoke or outsourced plan?</p>
                <SubscriptionBtn color="pink">
                  Explore Bespoke Plan
                </SubscriptionBtn>
              </ExplorePlanCard>
            </SubscriptionCol1>
            <SubscriptionCol>
              <SubscriptionPlanCard>
                <p className="plan-title">Access Plan</p>
                <p className="plan-price">£99</p>
                <p className="plan-vat-text">+VAT</p>
              </SubscriptionPlanCard>
              <SubscriptionBtn>Get Started</SubscriptionBtn>
            </SubscriptionCol>
            {/* Access Plan col end */}
            <SubscriptionCol>
              <SubscriptionPlanCard color="pink">
                <p className="plan-title">Growth Plan</p>
                <p className="plan-price">£250</p>
                <p className="plan-vat-text">+VAT</p>
              </SubscriptionPlanCard>
              <SubscriptionBtn color="pink">Get Started</SubscriptionBtn>
            </SubscriptionCol>
            {/* Growth Plan  col end */}

            <SubscriptionCol>
              <SubscriptionPlanCard>
                <div className="popular-tag">
                  <img src="./assets/img/most-popular-icon.svg" alt="" />
                  <span>Most Popular</span>
                </div>
                <p className="plan-title">Professional Plan</p>
                <p className="plan-price">£650</p>
                <p className="plan-vat-text">+VAT</p>
              </SubscriptionPlanCard>
              <SubscriptionBtn>Get Started</SubscriptionBtn>
            </SubscriptionCol>
            {/* Professional Plan  col end */}

            <SubscriptionCol>
              <SubscriptionPlanCard color="pink">
                <p className="plan-title">Enterprise Plan</p>
                <p className="plan-price">£1250</p>
                <p className="plan-vat-text">+VAT</p>
              </SubscriptionPlanCard>
              <SubscriptionBtn color="pink">Get Started</SubscriptionBtn>
            </SubscriptionCol>
            {/* Enterprise Plan  col end */}

            <SubscriptionOverLay>
              <OverlayRow>
                <OverlayCol1>
                  <p>
                    Access to All Legal Docs (No Additional cost + editable
                    files)
                  </p>
                </OverlayCol1>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
              </OverlayRow>
              {/* OverlayRow end 1 */}
              <OverlayRow>
                <OverlayCol1>
                  <p>Added to the LFM international partners programme</p>
                </OverlayCol1>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
              </OverlayRow>
              {/* OverlayRow end  2 */}
              <OverlayRow>
                <OverlayCol1>
                  <p>
                    Annual 60 minute Business Coaching Session/Tax Consultation
                    and HR Consultation
                  </p>
                </OverlayCol1>
                <OverlayCol></OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
              </OverlayRow>
              {/* OverlayRow end  3 */}
              <OverlayRow>
                <OverlayCol1>
                  <p>Free 15 minute Consultation Per Case</p>
                </OverlayCol1>
                <OverlayCol></OverlayCol>
                <OverlayCol></OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
              </OverlayRow>
              {/* OverlayRow end  4 */}
              <OverlayRow>
                <OverlayCol1>
                  <p>15% off Additional Hours</p>
                </OverlayCol1>
                <OverlayCol></OverlayCol>
                <OverlayCol></OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
                <OverlayCol>
                  <img src="./assets/img/check.svg" alt="" />
                </OverlayCol>
              </OverlayRow>
              {/* OverlayRow end  5 */}
              <OverlayRow>
                <OverlayCol1>
                  <p>Hours of legal support annually</p>
                </OverlayCol1>
                <OverlayCol>
                  <p className="text-input">0</p>
                </OverlayCol>
                <OverlayCol>
                  <p className="text-input">15</p>
                </OverlayCol>
                <OverlayCol>
                  <p className="text-input">30</p>
                </OverlayCol>
                <OverlayCol>
                  <p className="text-input">50</p>
                </OverlayCol>
              </OverlayRow>
              {/* OverlayRow end  5 */}
            </SubscriptionOverLay>
            {/* SubscriptionOverLay end */}
          </SubscriptionRow>
        </SubscriptionContainer>
      </SubscriptionSection>
      {/*SubscriptionSection end*/}

      <AdvisorSection>
        <SliderHeader className="container">
          <SliderHeaderLeft>
            <SectionTitie>Legal Services & Advisory</SectionTitie>
            <SectionSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, non
              massa commodo.
            </SectionSubtitle>
          </SliderHeaderLeft>
          <SliderHeaderReight>
            <PrvButton onClick={() => adviceSliderRef.current.slickPrev()}>
              <img src="./assets/img/arrow-left.svg" alt="prv" />
            </PrvButton>
            <NextButton onClick={() => adviceSliderRef.current.slickNext()}>
              <img src="./assets/img/arrow-right.svg" alt="next" />
            </NextButton>
          </SliderHeaderReight>
        </SliderHeader>
        <Slider ref={adviceSliderRef} {...settings}>
          <AdvisorCard>
            <AdvisorImage>
              <img src="./assets/img/image1.jpg" alt="" />
            </AdvisorImage>
            <AdvisorTitle>Employment Law</AdvisorTitle>
          </AdvisorCard>
          {/* advisor 1 end */}
          <AdvisorCard>
            <AdvisorImage>
              <img src="./assets/img/image2.jpg" alt="" />
            </AdvisorImage>
            <AdvisorTitle>Employment Law</AdvisorTitle>
          </AdvisorCard>
          {/* advisor 2 end */}
          <AdvisorCard>
            <AdvisorImage>
              <img src="./assets/img/image3.jpg" alt="" />
            </AdvisorImage>
            <AdvisorTitle>Employment Law</AdvisorTitle>
          </AdvisorCard>
          {/* advisor 2 end */}
          <AdvisorCard>
            <AdvisorImage>
              <img src="./assets/img/image4.jpg" alt="" />
            </AdvisorImage>
            <AdvisorTitle>Employment Law</AdvisorTitle>
          </AdvisorCard>
          {/* advisor 2 end */}
          <AdvisorCard>
            <AdvisorImage>
              <img src="./assets/img/image5.jpg" alt="" />
            </AdvisorImage>
            <AdvisorTitle>Employment Law</AdvisorTitle>
          </AdvisorCard>
          {/* advisor 2 end */}
          {/* <AdvisorCard>
            <AdvisorImage>
              <img src="./assets/img/advisor6.jpg" alt="" />
            </AdvisorImage>
            <AdvisorTitle>Employment Law</AdvisorTitle>
          </AdvisorCard> */}
          {/* advisor 2 end */}
        </Slider>
      </AdvisorSection>
      {/* AdvisorSection ed */}

      <LawyerSection>
        <LawyerContainer className="container">
          <LawyerHeader>
            <LawyerHeaderLeft>
              <SectionTitie>Meet the Lawyers</SectionTitie>
              <SectionSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
                non massa commodo.
              </SectionSubtitle>
            </LawyerHeaderLeft>
            <LawyerHeaderRight>
              <NormalButton>View All</NormalButton>
            </LawyerHeaderRight>
          </LawyerHeader>
          {/* LawyerHeader end */}
          <LawyerRow>
            <LawyerCol>
              <LawyerCard>
                <LawyerCardImage>
                  <img src="./assets/img/kishan-bhatt.png" alt="kishan Bhatt" />
                </LawyerCardImage>
                <LawyerCardText>
                  <p className="name">Kishan Bhatt</p>
                  <p className="position">Founder</p>
                  <p className="profession">
                    <i>Cricketer and Chef</i>
                  </p>
                  <p className="qualification">BSc (Hons) European Politics</p>
                  <a className="about-link">
                    <span>More About Me</span>
                    <img src="./assets/img/about-blue-angle.png" alt="" />
                  </a>
                </LawyerCardText>
              </LawyerCard>
            </LawyerCol>
            {/* col 1 end */}
            <LawyerCol>
              <LawyerCard>
                <LawyerCardImage>
                  <img src="./assets/img/komal-vyas.png" alt="Komal Vyas" />
                </LawyerCardImage>
                <LawyerCardText>
                  <p className="name">Komal Vyas</p>
                  <p className="position">Legal Inter</p>
                  <p className="profession">
                    <i>Lorem Ipsum</i>
                  </p>
                  <p className="qualification">
                    LLB (Hons) Law with BA Philosophy
                  </p>
                  <a className="about-link">
                    <span>More About Me</span>
                    <img src="./assets/img/about-blue-angle.png" alt="" />
                  </a>
                </LawyerCardText>
              </LawyerCard>
            </LawyerCol>
            {/* col 2 end */}
            <LawyerCol>
              <LawyerCard>
                <LawyerCardImage>
                  <img
                    src="./assets/img/bhavika-vithlani.png"
                    alt="Bhavika Vithlani"
                  />
                </LawyerCardImage>
                <LawyerCardText>
                  <p className="name">Bhavika Vithlani</p>
                  <p className="position">Trainee Solicitor</p>
                  <p className="profession">
                    <i>Baker</i>
                  </p>
                  <p className="qualification">LLB (Hons) Law</p>
                  <a className="about-link">
                    <span>More About Me</span>
                    <img src="./assets/img/about-blue-angle.png" alt="" />
                  </a>
                </LawyerCardText>
              </LawyerCard>
            </LawyerCol>
            {/* col 3 end */}
            <LawyerCol>
              <LawyerCard>
                <LawyerCardImage>
                  <img src="./assets/img/vishal-makol.png" alt="Vishal Makol" />
                </LawyerCardImage>
                <LawyerCardText>
                  <p className="name">Vishal Makol</p>
                  <p className="position">Consultant Solicitor</p>
                  <p className="profession">
                    <i>Lorem Ipsum</i>
                  </p>
                  <p className="qualification">BSc (Hons) European Politics</p>
                  <a className="about-link">
                    <span>More About Me</span>
                    <img src="./assets/img/about-blue-angle.png" alt="" />
                  </a>
                </LawyerCardText>
              </LawyerCard>
            </LawyerCol>
            {/* col 4 end */}
          </LawyerRow>
          {/* LawyerRow end */}
        </LawyerContainer>
      </LawyerSection>
      {/* LawyerSection end */}

      <HowToGuidSection>
        <HowToGuidConatiner className="container">
          <HowToGuidRow>
            <HowToGuidCol>
              <img
                src="./assets/img/how-to-guid.png"
                alt=""
                className="guid-img"
              />

              <SectionTitie>Lorem ipsum dolor sit</SectionTitie>
              <SectionSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                amet ullamcorper condimentum posuere. Ornare enim purus orci id
                senectus enim.
              </SectionSubtitle>
              <NormalButton>How to Guides</NormalButton>
            </HowToGuidCol>
            {/* HowToGuidCol end */}
            <HowToGuidCol className="right">
              <SectionTitie>Some Information About Law For Me</SectionTitie>
              <SectionSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                amet ullamcorper condimentum posuere. Ornare enim purus orci id
                senectus enim. Fames justo pretium eget est sed purus risus. Vel
                aliquet ornare velit at id aliquam facilisis. Nunc mattis.
              </SectionSubtitle>
              <NormalButton>About Us</NormalButton>
              <img
                src="./assets/img/information-about-law.png"
                alt=""
                className="info-img"
              />
              <InfoCard>
                <h2>Quam ut viverra porttitor sed.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Metus, dolor viverra sed adipiscing posuere duis.
                </p>
              </InfoCard>
            </HowToGuidCol>
            {/* HowToGuidCol end */}
          </HowToGuidRow>
          {/* HowToGuidRow end */}
        </HowToGuidConatiner>
      </HowToGuidSection>
      {/* how to guid  section*/}

      <OurTeamSection>
        <OurTeamConatiner className="container">
          <JoinOurTeamCardWrapper>
            <JoinOurTeamCard>
              <JoinOurTeamCol>
                <h2>Join Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus amet ullamcorper condimentum posuere.
                </p>
                <NormalButton>Join the Team</NormalButton>
              </JoinOurTeamCol>
              <JoinImageWrapper>
                <img src="./assets/img/join-team-img.png" alt="" />
              </JoinImageWrapper>
            </JoinOurTeamCard>
          </JoinOurTeamCardWrapper>
        </OurTeamConatiner>
        <CustomerSaySlider>
          <SliderHeader className="container">
            <SliderHeaderLeft>
              <SectionTitie>
                What our customers say about Law For Me
              </SectionTitie>
            </SliderHeaderLeft>
            <SliderHeaderReight>
              <PrvButton onClick={() => customerSliderRef.current.slickPrev()}>
                <img src="./assets/img/arrow-left.svg" alt="prv" />
              </PrvButton>
              <NextButton onClick={() => customerSliderRef.current.slickNext()}>
                <img src="./assets/img/arrow-right.svg" alt="next" />
              </NextButton>
            </SliderHeaderReight>
          </SliderHeader>
          <Slider ref={customerSliderRef} {...customerSlidesettings}>
            <CustomerSaysCard>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                id quis sapien dolor ut. Congue eget adipiscing sed consequat
                cursus nunc auctor dignissim. Ultrices sed faucibus viverra diam
                elementum in. Et pulvinar varius habitasse id amet volutpat
                aliquam.
              </p>
              <footer>
                <div>
                    <p>Ut facilisis rutrum.</p>
                    <StarContainer>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                    </StarContainer>
                </div>
                <img src="./assets/img/dummy-logo.png" alt="logo"/>
              </footer>
            </CustomerSaysCard>
            {/* card 1 */}
            <CustomerSaysCard>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                id quis sapien dolor ut. Congue eget adipiscing sed consequat
                cursus nunc auctor dignissim. Ultrices sed faucibus viverra diam
                elementum in. Et pulvinar varius habitasse id amet volutpat
                aliquam.
              </p>
              <footer>
                <div>
                    <p>Ut facilisis rutrum.</p>
                    <StarContainer>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                    </StarContainer>
                </div>
                <img src="./assets/img/dummy-logo.png" alt="logo"/>
              </footer>
            </CustomerSaysCard>
            {/* card 2 */}
            <CustomerSaysCard>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                id quis sapien dolor ut. Congue eget adipiscing sed consequat
                cursus nunc auctor dignissim. Ultrices sed faucibus viverra diam
                elementum in. Et pulvinar varius habitasse id amet volutpat
                aliquam.
              </p>
              <footer>
                <div>
                    <p>Ut facilisis rutrum.</p>
                    <StarContainer>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                          <img src="./assets/img/star.svg" alt="*"/>
                    </StarContainer>
                </div>
                <img src="./assets/img/dummy-logo.png" alt="logo"/>
              </footer>
            </CustomerSaysCard>
            {/* card 3 */}
          </Slider>
        </CustomerSaySlider>
      </OurTeamSection>
      {/* OurTeam Section  end*/}
      <FooterComponent/>
    </main>
  );
};
