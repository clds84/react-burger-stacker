import React, { Component } from 'react'
import IngredientList from '../components/IngredientList'
import BurgerPane from '../components/BurgerPane'

//burger stacker component is the parent of BurgerPane
//and ingredientList
//holds ingredients in state, so we can pass them as props
export default class BurgerStacker extends Component {
    //state will hold ingredients
    constructor () {
        super()
        this.state = {
            ingredients: [

                {name: 'Kaiser Bun', color: 'saddlebrown'},
                {name: 'Sesame Bun', color: 'sandybrown'},
                {name: 'Gluten Free Bun', color: 'peru'},
                {name: 'Lettuce Wrap', color: 'olivedrab'},
                {name: 'Beef Patty', color: '#3F250B'},
                {name: 'Soy Patty', color: '#3F250B'},
                {name: 'Black Bean Patty', color: '#3F250B'},
                {name: 'Chicken Patty', color: 'burlywood'},
                {name: 'Lettuce', color: 'lawngreen'},
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'}
            ],
            burgerIngredients: []
        }
    }

    //might want methods here to add ingredients, that willl be 
    //passed to a child component
    addToStack = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        this.setState({
            burgerIngredients: [
                {name: ingName, color: ingColor},
                ...this.state.burgerIngredients
            ]
        })
    }
    clearBurger = () => {
        this.setState({ 
            burgerIngredients: []
        })
    }

    //might want my clear function here, to pass down as a 
    //prop
     render () {
         console.log('ingredients list', this.state.ingredients)
         console.log('burger ingredients ', this.state.burgerIngredients)
         return (
            <>
            <h1>Burger Stacker</h1>
            <div className="panes">
                <IngredientList 
                    ingredients={this.state.ingredients}
                    add={this.addToStack}
                />
                <BurgerPane
                    ingredients={this.state.burgerIngredients}
                    clear={this.clearBurger}
                />

             </div>
            </>
        )
    }    
}