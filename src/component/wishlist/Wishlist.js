import React from "react";
import "./wishlist.css";
import Navbar from "../navbar/Navbar";
import Category from "../section/category";
import chicken from "./chicken.png";
import Review from "../section/review/Review";
import Footer from "../section/footer/Footer";

function WishList() {
  return (
    <>
      <Navbar />
      <Category />
      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 border--bottom mb-2">
              <div className="text-center px-5">
                <h2>Wishlist</h2>
              </div>
            </div>

            <div className="col-lg-12 border--bottom">
              <div className="row">
                <div className="col-1 d-flex align-items-center">
                  <div>TrashIcon</div>
                </div>
                <div className="col-11 d-flex justify-conten-between align-items-center">
                  <div className="wishListImageText d-flex align-items-center w-90">
                    <div className="imgDiv">
                      <img src={chicken} className="img-fluid h-100" />
                    </div>
                    <div className="text-left">
                      Lorem ispdijsd asdnsbdjsaidasd asjbdasijbdbuasdas das
                      bdhash dh adsas da
                    </div>
                  </div>
                  <div className="wishListPrice">Rs.120.00</div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 border--bottom">
              <div className="row">
                <div className="col-1 d-flex align-items-center">
                  <div>TrashIcon</div>
                </div>
                <div className="col-11 d-flex justify-conten-between align-items-center">
                  <div className="wishListImageText d-flex align-items-center w-90">
                    <div className="imgDiv">
                      <img src={chicken} className="img-fluid h-100" />
                    </div>
                    <div className="text-left">
                      Lorem ispdijsd asdnsbdjsaidasd asjbdasijbdbuasdas das
                      bdhash dh adsas da
                    </div>
                  </div>
                  <div className="wishListPrice">Rs.120.00</div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 border--bottom">
              <div className="row">
                <div className="col-1 d-flex align-items-center">
                  <div>TrashIcon</div>
                </div>
                <div className="col-11 d-flex justify-conten-between align-items-center">
                  <div className="wishListImageText d-flex align-items-center w-90">
                    <div className="imgDiv">
                      <img src={chicken} className="img-fluid h-100" />
                    </div>
                    <div className="text-left">
                      Lorem ispdijsd asdnsbdjsaidasd asjbdasijbdbuasdas das
                      bdhash dh adsas da
                    </div>
                  </div>
                  <div className="wishListPrice">Rs.120.00</div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
            <button className='show_m_btn'>Show More</button>
            </div>
          </div>
        </div>
      </section>
      
      <Review />
      <Footer />
    </>
  );
}

export default WishList;
