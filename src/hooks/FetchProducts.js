import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";

const useFetchProducts = (options = {}) => {
  const {
    companyIds, // useMemo when calling to avoid unnecessary re-renders
    forms, // useMemo when calling to avoid unnecessary re-renders
    name,
    page,
    limit,
  } = options;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams();

    if (companyIds?.length) {
      companyIds.forEach(id => params.append("companyIds", id));
    }
    if (forms?.length) {
      forms.forEach(form => params.append("forms", form));
    }
    if (name) params.append("name", name);
    if (page != null) params.append("page", page);
    if (limit != null) params.append("limit", limit);

    const query = params.toString();
    const url = `${API_BASE_URL}/product/licenses${query ? `?${query}` : ""}`;

    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((resData) => {
        setProducts(resData.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

  }, [companyIds, forms, name, page, limit]);

  return { products, loading, error };
};

export default useFetchProducts;