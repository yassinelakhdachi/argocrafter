import React, { Component } from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {Link} from "react-router-dom";

class VoitureListe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voitures: [],
            showToast: false,
            toastMessage: '',
            toastType: 'success',
        };
    }

    componentDidMount() {
        this.fetchVoitures();
    }

    fetchVoitures() {
        axios.get("http://localhost:8080/voitures")
            .then(response => response.data)
            .then(data => {
                this.setState({ voitures: data });
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données :", error);
            });
    }

    handleEditClick(voitureId) {
        // Vous pouvez ajouter ici la logique pour éditer la voiture.
        // Par exemple, mettez à jour l'état pour indiquer que vous éditez une voiture.
        console.log("Édition de la voiture avec l'ID : " + voitureId);
    }

    deleteVoiture(voitureId) {
        axios.delete(`http://localhost:8080/voitures/${voitureId}`)
            .then(response => {
                if (response.data != null) {
                    this.fetchVoitures(); // Rechargez la liste des voitures après la suppression
                    this.setState({
                        showToast: true,
                        toastMessage: "Voiture supprimée avec succès",
                        toastType: 'success',
                    });
                }
            })
            .catch(error => {
                console.error("Erreur lors de la suppression de la voiture :", error);
                this.setState({
                    showToast: true,
                    toastMessage: "Erreur lors de la suppression de la voiture",
                    toastType: 'error',
                });
            });
    }

    render() {
        return (
            <div>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header><FontAwesomeIcon icon={faList} /> Liste Voitures</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Marque</th>
                                <th>Modèle</th>
                                <th>Couleur</th>
                                <th>Immatricule</th>
                                <th>Année</th>
                                <th>Prix</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.voitures.length ? (
                                this.state.voitures.map(voiture => (
                                    <tr key={voiture.id}>
                                        <td>{voiture.marque}</td>
                                        <td>{voiture.modele}</td>
                                        <td>{voiture.couleur}</td>
                                        <td>{voiture.immatricule}</td>
                                        <td>{voiture.annee}</td>
                                        <td>{voiture.prix}</td>
                                        <td>
                                            <Link to={"/edit/" + voiture.id} className="btn btn-warning" onClick={() => this.handleEditClick(voiture.id)}>
                                                <FontAwesomeIcon icon={faEdit} /> Éditer
                                            </Link>

                                            <Button
                                                variant="danger"
                                                onClick={() => this.deleteVoiture(voiture.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} /> Supprimer
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" align="center">Aucune Voiture n'est disponible.</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Card.Footer>
                        <Table bordered hover striped variant="dark">
                            <tbody>
                            <tr>
                                <td colSpan="7" align="center">{this.state.voitures.length} Voitures disponibles</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Footer>
                </Card>
                {this.state.showToast && (
                    <div className={`alert alert-${this.state.toastType}`} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '1', boxShadow: '4px 8px rgba(0, 0, 0, 0.2), 6px 20px rgba(0, 0, 0, 0.2)' }}>
                        {this.state.toastMessage}
                    </div>
                )}
            </div>
        );
    }
}

export default VoitureListe;