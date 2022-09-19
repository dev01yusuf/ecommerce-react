import React, { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="bottons d-flex justify-center mb-3 pb-3">
          <button
            className="btn btn-outline-dark me-2"
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Men's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Electronic
          </button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">ss
                <div class="card h-100"  key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">
                      ${product.price}
                      </p>
                   
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-2 py-2">
        <div className="row">
          <div className="col-12">
            <h1>Latest Products</h1>
          </div>
        </div>

        <div className="row">
          {loading ? <Loading /> : <ShowProducts />}
          dd
        </div>
      </div>
    </div>
  );
}
export default Products;
