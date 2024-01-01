import '../styles/Navigation.css';
import {Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import logo from '../images/logo-small.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () =>  {
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        // width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                    <Button variant="outline-success">Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
