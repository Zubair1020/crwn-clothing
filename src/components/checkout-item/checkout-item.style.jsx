import styled from "styled-components";

const ItemWidth = styled.span.attrs(() => ({
  className: "item-width",
}))`
  width: 23%;
`;

export const CheckoutItemCon = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkGray;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const ImageCon = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Name = styled(ItemWidth)``;
export const Price = styled(ItemWidth)``;
export const QuantityCon = styled(ItemWidth)`
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;

export const DeleteButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
