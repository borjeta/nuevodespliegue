import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";





function AjustesPropietario() {












    return (
        <div>
            <h1>AjustesPropietario</h1>
            <Container className="container" align="center" justify-content="center" py={10}>
                <MKTypography variant="h4" component="h2" gutterBottom>
                    Bienvenido al panel de administración del servicio
                </MKTypography>

                <MKBox className="container"
                    align="center"
                    justify-content="center"
                    py={10}
                >
                    <div class="btn-group btn-group-justified" id="btnsGlobales" role="group" aria-label="Basic example">

                        <MKBox align="center" justify-content="center">
                            <MKButton
                                color="primary"
                                size="large"
                                //href="AQUI FALTA LA PETICION A LA API"
                                className="btn"
                            >
                                Contactar con soporte
                            </MKButton>
                            &nbsp;
                            &nbsp;
                            <MKButton
                                color="primary"
                                size="large"
                                href="/admin/usuarios"
                                className="btn"
                            >
                                Cerrar todas las foodtrucks
                            </MKButton>
                            &nbsp;
                            &nbsp;
                            <MKButton
                                color="primary"
                                size="large"
                                href=""
                                className="btn"
                            >
                            </MKButton>
                            Programar cierres de las Foodtrucks
                            &nbsp;
                            &nbsp;

                        </MKBox>
                    </div>

                </MKBox>
            </Container>
        </div>
    );

}

export default AjustesPropietario;