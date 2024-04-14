import React from 'react';
import './footer.css';
import logo from '../../navbar/log.png';
import fb from './fb.png';
import insta from './insta.png';
import twi from './twitter.png';
import yt from './youtube.png';
import vct from './vector.png';

function Footer() {
    return (
        <>
            <footer className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2 text-left '>
                            <div className='foot_inf_text'>
                                <h5 className='text-light'>Information</h5  >
                            </div>
                            <ul className='foot_nav px-0 py-3 m-0'>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Category</a></li>
                                <li><a href='#'>My Account</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Cookies Policy</a></li>
                            </ul>
                        </div>

                        <div className='col-md-8'>
                            <div>
                                <img src={logo} width='100px' />
                            </div>
                            <div className='my-2'>
                                <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                            <div className='foot_socl'>
                                <div><img src={fb} /></div>
                                <div><img src={insta} /></div>
                                <div><img src={twi} /></div>
                                <div><img src={yt} /></div>
                                <div><img src={vct} /></div>
                            </div>
                        </div>

                        <div className='col-md-2 cont_main'>
                            <div className='foot_cont_text'>
                                <h5 className='text-light text-left'>Contact Us</h5>
                            </div>
                            <div className='py-3'>
                                <div className='d-flex align-items-start my-2'>
                                    <div className='ph_'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className='ml-2'>
                                        <p><a href='#'>+91 12345-54321</a></p>
                                        <p><a href='#'>+91 12345-54321</a></p>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center my-2'>
                                    <div className='ph_'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p><a href='mailto:loramipsum@gmail.com'>loramipsum@gmail.com</a></p>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center my-2'>
                                    <div className='ph_'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p><a href='#'>Lorem Ipsum, Sector 61, is Dummy text is typesetting</a></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='foot_cpyrgt'>
                <p className='m-0 text-light py-3'>Copyright © 2023 SHMS.com</p>
            </div>
        </>
    )
}

export default Footer;