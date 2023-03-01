import styled from "styled-components";
export const Card = styled.div`
       width: 100%;
       background: #fff;
       padding: 2.5rem;
       box-shadow: 4.8rem 3.7rem 10.4rem rgba(20, 11, 72, 0.04);
       border-radius: 2rem;
`;

export const Header = styled.div`
        display: flex;
        margin-bottom: 1.2rem;
`

export const HeaderIcon = styled.div`
       display: inline-flex;
       align-items: center;
       justify-content: center;
       background:var(--sky-blue);
       width:2.6rem;
       height: 2.6rem;
       border-radius: .8rem;
`;

export const HeaderTitle = styled.h2`
       padding-left:0.7rem;
       font-weight: 600;
       font-size: 1.6rem;
       line-height: 2.8rem;
       color:var(--sky-blue);
`;

export const Content = styled.div`
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.6rem;
        color:var(--black);
`
export const ContentBtnRow = styled.div`
  display: flex;
  gap:0.8rem;
  margin:2rem 0;
  justify-content: center;
`

export const VatButton = styled.button`
            display: inline-flex;
            background: #F2F2F2;
            border-radius: 1rem;
            padding:1rem 1.2rem;
            font-weight: 600;
            font-size: 1.4rem;
            color: var(--black);
`;

export const BuyNowButton = styled.button`
            display: inline-flex;
            background:var(--sky-blue);
            border-radius: 1rem;
            padding:1rem 3.2rem;
            font-weight: 600;
            font-size: 1.4rem;
            color: white;
`;
export const AccessButton = styled.button`
            display: inline-flex;
            justify-content: center;
            background:var(--gradient-pink);
            border-radius: 1rem;
            padding:1rem 3.2rem;
            font-weight: 500;
            font-size: 1.6rem;
            color: white;
            margin-top: 1.6rem;
            width: 100%;
`;

export const OrLine = styled.div`
     position: relative;
     border-bottom: 0.1rem solid #D9D9D9;
     width: 100%;
     &:after{
        content: 'or';
        position: absolute;
        top:50%;
        left:50%;
        translate:-50% -50%;
        background: #fff;
        color: var(--black);
        font-weight: 300;
        font-size: 1.8rem;
        padding:0.3rem;
     }
`;

