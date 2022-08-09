import { Navbar, NavbarBrand } from 'reactstrap';
import MenuCF from './MenuCFComponent';
import { DISHES } from '../shared/dishes';
import { render } from 'react-dom';
import React, { Component } from 'react';
import DishDetailCF from './DishDetailCFComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';



{/*Componnente principal o contenerdor, no responsable de la vista, solo de
la data*/}
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: 0
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    render() {
        return (
            <div>
                <Header />
                <MenuCF dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                    
                <DishDetailCF dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            
            <Footer />
            </div>
        );

    }
}
export default Main;