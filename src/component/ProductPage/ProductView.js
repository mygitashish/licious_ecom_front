import React from "react";
import Navbar from "../navbar/Navbar";
import Category from "../section/category";
import Review from "../section/review/Review";
import Footer from "../section/footer/Footer";
import Best_sell from "../section/best_sell/Best_sell";
import Today_deal from "../section/today_deal/Today_deal";
import Recipes from "../section/recipes/Recipes";
import prd_detl from './Full Chicken Without Skin_.png';
import detl_star from './Star 2.png';
import nodetl_star from './noStar.png';
import './productView.css';
import { why_shop_detail } from "../section/why_shop/why_shop_detail";

function ProductView() {
    return (
        <>
            <Navbar />
            <Category />
            <section className="about py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <img src={prd_detl} className="img-fluid bg_img" />
                        </div>
                        <div className="col-md-6 mb-2 text-left p-3">
                            <h4>Chicken Curry Cut - Small Pieces</h4>
                            <div>
                                <img src={detl_star} className="img-fluid" />
                                <img src={detl_star} className="img-fluid" />
                                <img src={detl_star} className="img-fluid" />
                                <img src={detl_star} className="img-fluid" />
                                <img src={detl_star} className="img-fluid" />
                            </div>
                            <div className="my-3">
                                <ul className="text-left">
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>adipiscing elit, sed do eiusmod tempor incididunt ut</li>
                                    <li>labore et dolore magna aliqua. Ut enim ad minim veniam,</li>
                                    <li>quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
                                </ul>
                            </div>
                            <div className="col-9 d-flex justify-content-between detl_pq my-3">
                                <strong>Rs. 144.00</strong>
                                <div className="mx-2">
                                    <button>-</button>
                                    <span className="mx-2">1</span>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="col-9 detl_buy d-flex justify-content-between my-2">
                                <button>Buy Now</button>
                                <button>Add to cart</button>
                            </div>
                            <div className="col-10 my-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    {
                                        why_shop_detail.map((i, id) => {
                                            return (
                                                <div className="p-2" key={id}>
                                                    <div className="shadowImg">
                                                        <img src={i.icon} width='22px' className="img-fluid" />
                                                    </div>
                                                    <div className="text-center mt-2 categoryTxt">{i.text}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Recipes text="Recipes with Chicken" />
            <Today_deal />
            <Review />
            <Footer />
        </>
    );
}

export default ProductView;
