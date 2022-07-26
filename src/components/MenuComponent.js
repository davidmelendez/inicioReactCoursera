import React, { Component } from 'react'
import {Media} from 'reactstrap'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends Component {

constructor(props){
    super(props);

    this.state = {
        selectedDish: null
        
    }
}

onDishSelect(dish){
    this.setState({selectedDish: dish})
}

renderDish(dish){
    if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>

                    </CardBody>
                </Card>
            );
    }else{
        return (
            <div></div>
        );
    }
}

renderDish2(dish){
    if(dish != null){
            return(
                <Card>
                   
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>

                    </CardBody>
                </Card>
            );
    }else{
        return (
            <div></div>
        );
    }
}

render(){

    const menu = this.props.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 mt-5">

                <Media tag="li">
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name}></Media>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>

            </div>

        );   
    });

    const menuCard = this.props.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5  m-1">

                <Card onClick={() => this.onDishSelect(dish)}>
                  
                        <CardImg windth="100%" src={dish.image} alt={dish.name}></CardImg>
                   
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>

                    </CardImgOverlay>
                </Card>

            </div>

        );   
    });

    return(
            <div className='container'>
                <div className='row'>
                    <Media list>
                        {menu}
                    </Media>
                    <div className='row'>
                        {menuCard}
                        </div>
                        <div className='row'>
                            {this.renderDish(this.state.selectedDish)}

                        </div>
                        <div className='row'>
                            {this.renderDish2(this.state.selectedDish)}

                        </div>
                </div>
            </div>
    );
}

}

export default Menu;