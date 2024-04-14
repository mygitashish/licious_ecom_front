import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { review_array } from './review_array';
import './review.css';
import colln from './rev_arr.png';
import axios from 'axios';


function Review_slick() {

    const [data, setData] = useState();

    const getData = () => {
        axios.get('https://dummyjson.com/products').then(response => {
            setData(response.data.products);
            // console.log(response.data.products);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <section className='container'>
                <Carousel interval={null} indicators={false}>
                    {
                        data?.map((review, index) => (
                            <Carousel.Item key={index}>
                                <div className='rev_slk_main my-5'>
                                    <img src={review.thumbnail} className='rev_img' />
                                    <div className='my-3'>
                                        <img src={colln} width='50px' />
                                    </div>
                                    <div className='my-2'>
                                        <p>{review.description}</p>
                                    </div>
                                    <div className='hr'></div>
                                    <div className='my-2'>
                                        <h6>{review.brand}</h6>
                                        <h3>{review.category}</h3>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </section>
        </>
    )
}

export default Review_slick;
