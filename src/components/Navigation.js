import '../styles/Navigation.css';
import Container from 'react-bootstrap/Container';
import logo from '../images/logo-small.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    George Automotive
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#reviews">Reviews</Nav.Link>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
