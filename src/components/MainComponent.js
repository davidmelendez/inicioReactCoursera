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
import ContactRedux from './ContactReduxComponent';
import { connect } from 'react-redux';

//control de formularios
import { actions } from 'react-redux-form';

//ejercicio final segunda semana
import About from './AboutComponent';

//

import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';



//redux
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
        
    }
}


console.log('Crea la const mapDispatchToProps que despacha las acciones los props para ser utilizada en los hijo: MainComponent');
//incoporacion llamado de Action
const mapDispatchToProps = dispatch => ({


   // addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
    

});




{/*Componnente principal o contenerdor, no responsable de la vista, solo de
la data*/}
class Main extends Component {

    constructor(props) {
        super(props);
      
    

    }


   

    componentDidMount() {
        console.log('FetchDisches en DidMount porque?');
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }



    
    render() {
        

        const HomePage = () => {
            console.log('carga de props en main ' + this.props.dishes.isLoading)
            return (
                
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}

                />
            );
        }

        const DishWithId = ({ match }) => {
            console.log('DishWithId ' + JSON.stringify(this.props));
            return (
                <DishDetailCF dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment} />
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
                    <Route exact path='/contactusredux' component={() => <ContactRedux resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path='/aboutus' component={AboutPage}></Route>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }
}

console.log('El export de Main genera la coneccion de las acciones con las vistas para poderlas llamar: MainComponent');
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));