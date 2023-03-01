import {
  Card,
  Header,
  HeaderIcon,
  HeaderTitle,
  Content,
  ContentBtnRow,
  VatButton,
  BuyNowButton,
  OrLine,
  AccessButton,
} from "./styles";

export const DocumentCard = ({ title, vat, contentText }) => {
  return (
    <Card>
      <Header>
        <HeaderIcon>
          <img
            src="./assets/img/fluent_document-bullet-list-icon.svg"
            alt="icon"
          />
        </HeaderIcon>
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <Content>
        <p>{contentText}</p>
        <ContentBtnRow>
          <VatButton>£{vat} + VAT</VatButton>
          <BuyNowButton>Buy Now</BuyNowButton>
        </ContentBtnRow>
        <OrLine></OrLine>
        <AccessButton>Access for Free</AccessButton>
      </Content>
    </Card>
  );
};
