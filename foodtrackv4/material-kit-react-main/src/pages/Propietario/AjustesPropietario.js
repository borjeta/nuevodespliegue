import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import Container from "@mui/material/Container";
import NavbarPropietario from "./NavbarPropietario";
import Footer from "pages/LandingPages/Author/sections/Footer";
import Modal from '@mui/material/Modal'
import axios from "axios";
import { Button } from "components/MKButton";





function AjustesPropietario() {

    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");






    function handleCerrarFoodtrucks() {

        axios.post('http://localhost:8080/foodtruck/propietario/cerrartodas', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "user_id": `${user_id}`,
                "api_token": `${api_token}`,
                "role": `${role}`
            }
        })
            .then(function (response) {
                console.log(response);
                alert("Se han cerrado todas las foodtrucks");
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );

    }

    function handleProgramarCierres() {

    }

    function handleContactarSoporte() {
        alert("Contactar con soporte");
    }



    return (
        <div>
            <NavbarPropietario />
            <br />
            <br />
            <br />

            <Container className="container" align="center" justify-content="center" py={10}>
                <MKTypography
                    variant="h3"


                    sx={
                        {

                            textAlign: "center",
                            fontFamily: "Roboto",
                            marginBottom: 10,
                            color: "#FFFFFF",
                            fontWeight: "bold",


                        }

                    }> Panel de administración de la aplicación
                </MKTypography>
              

                <MKBox className="container"
                    align="center"
                    justify-content="center"
                    py={10}
                >
                    <div className="btn-group btn-group-justified" id="btnsGlobales" role="group" aria-label="Basic example">
                        <MKBox align="center" justify-content="center">
                            <div className="row">
                                <div className="col-md-4">
                                    <br />

                                    <MKButton
                                        color="primary"
                                        size="large"
                                        href="/admin/foodtrucks"
                                        className="btn"
                                    >
                                        Cerrar mis foodtrucks
                                    </MKButton>
                                </div>
                                <div className="col-md-4">
                                    <br />

                                    <MKButton
                                        color="primary"
                                        size="large"
                                        href="/admin/usuarios"
                                        className="btn"
                                    >
                                        Programar cierres de las Foodtrucks
                                    </MKButton>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        href="/admin/opcionesglobales"
                                        className="btn"
                                    >
                                        Contactar con soporte
                                    </MKButton>
                                </div>
                            </div>

                        </MKBox>
                    </div>

                </MKBox>
            </Container>
            <Footer />
        </div>

    );
}

export default AjustesPropietario;