import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CarBody,
    CardTitle, CardBody
} from 'reactstrap';


function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardBody>

                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>

            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>

            {comments.map((commentItem) => {

                return (
                    <ul className="list-unstyled">
                        <li>
                            {commentItem.comment}
                        </li>
                        <li>
                            --{commentItem.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentItem.date)))}
                        </li>
                    </ul>

                );
            })}

        </div>
    );
}

const DishDetailCF = (props) => {


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={props.dish} />
                </div>
                <RenderComments comments={props.dish.comments} />
            </div>
        </div>
    );
    

}


export default DishDetailCF;