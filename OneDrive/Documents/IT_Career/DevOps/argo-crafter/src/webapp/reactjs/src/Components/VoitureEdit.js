import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Form, FormGroup, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import MyToast from './myToast';
import { useParams, useNavigate } from 'react-router-dom'; // Importez useNavigate

const VoitureEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

    const initialState = {
        marque: '',
        modele: '',
        couleur: '',
        immatricule: '',
        annee: '',
        prix: '',
    };

    const [voiture, setVoiture] = useState(initialState);

    const resetVoiture = () => {
        setVoiture(initialState);
    }

    const submitVoiture = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8080/voitures/${id}`, voiture)
            .then(response => {
                if (response.status === 200) {
                    // Gérer le succès
                    console.log("Voiture mise à jour avec succès");
                    navigate("/list"); // Utilisez navigate pour rediriger vers la liste des voitures
                }
            })
            .catch(error => {
                console.error("Erreur lors de la mise à jour de la voiture :", error);
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/voitures/${id}`)
            .then(response => {
                const data = response.data;
                setVoiture({
                    marque: data.marque,
                    modele: data.modele,
                    couleur: data.couleur,
                    immatricule: data.immatricule,
                    annee: data.annee,
                    prix: data.prix,
                });
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données de la voiture :", error);
            });
    }, [id]);

    return (
        <div>
            <Card className="border borderDark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faSave} /> Modifier Voiture</Card.Header>
                <Card.Body>
                    <Form onReset={resetVoiture} onSubmit={submitVoiture} id="VoitureFormId">
                        <Row>
                            <Col>
                                <FormGroup controlId="formGridMarque">
                                    <Form.Label>Marque</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        className="bg-dark text-white"
                                        placeholder="Entrez Marque Voiture"
                                        name="marque"
                                        value={voiture.marque}
                                        onChange={(e) => setVoiture({ ...voiture, marque: e.target.value })}
                                    />
                                </FormGroup>
                            </Col>
                            {/* Ajoutez les autres champs du formulaire ici */}
                        </Row>
                        <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave} /> Modifier</Button>{' '}
                        <Button size="sm" variant="info" type="reset"><FontAwesomeIcon icon={faUndo} /> Réinitialiser</Button>
                    </Form>
                </Card.Body>
            </Card>
            <MyToast />
        </div>
    );
}

export default VoitureEdit;
