import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// TODO: Add sort and filtering and pagination
  useEffect(() => {
    fetch(`${API_BASE_URL}/product/licenses`)
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