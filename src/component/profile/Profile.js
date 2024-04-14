import React from 'react';
import Navbar from '../navbar/Navbar';
import './profile.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Footer from '../section/footer/Footer';

function Profile() {
    return (
        <>
            <Navbar />
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-5 p-3' style={{background:'#F8EDE6'}}>
                            <div className='prf_dv mx-auto my-3'>
                                <img src='' className='img-fluid' />
                                <div className='prf_ed_ic'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='22px' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" class="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                            </div>
                            <p className='prf_dv_p'>Upload Cover photo</p>
                        </div>

                        <div className='col-md-7'>
                            <div className='p-4 Prf_form_main'>
                                <h3 className='text-left my-3'>Update Profile</h3>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                                            <Form.Label>Phone No.</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="State" />
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                                            <Form.Label>DOB</Form.Label>
                                            <Form.Control type="date" placeholder="" />
                                        </Form.Group>
                                    </Row>

                                    <Button className='sub_prf my-2' type="submit">Update</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile