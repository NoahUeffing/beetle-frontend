import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myProduct = {
      id: 1,
      lnhpdid: 1,
      licenseNumber: 1,
      licenseDate: "1994-01-01",
      revisedDate: "1994-01-01",
      timeReceipt: "1994-01-01",
      dateStart: "1994-01-01",
      productName: "Product 1",
      productNameID: 1,
      dosageFormID: 1,
      companyID: 1,
      submissionTypeID: 1,
      flagPrimaryName: "flagName",
      flagProductStatus: "flagStatus",
      flagAttestedMonograph: "mono",
      createdAt: "1994-01-01",
      updatedAt: "1994-01-01",
      deletedAt: "1994-01-01",
    };
    setProduct(myProduct);
  }, [id]);
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
