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
        <h2 className="p-3 mb-3">Product: {product.productName}</h2>
        <hr />
        <p>License Number: {product.licenseNumber}</p>
        <p>License Date: {product.licenseDate}</p>
        <p>Revised Date: {product.revisedDate}</p>
        <p>Time Receipt: {product.timeReceipt}</p>
        <p>Date Start: {product.dateStart}</p>
        <p>Company ID: {product.companyID}</p>
      </div>
    </>
  );
};

export default Product;
