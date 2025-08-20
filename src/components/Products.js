import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productsList = [
      {
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
      },
      {
        id: 2,
        lnhpdid: 2,
        licenseNumber: 2,
        licenseDate: "1994-01-01",
        revisedDate: "1994-01-01",
        timeReceipt: "1994-01-01",
        dateStart: "1994-01-01",
        productName: "Product 2",
        productNameID: 2,
        dosageFormID: 1,
        companyID: 1,
        submissionTypeID: 1,
        flagPrimaryName: "flagName",
        flagProductStatus: "flagStatus",
        flagAttestedMonograph: "mono",
        createdAt: "1994-01-01",
        updatedAt: "1994-01-01",
        deletedAt: "1994-01-01",
      },
    ];

    setProducts(productsList);
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="p-3 mb-3">Products</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>License Number</th>
              <th>License Date</th>
              <th>Revised Date</th>
              <th>Time Receipt</th>
              <th>Date Start</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <Link to={`/products/${product.id}`}>{product.productName}</Link>
                </td>
                <td>{product.licenseNumber}</td>
                <td>{product.licenseDate}</td>
                <td>{product.revisedDate}</td>
                <td>{product.timeReceipt}</td>
                <td>{product.dateStart}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
