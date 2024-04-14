import React from 'react';
import Heading from '../../globalHeading/Heading';
import Review_slick from '../review_slick/Review_slick';

function Review() {
    let nm = 'Real Reviews by Real People';
    return (
        <>
            <Heading text={nm} col={'text-dark'} />
            <Review_slick />
        </>
    )
}

export default Review