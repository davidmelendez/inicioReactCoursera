import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CarBody,
    CardTitle, CardBody, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody,
    Button, Row, Col, Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

//
class CommentForm extends Component {

    constructor(props) {
        super(props);

        console.log('Se construye el Cooment Form, donde en los props deberia venir la definicion de la accion addcomments');
        console.log(JSON.stringify(props));
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal() {
        console.log('Entra a toggleModal');
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    RenderFormComment() {

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

        return (

            <Modal ref={this.myRef} isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating" className="form-cotrol col-md-12">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="yourname" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model='.yourname' id='yourname' name='yourname' className='form-control'
                                    validators={{ minLength: minLength(3), maxLength: maxLength(15) }}
                                ></Control.text>
                                <Errors
                                    className='text-danger'
                                    model='.yourname'
                                    show='touched'
                                    messages={{
                                        minLength: 'Must be greater than 3 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="6" className='form-control'></Control.textarea>

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 12 }}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>

                    </LocalForm>
                </ModalBody>
            </Modal>
        );
    }


    handleSubmit(values) {

        alert('Current State is:' + JSON.stringify(values));
        console.log('Envio o ejecucion de la accion addComment, que vienen en los props.: Envio de formulario para modificar el state');
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

        this.toggleModal();
        //  event.preventDefault();

    }


    render() {


        return (

            //boton
            <div>
                <Button onClick={this.toggleModal} outline >
                    <span className="fa fa-pencil fa-lg"></span>  {' '}
                    Submit Comment
                </Button>

                <div>
                    {this.RenderFormComment()}

                </div>
            </div>


        );
    }
}
//

function RenderDish({ dish }) {
    return (
        <Card>
             <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                
            <CardBody>

                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>

            </CardBody>
        </Card>
    );
}

function RenderComments({ comments, addComment, dishId }) {
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
            <div className='col-12 col-md-5 m-1'>
                {console.log('Render CoomentFomr con el prop addComment')}
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>

        </div>
    );
}

const DishDetailCF = (props) => {
     console.log('DishDetailCF IS LOADING: ' + JSON.stringify(props));
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (

            <div className='container'>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    {console.log('RenderCooments con prop addcomment')}
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />

                </div>
            </div>
        );
    }

}


export default DishDetailCF;

