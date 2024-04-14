import React, { useState } from 'react';
import './style.css';
import star from './Star 2.png';
import fltr from './filter-1634626-1389150 1.png';


function Card(props) {

    const [filter, setFilter] = useState(false);
    const [sortedItems, setSortedItems] = useState([...props.array]);

    // const sortByHighToLow = () => {
    //     const sorted = [...props.array].sort((a, b) => b - a);
    //     setSortedItems(sorted);
    // };

    // const sortByLowToHigh = () => {
    //     const sorted = [...props.array].sort((a, b) => a - b);
    //     setSortedItems(sorted);
    // };

    // const sortAlphabeticallyAZ = () => {
    //     const sorted = [...props.array].sort((a, b) => a.localeCompare(b));
    //     setSortedItems(sorted);
    // };

    // const sortAlphabeticallyZA = () => {
    //     const sorted = [...props.array].sort((a, b) => b.localeCompare(a));
    //     setSortedItems(sorted);
    // };

    return (
        <>
            <div className='container'>
                <div className={props.filter ? "row mt-5 py-5" : "row"}>
                    {
                        (props.filter == true) ?
                            <div className='col-md-12 fltr_main'>
                                <div className='text-end my-2'>
                                    <img src={fltr} onClick={() => setFilter(!filter)} />
                                </div>
                                {
                                    filter &&
                                    <ul>
                                        {/* <li onClick={() => sortByLowToHigh()}>Low to High</li>
                                        <li onClick={() => sortByHighToLow()}>High to Low</li>
                                        <li onClick={() => sortAlphabeticallyAZ()}>A to Z</li>
                                        <li onClick={() => sortAlphabeticallyZA()}>Z to A</li> */}
                                        <li>Low to High</li>
                                        <li>High to Low</li>
                                        <li>A to Z</li>
                                        <li>Z to A</li>
                                    </ul>
                                }
                            </div> :
                            ''
                    }
                    {
                        props.array.map((i, id) => {
                            return (
                                <div className='col-md-3 mt-3' key={id}>
                                    <div className="card">

                                        <div className="image border">
                                            <img width='' />
                                        </div>
                                        <div className='py-3 px-2'>
                                            <div className=''>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>hello</h5>
                                                    <h5><strong>400G</strong></h5>
                                                </div>
                                                <div className='text-left'>
                                                    <img src={star} width='15px' />
                                                    <img src={star} width='15px' />
                                                    <img src={star} width='15px' />
                                                    <img src={star} width='15px' />
                                                    <img src={star} width='15px' />
                                                </div>
                                            </div>

                                            <p className="description text-left">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="price">$4.49</span>
                                                    <span className="cut_prc mx-2">$10.00</span>
                                                </div>
                                                <button className='add_cart'>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Card