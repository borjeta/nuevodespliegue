import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const endpoint = "http://localhost:8000/api/foodtrucks/ubicacion";


const MapsView = (id) => {
    /*Muestra en un container central la ubicacion de las foodtrucks en el mapa*/
    /*Pide al backend la ubicacion de la foodtruck*/
    const [foodtruck, setFoodtruck] = useState([]);
    const $token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

       axios.get(`${endpoint}/${id}`, { headers: { 'Authorization': `Bearer ${$token}` } })
                .then((res) => {
                    const data = JSON.stringify(res.data);
                    setFoodtruck(JSON.parse(data));
                })
                .catch((err) => {
                    console.log(err);
                });

    /*carga en un elemento de html el mapa de google maps con la ubicacion de la foodtruck*/
    const handleUbicacion = (ubicacion) => {
        var URLUbicacion = `https://www.google.com/maps/search/?api=1&query=${ubicacion}`;
    }
    return (
        <div>
            <div class="container">
                <h1>Ubicación - Tu foodtruck favorita está aquí</h1>
                <div class="row">
                    <iframe src={URLUbicacion} width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default MapsView;