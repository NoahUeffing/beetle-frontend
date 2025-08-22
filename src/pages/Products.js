import { Link } from "react-router-dom";
import useFetchProducts from "../hooks/FetchProducts";
import { PRODUCT_DETAIL_PAGE } from "../constants";
import { useMemo } from "react";

const Products = () => {
  const forms = useMemo(() => ["cf51365d-e460-4021-961e-a02277424c98"], []);
  const { products, loading, error } = useFetchProducts({
  });

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">Error: {error.message}</div>;

  return (
    <div className="text-center">
      <h2 className="p-3 mb-3">Products</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Date Start</th>
            <th>Dosage Form ID</th>
            <th>Company ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`${PRODUCT_DETAIL_PAGE.replace(':productId', product.id)}`}>{product.product_name}</Link>
              </td>
              <td>{product.date_start}</td>
              <td>{product.dosage_form_id}</td>
              <td>{product.company_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;