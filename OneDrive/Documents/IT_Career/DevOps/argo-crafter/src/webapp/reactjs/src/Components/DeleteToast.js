import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';

class DeleteToast extends Component {
    render() {
        const toastCss = {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '1',
            boxShadow: '4px 8px rgba(0, 0, 0, 0.2), 6px 20px rgba(0, 0, 0, 0.2)',
        };

        const errorCss = {
            backgroundColor: 'red', // Arrière-plan en rouge
        };

        return (
            <div style={toastCss}>
                <Toast className="border border-danger bg-danger text-white">
                    <Toast.Header closeButton={false} style={errorCss} className="text-white">
                        <strong className="mr-auto">Good</strong>
                    </Toast.Header>
                    <Toast.Body style={errorCss} className="alert alert-danger text-white">Voiture supprimée avec succès</Toast.Body>
                </Toast>
            </div>
        );
    }
}

export default DeleteToast;
