import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// TODO: Add sort and filtering and pagination
  useEffect(() => {
    fetch(`http://localhost:8080/v1/product/licenses`)
      .then((response) => response.json())
      .then((responseData) => {
        setProducts(responseData.data || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;