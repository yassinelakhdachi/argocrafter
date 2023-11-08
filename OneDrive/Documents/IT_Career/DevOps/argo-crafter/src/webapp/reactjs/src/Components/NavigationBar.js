import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Ajoutez un fichier CSS externe

class NavigationBar extends React.Component {
    render() {
        const customStyle = {
            color: 'black', // Couleur du texte
            fontFamily: 'Arial, sans-serif', // Police d'écriture
            fontSize: '18px', // Taille de la police
        };

        const navbarStyle = {
            backgroundColor: '#D8BFD8', // Couleur de fond personnalisée
        };

        return (
            <Navbar style={navbarStyle} variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" style={customStyle}>
                        Voiture Shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/list" style={customStyle}>
                                Liste Voiture
                            </Nav.Link>
                            <Nav.Link as={Link} to="/add" style={customStyle}>
                                Ajouter Voiture
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar;