import React from 'react'
import classes from './PizzaImage.module.css'
import pizzaimg from '../../assets/original.jpg'
const PizzaImage = () => {
    return (
        <div className={classes.PizzaImage}>
            <img src={pizzaimg} className={classes.PizzaImg} />
        </div>
    )
}

export default PizzaImage