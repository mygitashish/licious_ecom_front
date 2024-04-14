import React from 'react';
import Heading from '../../globalHeading/Heading';
import Card from '../best_sell/Card';
import { recipes_array } from './recipes_array';
import './recipes.css';

function Recipes(props) {
    let nm = props.text ? props.text :"Recipes";
    return (
        <>
            <section className='recipe_bg p-2 pb-4'>
                <Heading text={nm} col={'text-dark'} />
                <Card array={recipes_array} filter={false} />
            </section>
        </>
    )
}

export default Recipes