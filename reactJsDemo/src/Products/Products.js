import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../CommanPage/header";
import apiUrl from "../Apis/apiPath";
import token from "../Apis/token";
import helper from "../Apis/helper";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const getData = async () => {
    let path = apiUrl.get_Products;
    const fr = await helper.get(path, token.static_token);
    const res = await fr.response.json();
    if (res.data) {
      setProductList(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <section className="section-products bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h2>All Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {productList &&
              productList.map((item, index) => {
                return (
                  <div className="col-md-6 col-lg-4 col-xl-4" key={index}>
                    <h5>{item?.attributes?.category}</h5>
                    <div className="card product-item">
                      <span className="top-right rounded-pill">Cart</span>
                      <img
                        src={
                          apiUrl.api_url +
                          item?.attributes?.image?.data?.attributes?.url
                        }
                        className="card-img-top shadow-sm bg-white rounded card-img"
                        alt="..."
                      />
                      <Link
                        to={{pathname:`/products-deatils/${item.id}`}}
                        className="card-body item-deatil"
                      >
                        <h3 className="product-title">
                          {item?.attributes?.Title}
                        </h3>
                        <h4 className="product-price">
                          R {item?.attributes?.price.toFixed(2)}
                        </h4>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
