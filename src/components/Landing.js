import React from 'react';
import { NavLink } from 'react-router-dom';
import './Landing.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Landing = () => {
    return (<>

    <Navbar collapseOnSelect expand="lg" style={{position:"relative",width:"125%",backgroundColor:"",}}>
    <Container>
      <Navbar.Brand href="/home"><h1 style={{fontSize:"5 0px",}}>Shesha</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/> 
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" style={{position:"relative",left:"-12%",}}>
         <Nav.Link href="/Register" style={{color:"black",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>HOME</Nav.Link>
          <Nav.Link href="/Register"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>LESSONS</Nav.Link>
          <Nav.Link href="/Register"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>RECIPES</Nav.Link>
          <Nav.Link href="/Register"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>ARTICLES</Nav.Link>
          <Nav.Link href="/Register"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>OUR BRANDS</Nav.Link>

          <Nav.Link href="/"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>CONTACT</Nav.Link>

          <NavDropdown title="ABOUT US"  id="collasible-nav-dropdown"style={{fontSize:"17px",fontWeight:"600",color:"white",position:"relative",left:"20%",}}>
            <NavDropdown.Item href="/About">About Shehsha</NavDropdown.Item>
            <NavDropdown.Item href="/FoodService">
              About Food Service
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
        <div className="bg">
        <h2 className="text-start text-light my-5" style={{position:"relative",top:"130px",left:"5%",fontSize:"50px", fontWeight:"600",}}>Welcome <br/> to SHESHA Food Recipe Website.<br/><span style={{color:"green",fontSize:"25px", fontWeight:"600",}}>We Hope You Enjoy</span></h2>
        
        <p className="text-start text-light my-5" style={{position:"relative",top:"130px",left:"5%",}}><span style={{color:"whitesmoke",fontSize:"25px",}}>This food recipes layout pack allows you to focus on what's really important which is the tasty <br/>recipes you've worked on so passionately.</span></p>
        <div >
        <NavLink to="/Register"><Button variant="outline-light" style={{ position: "relative", top: "140px", left: "10%", fontWeight:"600", borderRadius:"50px", height:"60px", width:"100px",}}>Sign Up</Button>{' '}</NavLink>
        <NavLink to="/Login"><Button variant="outline-light" style={{ position: "relative", top: "140px", left: "14%", fontWeight:"600",borderRadius:"50px", height:"60px",width:"100px", }}>LogIn</Button>{' '}</NavLink> 
        </div>
        </div>
    </>)
}
