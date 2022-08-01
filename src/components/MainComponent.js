import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { render } from 'react-dom';
import React, { Component } from 'react';
import DishDetail from './DishdetailComponent ';



{/*Componnente principal o contenerdor, no responsable de la vista, solo de
la data*/}
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Opction 1</NavbarBrand>
                        <NavbarBrand href="/">Opction 2</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                    
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );

    }
}
export default Main;