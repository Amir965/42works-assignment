import styled from "styled-components";
export const Button = styled.button`
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
export const FooterContainer = styled.section`
   background: var(--black);
   color:#fff;
   font-weight: 300;
   font-size: 1.6rem;
   line-height: 2.9rem;
`
export const Container = styled.div``

export const FooterTop = styled.div`
        padding-top: 6.8rem;
        padding-bottom:6.8rem;
        border-bottom: 0.1rem solid #fff;
        display: flex;
        justify-content: space-between;
        .footer-h1{
          font-weight: 500;
          font-size: 4.4rem;
          line-height: 6.8rem;
        }
`;
export const TopText = styled.div`
       max-width:55.2rem;
`;

export const FooterMid = styled.div`
      display: flex;
      gap:7rem;
      padding: 5.8rem 0;
      color:rgba(251,251,251,.6);
      .move-top{
        margin-top: auto;
      }
      .link{
        display: inline-block;
        color:rgba(251,251,251,.6);
      }
`;
export const MidCol1 = styled.div`
      flex:1;
      .logo{
        margin-bottom:2.8rem;
      }
      .provided-text{
        max-width:30.7rem;
        text-align:left;
      }
`;
export const MidCol = styled.div`
      width:21rem;
      .title{
        font-weight: 600;
        font-size: 2.6rem;
        color:#fff;
        line-height: 140%;
        margin-bottom: 0.8rem;
        margin-top: 2.5rem;
      }
      .link{
        margin-top:1rem;
      }
`
export const FooterBottom = styled.section`
    border-top: 0.06rem solid rgba(251,251,251,.6);
    display: flex;
    justify-content: center;
    align-items: center;
    padding:2.4rem;
    .link{
      margin:0 2rem;
      font-weight: 300;
      font-size: 1.4rem;
      /* line-height: 140%; */
    }
`;
export const SocialLinkwrapper = styled.div`
       display: flex;
       gap:1.6rem;
       align-items: center;
       margin-top: 4rem;
`;
export const SubmitSection = styled.div`
      width: 43rem;
      .footer-check-box{
        display: inline-block;
        line-height: 0;
        span{
          width:1.7rem;
          height: 1.7rem;
          border-radius:0.3rem;
          background: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
          img{
            opacity: 0;
            transition: 0.2s;
            width: 1.1rem;
            height: 1rem;
          }
        }
        input{
          width:0;
          height:0;
          opacity:0;
          &:checked{
            +span{
              background: var(--sky-blue);
              img{
                opacity: 1;
              }
            }
          }
        }
      }
      .small-text{
        font-weight: 300;
        font-size: 10px;
        line-height: 1.8rem;
        text-align:left;
      }
`
export const InputGroup = styled.div`
    display: flex;
    gap:1.5rem;
    width:100%;
    &.bottom{
      margin-top: 2.4rem;
    }
    input{
      background: transparent;
      flex:1;
      border: 0;
      border-bottom: 0.08rem solid #FFFFFF;
      outline: 0;
      font-weight: 300;
      color:#fff;
      &::placeholder{
        color:#fff;
        font-weight: 300;
      }
    }
`
export const CopyRightSection = styled.div`
    background: rgba(251,251,251,0.1); //#FBFBFB;
    padding: 1.2rem 1.5rem;
    text-align: center;
    p{
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 180%;
    }
    .small{
      font-size: 1.2rem;
    }
`

