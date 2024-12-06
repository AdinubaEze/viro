import React, { useState } from "react";
import { products } from "../../source";
import { IoMdMore } from "react-icons/io";
import { Pagination } from "antd";
import "./BestSelling.css";

const BestSelling = () => {
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const total = products.length;
  const indexOfLastPage = page * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const productsToDisplay = products.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <section className="card best-selling">
      <div className="top">
        <h2 className="title">Best Selling</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th className="m-hide">ID</th>
            <th>Title</th>
            <th className="m-hide">Category</th>
            <th className="m-hide">Brand</th>
            <th>Price</th>
            <th className="m-hide">Rating</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsToDisplay.map((product, key) => (
            <tr key={key}>
              <td className="m-hide">{product.id}</td>
              <td>{product.title}</td>
              <td className="m-hide">{product.category}</td>
              <td className="m-hide">{product.brand}</td>
              <td>${product.price}</td>
              <td className="m-hide">{product.rating}</td>
              <td>{product.orders}</td>
              <td>
                <IoMdMore />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={postPerPage}
        total={total}
        current={page}
        showSizeChanger
        showQuickJumper
        onShowSizeChange={(current, pageSize) => {
          setPostPerPage(pageSize);
        }}
        className="pagination"
      />
    </section>
  );
};

export default BestSelling;
