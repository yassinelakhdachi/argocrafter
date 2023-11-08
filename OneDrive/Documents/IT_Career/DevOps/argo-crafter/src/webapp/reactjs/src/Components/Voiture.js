import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Form, FormGroup, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import MyToast from './myToast';
import { useParams } from 'react-router-dom';

const Voiture = () => {
    const [voiture, setVoiture] = useState({
        marque: '',
        modele: '',
        couleur: '',
        immatricule: '',
        annee: '',
        prix: ''
    });
    const [showToast, setShowToast] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/voitures/${id}`)
                .then(response => setVoiture(response.data))
                .catch(error => console.error("There was an error!", error));
        }
    }, [id]);

    const voitureChange = (event) => {
        setVoiture({ ...voiture, [event.target.name]: event.target.value });
    };

    const resetVoiture = () => {
        setVoiture({
            marque: '',
            modele: '',
            couleur: '',
            immatricule: '',
            annee: '',
            prix: ''
        });
    };

    const submitVoiture = (event) => {
        event.preventDefault();

        if (id) {
            axios.put(`http://localhost:8080/voitures/${id}`, voiture)
                .then((response) => {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
        } else {
            axios.post('http://localhost:8080/voitures', voiture)
                .then((response) => {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                    resetVoiture();
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
        }
    };

    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
    };

    return (
        <div style={formContainerStyle} className="form-container">
            {showToast && <MyToast show={showToast} message={"Voiture " + (id ? "mise à jour" : "ajoutée") + " avec succès."} type={"success"} />}
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    <FontAwesomeIcon icon={faPlusSquare} /> {id ? "Mettre à jour" : "Ajouter"} une Voiture
                </Card.Header>
                <Form onReset={resetVoiture} onSubmit={submitVoiture} id="voitureFormId">
                    <Card.Body>
                        <Row>
                            <Col>
                                <FormGroup controlId="formGridMarque">
                                    <Form.Label>Marque</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="text"
                                        name="marque"
                                        value={voiture.marque}
                                        onChange={voitureChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez la marque"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="formGridModele">
                                    <Form.Label>Modèle</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="text"
                                        name="modele"
                                        value={voiture.modele}
                                        onChange={voitureChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez le modèle"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="formGridCouleur">
                                    <Form.Label>Couleur</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="text"
                                        name="couleur"
                                        value={voiture.couleur}
                                        onChange={voitureChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez la couleur"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup controlId="formGridImmatricule">
                                    <Form.Label>Immatricule</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="text"
                                        name="immatricule"
                                        value={voiture.immatricule}
                                        onChange={voitureChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez l'immatriculation"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="formGridAnnee">
                                    <Form.Label>Année</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="text"
                                        name="annee"
                                        value={voiture.annee}
                                        onChange={voitureChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez l'année"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="formGridPrix">
                                    <Form.Label>Prix</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="text"
                                        name="prix"
                                        value={voiture.prix}
                                        onChange={voitureChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez le prix"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ "textAlign": "right" }}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> {id ? "Mettre à jour" : "Ajouter"}
                        </Button>{' '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Réinitialiser
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
}

export default Voiture;