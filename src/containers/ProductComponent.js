import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column " key={id}>
        <Link to={`./product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img style={{ height: "300px" }} src={image} alt={title} />
              </div>
              <div style={{ height: "150px" }} className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price} </div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
