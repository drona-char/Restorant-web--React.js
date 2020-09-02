import React, { Component } from 'react'
import{Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItems,Jumbotron,
     NavItem,Button,Modal,ModalHeader,ModalBody,Form, FormGroup, Input, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             isNavOpen:false,
             isModalOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handlelogin(event){
        this.toggleModal();
        alert  ("Username:" + this.username.value + "Password:" + this.password.value + "Remember:" + this.remember.checked);
        event.preventDefault()

    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href="/">
                    <img src="assets/images/logo.png" height="30" width="60" alt="Ristornate Con Fusion"/>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                < Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg">Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg">About Us</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg">Menu</span>
                        </NavLink>
                    </NavItem>    
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address-card fa-lg">Contact Us</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem >
                        <Button outline onClick={this.toggleModal} className="text-warning">
                            <span className="fa fa-sign-in fa-lg  ">Login</span>
                        </Button>
                    </NavItem>
                </Nav>
                </Collapse>
                </div>
                </Navbar>
                    <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristronate con fusion</h1>
                                <p>we take inspiration from the world's best coders</p>
                            </div>
                        </div>
                    </div>
                
                    </Jumbotron>   
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handlelogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password" innerRef={(input)=>this.username=input}/>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember" innerRef={(input)=>this.password=input}/>
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button className="col col-md-3 offset-md-9" type="submit" value="submit" color="primary" innerRef={(input)=>this.remember=input } >Login</Button>

                            </Form>

                        </ModalBody>
                    </Modal>  

            </React.Fragment>
        )
    }
}

export default Header ;
