import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import Bienvenue from './Components/Bienvenue';
import Voiture from './Components/Voiture';
import VoitureListe from './Components/VoitureListe';
import VoitureEdit from "./Components/VoitureEdit";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            prix: '',
        };


    }

    submitVoiture(event) {
        alert(this.state.marque);
        event.preventDefault();
    }

    render() {
        return (
            <Router>
                <NavigationBar />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Routes>
                                <Route path="/" element={<Bienvenue />} />
                                <Route path="/add" exact element={<Voiture />} />
                                <Route path="/list" exact element={<VoitureListe />} />
                                <Route path="/edit/:id" element={<Voiture />} />
                                <Route path="/*" element={<Navigate to="/" />} />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default App;