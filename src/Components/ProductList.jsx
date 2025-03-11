import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ProductCard from "./Card";

const ProductContainer = styled.div`
  padding: 10px;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  justify-content: center;
  align-items: center;
  width:100%;
  margin: 0 auto;
`;



const ProductList = ({ theme }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  // Memoize the fetchProducts function to avoid recreating it on every render
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch products on initial render
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Fetch more products when the user scrolls to the bottom
  useEffect(() => {
    if (inView && !loading) {
      fetchProducts();
    }
  }, [inView, loading, fetchProducts]);

  // Memoize the products array to avoid unnecessary re-renders
  const memoizedProducts = useMemo(() => {
    return products.map((product) => (
      <ProductCard key={product.id} product={product} theme={theme} />
    ));
  }, [products, theme]);

  return (
    <ProductContainer theme={theme}>
      {memoizedProducts}
      <div className="w-full" ref={ref}>{loading &&<h1 className="text-center text-xl w-full font-bold">Loading......</h1>}</div>
    </ProductContainer>
  );
};

export default ProductList;