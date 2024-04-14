import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../section/footer/Footer';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './payment.css';
import wllt from './credit-card 1.png';
import paypal from './paypal.png';
import p3 from './Group 78831.png';
import pymnt_img from './pymnt_img.png';

function Payment() {
    return (
        <>
            <Navbar />
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-7 p-4 my-2'>
                            <div className='p-2 pay_main '>
                                <ProgressBar now={50} />
                                <div className='sh_'></div>

                                <div className='bl_'></div>

                                <div className='co_'></div>
                            </div>

                            <div>
                                <h5 className='text-left my-3'>Payment Method</h5>
                                <div className='d-flex justify-content-start my-4'>
                                    <div className=' d-flex align-items-center'>
                                        <input type='radio' name='payment' id='wllt' className='mx-3' />
                                        <label for='wllt'>
                                            <img src={wllt} />
                                        </label>
                                    </div>
                                    <div className='mx-3 d-flex align-items-center'>
                                        <input type='radio' name='payment' id='ppl' className='mx-3' />
                                        <label for='ppl'>
                                            <img src={paypal} />
                                        </label>
                                    </div>
                                    <div className='mx-3 d-flex align-items-center'>
                                        <input type='radio' name='payment' id='p3' className='mx-3' />
                                        <label for='p3'>
                                            <img src={p3} />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className='text-left my-3'>Payment Details</h5>
                                <div>
                                    <input type='text' className='form-control my-3' placeholder='Enter Name on Card' />
                                    <select className='form-control my-2'>
                                        <option value=''>Choose an option</option>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </select>
                                    <div className='d-flex my-3'>
                                        <input type='text' className='w-50 me-2 form-control' placeholder='Enter Name on Card' />
                                        <input type='text' className='w-50 form-control' placeholder='Enter Name on Card' />
                                    </div>
                                    <div className='my-3'>
                                        <p className='text-left' style={{fontSize:'14px'}}>By Clicking “Confirm Payment” I agree to the companies term of services</p>
                                    </div>
                                    <div className='paymnt_btn my-5'>
                                        <button>Back</button>
                                        <button>Confirm Payment: Rs.140.00</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-5'>
                            <div className='w-100 h-100' style={{backgroundImage:'url("https://shots.codepen.io/username/pen/EPGJXJ-800.jpg?version=1559069629")'}}>
                                {/* <img src= width='100%' height='530px' className='pymnt_img' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Payment;
