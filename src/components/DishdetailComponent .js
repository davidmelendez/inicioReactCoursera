import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CarBody, CardTitle, CardBody } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (

                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>

                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>

                        </CardBody>
                    </Card>
                </div>


            );
        } else {
            return (
                <div></div>
            );
        }
    };

    renderComments(dishComments) {
        if (dishComments != null) {
            {/*map de commnets => id, rating, comment, author, date */ }
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>

                    {dishComments.map((commentItem) => {

                        return (
                            <ul className="list-unstyled">
                                <li>
                                    {commentItem.comment}
                                </li>
                                <li>
                                    --{commentItem.author}, {commentItem.date}
                                </li>
                            </ul>

                        );
                    })}

                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    };

    render() {


        if (this.props.dish != null) {
            return (
                <div className='row'>
                    {this.renderDish(this.props.dish)}

                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        } else {
            <div></div>
        }
    }
}

export default DishDetail;