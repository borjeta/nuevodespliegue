import React from "react";
import { useEffect } from "react";

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import Container from "@mui/material/Container";




function AjustesPropietario() {




    function handleCerrarFoodtrucks() {
        alert("Cerrar todas las foodtrucks");
    }

    function handleProgramarCierres() {
        alert("Programar cierres de las Foodtrucks");
    }

    function handleContactarSoporte() {
        alert("Contactar con soporte");
    }



    return (
        <div>
            <Container className="container" align="center" justify-content="center" py={10}>
                <MKTypography variant="h4" component="h2" gutterBottom id="titulopaneladmin">
                    Bienvenido al panel de administración del servicio
                </MKTypography>

                <MKBox className="container"
                    align="center"
                    justify-content="center"
                    py={10}
                >
                    <div class="btn-group btn-group-justified" id="btnsGlobales" role="group" aria-label="Basic example">
                        <div class="row">
                            <div class="col-md-3">

                                <MKButton
                                    color="primary"
                                    size="large"
                                    onClick={handleContactarSoporte}
                                    className="btnOpcionesGlobales"
                                    id="btnOpcionesGlobales"
                                >
                                    Contactar con soporte
                                </MKButton>

                            </div>
                            <div class="col-md-3">
                                <MKButton
                                    color="primary"
                                    size="large"
                                    onClick={handleCerrarFoodtrucks}
                                    className="btnOpcionesGlobales"
                                    id="btnOpcionesGlobales"
                                >
                                    Cerrar todas las foodtrucks
                                </MKButton>
                            </div>

                            <div class="col-md-3">
                                <MKButton
                                    color="primary"
                                    size="large"
                                    onClick={handleProgramarCierres}
                                    className="btnOpcionesGlobales"
                                    id="btnOpcionesGlobales"
                                >Programar cierres de las Foodtrucks
                                </MKButton>
                            </div>

                            <div class="col-md-3 ">
                                <MKButton
                                    color="primary"
                                    size="large"
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                    id="btnOpcionesGlobales"
                                    className="btnOpcionesGlobales"
                                >Volver
                                </MKButton>
                            </div>



                        </div>
                    </div>
                </MKBox >
            </Container >
        </div >
    );

}

export default AjustesPropietario;