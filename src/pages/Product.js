import { useParams } from "react-router-dom";
import useFetchProduct from "../hooks/FetchProduct";

const Product = () => {
    const { productId } = useParams();
    const { product, loading, error } = useFetchProduct(productId);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">Error: {error.message}</div>;

  return (
    <>
      <div className="text-center">
        <h2 className="p-3 mb-3">Product: {product.product_name}</h2>
        <hr />
        <p>LNHPID: {product.lnhp_id}</p>
        <p>License Date: {product.license_date}</p>
        <p>Revised Date: {product.revised_date}</p>
        <p>Time Receipt: {product.time_receipt}</p>
        <p>Date Start: {product.date_start}</p>
        <p>Company ID: {product.company_id}</p>
        <p>Dosage Form ID: {product.dosage_form_id}</p>
        <p>Flag Product Status: {product.flag_product_status}</p>
      </div>
    </>
  );
};

export default Product;
