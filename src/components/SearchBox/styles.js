import styled from "styled-components";

export const Box = styled.div`
    background: #E4F5FF;
    box-shadow: 0rem 6rem 8rem rgba(87, 152, 192, 0.1);
    border-radius: 0.8rem;
    display: flex;
    justify-content: space-between;
    input{
      background: transparent;
      flex:1;
      outline:none;
      border: 0;
      font-weight: 400;
      font-size: 1.6rem;
      color: var(--balck);
      padding:0 3.8rem;
      &::placeholder{
        color: var(--balck);
      }
    }
`;
export const SearchBtn = styled.button`
  width: 5.8rem;
  height: 5.8rem;
  border-radius:0.8rem;
  background: var(--gradient-pink);
  margin:1.3rem;
`;

