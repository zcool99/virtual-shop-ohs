import React from "react";
import Navbar from "./Navbar";
import Cart from "../../containers/Cart";
import ProductList from "../../containers/ProductList";


function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Virtual Shop</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>

        <footer>
          <small>
            powered by <a href="http://www.kikoya.mx/">Kikoya</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default Home;
