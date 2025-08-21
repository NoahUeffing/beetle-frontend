import { useState, useEffect } from "react";

const useFetchProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;
    fetch(`http://localhost:8080/v1/product/license/${productId}`)
      .then((response) => response.json())
      .then((responseData) => {
        setProduct(responseData.data || null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  return { product, loading, error };
};

export default useFetchProduct;