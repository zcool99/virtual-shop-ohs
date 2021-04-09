import React from "react";
import Navbar from "../Home/Navbar";


function Confirm() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2>Confirm order!</h2>

            <div className="panel panel-default">
              <div className="panel-body">Your products!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
