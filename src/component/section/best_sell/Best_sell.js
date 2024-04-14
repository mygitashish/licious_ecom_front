import React from 'react';
import Heading from '../../globalHeading/Heading';
import './style.css';
import { best_sell_array } from './best_sell_array';
import Card from './Card';

function Best_sell() {
    let nm = 'Best Sellers';
    return (
        <>
            <section>
                <Heading text={nm} />
                <Card array={best_sell_array} />
                <button className='show_m_btn'>Show More</button>
            </section>
        </>
    )
}

export default Best_sell;