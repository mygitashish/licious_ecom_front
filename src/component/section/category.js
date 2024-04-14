import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./category.css";
import logo from "../navbar/log.png"; 
import chiken from "./img/chicken.png";
import exotic from "./img/exotic.png";
import meat from "./img/meat.png";
import eat from "./img/readytoeat.png";
import seefood from "./img/seefood.png";

function Category(props) {
  return (
    <section
      className={`${props.bg ? "white" : "section-bg"} py-4 position-relative`}
    >
      {props.heading ? (
        <div className="HeadingDiv">
          <h4 className="categoryHeading">Categories</h4>
        </div>
      ) : (
        ""
      )}

      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-8 col-md-12 m-auto">
            <div className="scrollableCategory d-flex align-items-center justify-content-between">
              <div className="p-1 categoryWidth">
                <div className="shadowImg">
                  <img src={chiken} className="img-fluid" />
                </div>
                <div className="text-center mt-2 categoryTxt">Chicken</div>
              </div>
              <div className="p-1 categoryWidth">
                <div className="shadowImg">
                  <img src={meat} className="img-fluid" />
                </div>
                <div className="text-center mt-2 categoryTxt">Mutton</div>
              </div>
              <div className="p-1 categoryWidth">
                <div className="shadowImg">
                  <img src={seefood} className="img-fluid" />
                </div>
                <div className="text-center mt-2 categoryTxt">Sea Food</div>
              </div>
              <div className="p-1 categoryWidth">
                <div className="shadowImg">
                  <img src={exotic} className="img-fluid" />
                </div>
                <div className="text-center mt-2 categoryTxt">Exotic items</div>
              </div>
              <div className="p-1 categoryWidth">
                <div className="shadowImg">
                  <img src={eat} className="img-fluid" />
                </div>
                <div className="text-center mt-2 categoryTxt">Ready to eat</div>
              </div>
              <div className="p-1 categoryWidth">
                <div className="shadowImg">
                  <img src={chiken} className="img-fluid" />
                </div>
                <div className="text-center mt-2 categoryTxt">Chicken</div>
              </div>
              <div className="p-1 categoryWidth">
                <div className="shadowImg">
                  <img src={meat} className="img-fluid" />
                </div>
                <div className="text-center mt-2 categoryTxt">Mutton</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
