import React from "react";
import styled, { css } from "styled-components";

// Styled components for the card
const CardContainer = styled.div`
  border: 1px solid #a19f9f;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 450px;
  margin: 16px;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  /* Media Queries */
  ${(props) =>
    props.theme === "light" &&
    css`
      @media (max-width: 768px) {
        width: 280px;
        height: 400px;
        margin: 12px;
      }

      @media (max-width: 480px) {
        width: 100%;
        height: auto;
        margin: 8px 0;
      }
    `}

  ${(props) =>
    props.theme === "dark" &&
    css`
      @media (max-width: 768px) {
        width: 280px;
        height: 400px;
        margin: 12px;
      }

      @media (max-width: 480px) {
        width: 100%;
        height: auto;
        margin: 8px 0;
      }
    `}
`;


const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 8px;
`;

const Price = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => (theme === "light" ? "#2ecc71" : "#1abc9c")};
  margin: 0 0 8px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => (theme === "light" ? "#555" : "#ccc")};
  margin: 0 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3; // Limit description to 3 lines
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Category = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => (theme === "light" ? "#888" : "#aaa")};
  margin: 0;
`;

const ExpandedContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  padding: 16px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  overflow-y: auto;

  ${CardContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

// ProductCard component
const ProductCard = ({ product, theme }) => {
  const { title, price, description, category, image } = product;

  return (
    <CardContainer theme={theme}>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Price theme={theme}>${price}</Price>
        <Description theme={theme}>{description}</Description>
        <Category theme={theme}>{category}</Category>
      </Content>

      {/* Expanded content on hover */}
      <ExpandedContent theme={theme}>
        <Title>{title}</Title>
        <Price theme={theme}>${price}</Price>
        <Description theme={theme}>{description}</Description>
        <Category theme={theme}>{category}</Category>
        {/* Add more details here if needed */}
      </ExpandedContent>
    </CardContainer>
  );
};

export default ProductCard;