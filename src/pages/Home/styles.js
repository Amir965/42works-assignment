import styled from "styled-components";

export const NormalButton = styled.button`
  min-width: 14.3rem;
  height: 4.7rem;
  background:var(--gradient-pink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  color:#fff;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
`;

export const HeroSection = styled.section`
    position: relative;
    isolation: isolate;
    max-width: 100%;
    overflow: hidden;
    padding-bottom: 12rem;
    &:after{
      content: '';
      display: block;
      width: 131.6rem;
      height: 131.6rem;
      border-radius: 50%;
      background: var(--sky-blue);
      position: absolute;
      translate:-70% 0%;
      bottom: 0;
      z-index: -1;
    }
`;

export const SectionTitie = styled.h2`
      font-weight: 500;
      font-size: 4.8rem;
      color:var(--black);
      text-align: center;
      margin:0rem auto 3.2rem auto;
      max-width: 86.5rem;
`;

export const SectionSubtitle = styled.p`
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2.9rem;
      color:var(--gray-text);
      text-align:center;
      margin:0rem auto 3.2rem auto;
      max-width: 86.5rem;
`;

export const HeroContainer = styled.section`
      padding-top: 5.9rem;
      display: flex;
      justify-content: space-between;
      gap:6rem;
`;

export const HeroLeftSection = styled.section`
     width: calc(60% - 3rem);
`;

export const HeroTitle = styled.h1`
      color:var(--dark);
      font-weight: 700;
      font-size: 8rem;
      line-height: 120%;
      margin-bottom: 3.9rem;
      .blue-text{
        color:var(--sky-blue);
      }
`;

export const HeroRightSection = styled.section`
     width: calc(60% - 3rem);
     font-weight: 300;
     font-size: 1.8rem;
     line-height: 3.2rem;
     .search-box-component{
       margin:6.6rem 0 3.5rem 0;
     }
`;

export const HeroImageContainer = styled.section`
    box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.1);
    background: #fff;
    border-radius: 2rem;
    padding:0.6rem;
    img{
      max-width: 100%;
      border-radius: inherit;
    }
`;

export const WokringWithSection = styled.section`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1.6rem;
  ul{
    list-style: none;
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: space-around;
  }
`;

// hero section realted component end

export const LeagalSeaction = styled.section`
    
`;

export const LeagleContiner = styled.section`

`;

export const TabContainer = styled.section`
    margin-bottom: 5.1rem;
    display: flex;
    gap:2.5rem;
    flex-wrap: wrap;
    justify-content: center;
`;

export const TabButton = styled.button`
    font-weight: 600;
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    color: ${({ active }) => active ? '#FFFFFF' : 'var(--black)'};
    background: ${({ active }) => active ? 'var(--gradient-pink)' : '#FFFFFF'};
    box-shadow: 4.8rem 3.7rem 10.4rem rgba(20, 11, 72, 0.03);
    border-radius: 2rem;
    padding:2.4rem;
    transition: 0.25s ease-in;

    .btn-text{
      display: inline-block;
      padding-left:2.7rem;
      width: 17.5rem;
      text-align: left;
    }

    .icon{
      display: inline-flex;
      height:6.5rem;
      width:6.5rem;
      align-items: center;
      justify-content: center;
      background: ${({ active }) => active ? '#FFFFFF' : 'var(--sky-blue)'};
      border-radius: 1rem;
      transition: inherit;
      svg path{
        transition: inherit;
        fill:${({ active }) => active ? 'var(--gradient-pink)' : '#FFFFFF'};
      }
    }
`;

export const TabPanelConatiner = styled.section`
  margin:5rem 0 7.5rem 0rem;
  width:128.2rem;
  padding:4.3rem 5.3rem;
  background:rgba(242,250,255,0.6); /*#F2FAFF*/
  box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.05);
  border-radius: 2rem;
  min-height: 30rem;
  display: flex;
  justify-content: space-between;
  @media(max-width:1300px){
    width: 100%;
  }
`;

export const TabPanel = styled.section`
      display:${({ active }) => !active ? 'none' : ''};
`;

export const TabPanelLeft = styled.section`
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2.9rem;
      color: var(--gray-text);
      width:calc(50% - 1.5rem);
      .animation-img{
        max-width: 100%;
        margin-top:4rem;
      }
`;

export const TabPanelRight = styled.section`
    width:calc(50% - 1.5rem);
`;

export const TabpanelTitle = styled.h3`
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 6.8rem;
  color: var(--black);
`;

export const TabCardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:2.4rem;
`;

export const TabCardCol = styled.div`
   width: calc(50% - 1.2rem);
`;

// leagal seaction realted component end
export const SubscriptionBtn = styled.button`
    font-weight: 500;
    font-size: 1.6rem;
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width:100%;
    min-height:4.7rem;
    background: ${({ color }) => color === 'pink' ? 'var(--gradient-pink)' : 'var(--sky-blue)'};
    border-radius: 0.8rem;
`;

export const SubscriptionSection = styled.section`
    background-color:#F2FAFF;
`;

export const SubscriptionContainer = styled.section`
   padding:8.3rem 1.5rem 11.9rem 1.5rem;
`;

export const SubscriptionRow = styled.section`
   display: flex;
   gap: 0.6rem;
   position: relative;
`;

export const SubscriptionCol1 = styled.div`
        flex:1;
`;

export const SubscriptionCol = styled.div`
        width:18.5rem;
        background: #FFFFFF;
        border: 0.1rem solid #FFFFFF;
        box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.05);
        border-radius: 2rem;
        padding:0.9rem;
        min-height: 89.1rem;
        display: flex;
        flex-direction:column;
        ${SubscriptionBtn}{
          width:14.4rem;
          margin:auto auto 2rem auto;
        }
`;
export const SubscriptionOverLay = styled.div`
    position: absolute;
    top:20rem;
    left:0;
    right:0;
    bottom:9rem;
    /* background: red; */
`;

export const ExplorePlanCard = styled.div`
      width: calc(100% - 1.8rem);
      background: #fff;
      background: #F9FBFD;
      border: 0.1rem solid #EEEEEE;
      box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.05);
      border-radius: 2rem;
      padding:3.7rem 3.1rem;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 3rem;
      color: var(--black);
      min-height:16.1rem;
      margin-top: 2rem;
      ${SubscriptionBtn}{
        margin-top: 1.2rem;
      }
`;

export const SubscriptionPlanCard = styled.div`
  background: ${({ color }) => color === 'pink' ? 'var(--gradient-pink)' : 'var(--sky-blue)'};
  border-radius: 1.5rem;
  min-height:17.3rem;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 160%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  .plan-title,.plan-vat-text{
    margin-bottom: 1rem;
  }
  .plan-price{
    font-size:4rem;
    margin-bottom: 1rem;
  }
  .popular-tag{
        height:4.2rem;
        background:var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        gap:0.5rem;
        width:100%;
        border-radius: 1rem 1rem 0.5rem 0.5rem;
        margin-bottom: auto;
 }
`;

export const OverlayRow = styled.div`
     display:flex;
     margin-bottom:0.8rem;
     background: rgba(255,255,255,0.6);
     box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.05);
     border-radius: 2rem;
     min-height:9rem;
     align-items: center;
     gap:0.8rem;
`;

export const OverlayCol1 = styled.div`
     flex:1;
     padding: 1.9rem 2rem 1.9rem 3.7rem;
     font-weight: 600;
     font-size: 1.6rem;
     line-height: 160%;
     color: #000000;
`;

export const OverlayCol = styled.div`
     width:18.5rem;
     display: flex;
     align-items: center;
     justify-content: center;
     .text-input{
      min-width: 7.1rem;
      min-height: 4.2rem;
      background: #F2F6F9;
      border-radius: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.8rem;
     }
`;
/* Subscription section component end*/

export const SliderHeader = styled.section`
   display: flex;
   justify-content: space-between;
   ${SectionTitie},
   ${SectionSubtitle}{
    text-align: left;
    margin-left: 0;
    margin-right: 0;
   }
`;

export const SliderHeaderLeft = styled.section`
    flex:1;
`;

export const SliderHeaderReight = styled.section`
    
`;

export const PrvButton = styled.button`
   width:5.6rem;
   height: 5.6rem;
   border-radius:0.4rem;
   background:#E9F6FF;
   color:var(--black);
   line-height:0;
`;

export const NextButton = styled(PrvButton)`
   background: var(--sky-blue);
   color:#fff;
   margin-left:1.5rem;
`;

export const AdvisorSection = styled.div`
   max-width: 100%;
   overflow: hidden;
   padding: 11.1rem 1.5rem;
   ${SliderHeader}{
     margin-bottom:10rem;
   }
  `;

export const AdvisorCard = styled.div`
   color:#fff;
   max-width:35rem;
   border-radius: 8rem 8rem 0rem 0rem;
   padding-bottom:5.7rem;
   position: relative;
   background:#fff; 
`;

export const AdvisorImage = styled.div`
 flex:1;
 width: 100%;
 height:35.6rem;
 overflow: hidden;
 img{
  max-width:100%;
  border-radius: 8rem 8rem 1rem 1rem;
 }
`;

export const AdvisorTitle = styled.div`
    background: #FFFFFF;
    box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.02);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 2.6rem;
    color:var(--black);
    background-color: #fff;
    min-height:8.3rem;
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    width:27.9rem;
`;
/*AdvisorSection section component end */

export const LawyerSection = styled.section`

   ${SectionTitie},
   ${SectionSubtitle}{
    text-align: left;
    margin-left: 0;
    margin-right: 0;
   }
`;

export const LawyerContainer = styled.div`
      
`;

export const LawyerHeader = styled.div`
   display:flex;
   justify-content:space-between;
`;

export const LawyerHeaderLeft = styled.div`
  flex:1;
`;

export const LawyerHeaderRight = styled.div``;

export const LawyerRow = styled.div`
     display:flex;
     flex-wrap: wrap;
     gap:3.3rem;
     margin-top: 5.5rem;
     /* justify-content: space-between; */
     margin-bottom:15.5rem;
`;
export const LawyerCol = styled.div`
      /* width:275px; */
      width: calc(25% - 3.33rem);
`;

export const LawyerCard = styled.div`
     position:relative;
     padding-top:16.8rem;
     width: 100%;
`;

export const LawyerCardImage = styled.div`
        width:25.7rem;
        height:30.7rem;
        border-radius:20rem;
        position: absolute;
        left:50%;
        top:0;
        translate:-50% 0%;
        z-index: 1;
        img{
          width:100%;
          height:100%;
          border-radius:inherit;
          object-fit: cover;
        }
`

export const LawyerCardText = styled.div`
    min-height: 37.5rem;
    padding-top:16.8rem;
    background: rgba(255,255,255,0.4);
    box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .name{
      font-weight: 600;
      font-size: 2.6rem;
      line-height: 120%;
      text-align: center;
      letter-spacing: -0.03em;
      margin-bottom:1rem;
    }
    .position{
      font-size: 1.6rem;
      line-height: 130%;
      color: #1F1F1F;
      margin-bottom:0.8rem;
    }
    .profession{
      font-size: 1.4rem;
      line-height: 130%;
      color: #1F1F1F;
      font-weight:300;
      margin-bottom: 0.8rem;
    }
    .qualification{
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 140%;
      color:var(--gray-text);
      max-width: 15.5rem;
      min-height: 4.4rem;
      margin-bottom: 1.6rem;
    }
    .about-link{
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 3rem;
      color: #009EFF;
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      span{
        text-decoration-line: underline;
      }
    }
`;

/*LawyerSection components end*/

export const HowToGuidSection = styled.section`
  ${SectionTitie},
   ${SectionSubtitle}{
    text-align: left;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1.6rem;
   }
   ${NormalButton}{
    padding:1.3rem 4rem;
   }
`;

export const HowToGuidConatiner = styled.section`
      padding-bottom:15rem;
`;

export const HowToGuidRow = styled.div`
     display: flex;
     flex-wrap: wrap;
     gap:8rem;
`
export const HowToGuidCol = styled.div`
     position: relative;
     max-width: 57.4rem;
     &.right{
        max-width:49.3rem;
     }
     img{
      max-width: 100%;
      &.guid-img{
        margin-bottom: 8.8rem;
      }
      &.info-img{
        margin-top: 8.8rem;
      }
     }
`;

export const InfoCard = styled.div`
    padding:2.3rem 4.2rem 2.5rem 7.2rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(14px);
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.5rem;
    color: var(--gray-text);
    bottom: 0;
    left:50%;
    translate: -50% 50%;
    width:39.3rem;
    position: absolute;
    border-radius:0.5rem;
    border:0.3rem solid #fff;
    h2{
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 3.2rem;
      color:var(--black);
      position: relative;
      &:before{
        content: url('./assets/img/double-comma.png');
        position: absolute;
        top:0;
        left: 0;
        translate: -130% 0%;
      }
    }
`;

/*HowToGuid Section End */

export const OurTeamSection = styled.section = styled.section`
    background: #F2FAFF;
    box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.02);
    margin-top: 20rem;
    padding-bottom: 13.6rem;
    ${SectionTitie}{
      max-width:66.9rem;
    };
    ${SliderHeader}{
      margin-bottom: 8.1rem;
    }
`;

export const OurTeamConatiner = styled.section = styled.div`
        
`;

export const JoinOurTeamCardWrapper = styled.section = styled.div`
      position: relative;
      min-height:16.8rem;
`;

export const JoinOurTeamCard = styled.section = styled.div`
        width: 100%;
        min-height:35.5rem;
        background:var(--black);
        box-shadow: 4.8rem 3.7rem 10.4rem rgba(20, 11, 72, 0.03);
        border-radius: 1.5rem;
        left:0;
        translate:0 -17.5rem;
        color:#fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        padding-left:8.8rem;
`;

export const JoinOurTeamCol = styled.section = styled.div`
      font-weight: 300;
      font-size: 1.6rem;
      flex:1;
      max-width: 51.6rem;
      line-height: 2.9rem;
      h2{
        font-weight: 500;
        font-size: 4.8rem;
        color:#fff;
        margin-bottom: 2rem;
      }
      ${NormalButton}{
        padding: 1.3rem 4rem;
        margin-top:3.4rem;
      }
`;

export const JoinImageWrapper = styled.section = styled.div`
          height:100%;
          margin-left: auto;
          isolation: isolate;
          &:after{
            content:'';
            display: block;
            position: absolute;
            width: 54.5rem;
            height: 54.5rem;
            bottom:-30rem;
            right:-10rem;
            z-index: -1;
            background: var(--sky-blue);
            border-radius: 50%;
          }
          img{
            max-width: 100%;
            position: relative;
            bottom:-6.6rem;
          }
`
export const CustomerSaySlider = styled.section = styled.div`
   max-width: 100%;
   overflow: hidden;
   .slick-slide > div{
       padding: 2rem 2rem 4rem 2rem;
   }
`

export const CustomerSaysCard = styled.section = styled.div`
   background: #fff;
   border-radius: 1.6rem;
   font-weight: 300;
   font-size: 1.8rem;
   line-height: 180%;
   color: #949496;
   padding:4.8rem;
   width:100%;
   position: relative;
   isolation: isolate;
   &:before{
        content:'';
        background:url('./assets/img/double-comma-big.svg');
        background-repeat:no-repeat;
        background-size: contain;
        position: absolute;
        top:-1rem;
        left:4.8rem;
        display: block;
        width:7rem;
        height:4.7rem;
      }
   &:after{
    content:'';
    display:block;
    height:2rem;
    width: 2rem;
    border: 2.5rem solid transparent;
    position: absolute;
    border-left-color: #fff;
    rotate: -50deg;
    left: 3.8rem;
    bottom: -1rem;
    z-index: -1;
   }
   footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 140%;
    color: var(--dark);
   }
`

export const StarContainer = styled.div`
   display: flex;
   align-items: center;
   gap:0.5rem
`;
/**/ 