import React from 'react';
import Heading from '../../globalHeading/Heading';
import '../best_sell/style.css';
import Card from '../best_sell/Card';
import { today_deals_array } from './today_deals_array';


function Today_deal() {
    let nm = "Today's Deals";
    return (
        <>
            <section>
                <Heading text={nm} />
                <Card array={today_deals_array} />
                <button className='show_m_btn'>Show More</button>
            </section>
        </>
    )
}

export default Today_deal;