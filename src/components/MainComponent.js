import { Navbar, NavbarBrand } from 'reactstrap';
import MenuCF from './MenuCFComponent';
import { render } from 'react-dom';
import React, { Component } from 'react';
import DishDetailCF from './DishDetailCFComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import ContactRedux  from './ContactReduxComponent';
import { connect } from 'react-redux';


//ejercicio final segunda semana
import About from './AboutComponent';

//
import { addComment } from '../redux/ActionCreators';


//redux
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

//incoporacion llamado de Action
const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });

{/*Componnente principal o contenerdor, no responsable de la vista, solo de
la data*/}
class Main extends Component {

    constructor(props) {
        super(props);

    }



    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }


    

    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetailCF dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                  addComment={this.props.addComment} />
            );
          };


        const AboutPage = () => {
            return (
                <About leaders={this.props.leaders}></About>
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}></Route>
                    <Route exact path='/menu' component={() => <MenuCF dishes={this.props.dishes} />}></Route>
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} ></Route>
                    <Route exact path='/contactusredux' component={ContactRedux}></Route>
                    <Route exact path='/aboutus' component={AboutPage}></Route>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));