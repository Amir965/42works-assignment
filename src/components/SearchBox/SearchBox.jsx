import { Box, SearchBtn } from "./styles";

export const SearchBox = (props) => {
  return (
    <Box className={props.className}>
      <input placeholder="Search documents and topics..." />
      <SearchBtn>
        <img src="./assets/img/search-box-icon.svg" alt="search" />
      </SearchBtn>
    </Box>
  );
};
