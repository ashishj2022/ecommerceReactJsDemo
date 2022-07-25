import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiUrl from "../Apis/apiPath";
import helper from "../Apis/helper";
import token from "../Apis/token";
import HeaderComponent from "../CommanPage/header";

const ProductsDeatils = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewProduct, setViewProduct] = useState({});

  useEffect(() => {
    updateProducts();
  }, []);

  const updateProducts = () => {
    if (id !== undefined) {
      getProductDeatis(id);
    } else {
      navigate("/");
    }
  };

  const getProductDeatis = async (id) => {
    let path = apiUrl.get_Product_Deatlis + id + "?populate=*";
    const fr = await helper.get(path, token.static_token);
    const res = await fr.response.json();
    if (res.data) {
      setViewProduct(res?.data?.attributes);
    }
  };

  return (
    <React.Fragment>
      <HeaderComponent />
      <section className="section-products bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-6 col-lg-4 col-xl-6">
              <div className="card product-item">
                <img
                  src={
                    apiUrl.api_url + viewProduct?.image?.data?.attributes?.url
                  }
                  className="card-img-deatil shadow-sm bg-white rounded "
                  alt="..."
                />
              </div>
            </div>
            <div className="item-deatil">
              <h3 className="product-title"> {viewProduct?.Title}</h3>
              <h4 className="product-price"> R{viewProduct?.price}</h4>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <button className="btn-style rounded-pill"> Add to Cart </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductsDeatils;
