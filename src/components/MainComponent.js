import { Navbar, NavbarBrand } from 'reactstrap';
import MenuCF from './MenuCFComponent';
import { DISHES } from '../shared/dishes';
import { render } from 'react-dom';
import React, { Component } from 'react';
import DishDetailCF from './DishDetailCFComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


{/*Componnente principal o contenerdor, no responsable de la vista, solo de
la data*/}
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES/*,
            selectedDish: 0*/
        }
    }



    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    render() {

        const HomePage = () => {
            return (
                <Home></Home>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}></Route>
                    <Route exact path='/menu' component={() => <MenuCF dishes={this.state.dishes} />}></Route>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }
}
export default Main;