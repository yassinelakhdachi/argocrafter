import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';

class MyToast extends Component {
    render() {
        const toastCss = {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '1',
            boxShadow: '4px 8px rgba(0, 0, 0, 0.2), 6px 20px rgba(0, 0, 0, 0.2)',
        };

        const successCss = {
            backgroundColor: 'green', // Arrière-plan en vert
        };

        return (
            <div style={toastCss}>
                <Toast className="border border-success bg-success text-white">
                    <Toast.Header closeButton={false} style={successCss} className="text-white">
                        <strong className="mr-auto">Succes</strong>
                    </Toast.Header>
                    <Toast.Body style={successCss} className="text-white">Voiture enregistrée avec succès</Toast.Body>
                </Toast>
            </div>
        );
    }
}

export default MyToast;