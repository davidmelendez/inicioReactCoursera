import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


class CommentForm extends Component {

    constructor(props) {
        super(props);
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
                                <Control.select model=".rating" id="rating"  name="rating" className="form-cotrol col-md-12">
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
                                validators={{minLength: minLength(3), maxLength: maxLength(15)}}
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

export default CommentForm;