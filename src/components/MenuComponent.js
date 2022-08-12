import React, { Component } from 'react'
import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);

        console.log('Menu Component constructor is invoked.');
    }



    componentDidMount() {

        console.log('Menu Component componentDidMount is invoked.');
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>

                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {


        console.log('Menu Component render is invoked');
        const menuCard = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5  m-1">

                    <Card /*onClick={() => this.props.onClick(dish.id)}*/>

                        <CardImg windth="100%" src={dish.image} alt={dish.name}></CardImg>

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>

                        </CardImgOverlay>
                    </Card>

                </div>

            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {

                        <div className='row'>
                            {menuCard}
                        </div>
                    }</div>



            </div>
        );
    }

}

export default Menu;