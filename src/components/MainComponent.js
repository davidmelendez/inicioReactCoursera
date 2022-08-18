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
import Contact from './ContactComponent';

//ejercicio single page aplications
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {DISHES2} from '../shared/dishes2';


{/*Componnente principal o contenerdor, no responsable de la vista, solo de
la data*/}
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES2,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }



    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    
    render() {

        const HomePage = () => {
            return (
                <Home
                  dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                 promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
                 leader= {this.state.leaders.filter((leader) => leader.featured)[0]} 
                ></Home>
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetailCF dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
    

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}></Route>
                    <Route exact path='/menu' component={() => <MenuCF dishes={this.state.dishes} />}></Route>
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} ></Route>
                    
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }
}
export default Main;