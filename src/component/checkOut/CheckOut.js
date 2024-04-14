import React from 'react';
import Navbar from '../navbar/Navbar';
import Category from '../section/category';
import Review from '../section/review/Review';
import Footer from '../section/footer/Footer';
import chicken from "../wishlist/chicken.png";
import './checkOut.css';

function CheckOut() {
    
    const heading = "";

    return (
        <>
            <Navbar />
            <Category heading={heading} />
            <section className='py-4'>
                <div className='container'>
                    <h2 className='my-4'>Your Cart</h2>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className="container">
                                <div className="row cart_lft">
                                    <div className="col-lg-12 border--bottom">
                                        <div className="row">
                                            <div className="col-1 d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
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
                                            <div className="col-1 d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </div>
                                            <div className="col-11 d-flex justify-conten-between align-items-center">
                                                <div className="wishListImageText d-flex align-items-center w-90">
                                                    <div className="imgDiv">
                                                        <img src={chicken} className="img-fluid h-100" />
                                                    </div>
                                                    <div className="text-left">
                                                        Lorem ispdijsd asdnsbdj saidasd asjbdasijbdbuasdas das bdhash dh adsas da
                                                    </div>
                                                </div>
                                                <div className="wishListPrice">Rs.120.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 border--bottom">
                                        <div className="row">
                                            <div className="col-1 d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </div>
                                            <div className="col-11 d-flex justify-conten-between align-items-center">
                                                <div className="wishListImageText d-flex align-items-center w-90">
                                                    <div className="imgDiv">
                                                        <img src={chicken} className="img-fluid h-100" />
                                                    </div>
                                                    <div className="text-left">
                                                        Lorem ispdijsd asdnsbdjsaidasd asjbdasijbdbuasdas das bdhash dh adsas da
                                                    </div>
                                                </div>
                                                <div className="wishListPrice">Rs.120.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='w-75 p-3 mx-auto'>
                                <div className='chk_hd py-3'>
                                    <h4>Order Summary</h4>
                                </div>
                                <div className='chk_tbl'>
                                    <table className='table m-0'>
                                        <tbody>
                                            <tr>
                                                <th>Subtotal</th>
                                                <td>Rs.140.00</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <td>Free</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='m-0 px-4 py-2'>Add Coupon code</p>
                                    <div className='chk_prc py-3 px-2 d-flex justify-content-between'>
                                        <span>Total</span>
                                        <span>Rs.140.00</span>
                                    </div>
                                </div>
                                <div className='chk_btn mt-2'>
                                    <button>CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Review />
            <Footer />
        </>
    )
}

export default CheckOut