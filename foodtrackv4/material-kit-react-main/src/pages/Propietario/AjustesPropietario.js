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
import MKInput from "components/MKInput";





function AjustesPropietario() {

    const [show, setShow] = useState(false);
    const [showconfirmcerrar, setShowconfirmcerrar] = useState(false);
    const handleCloseConfirmCerrar = () => setShowconfirmcerrar(false);
    const handleOpenConfirmCerrar = () => setShowconfirmcerrar(true);
    const [showmensajeerror, setShowmensajeerror] = useState(false);
    const [showModalProgramaCierre, setShowModalProgramaCierre] = useState(false);
    const handleCloseProgramarCierre = () => setShowModalProgramaCierre(false);
    const handleOpenProgramaCierre = () => setShowModalProgramaCierre(true);
    const [showModalAsignarMismoCierre, setShowModalAsignarMismoCierre] = useState(false);
    const handleCloseAsignarMismoCierre = () => setShowModalAsignarMismoCierre(false);
    const handleOpenAsignarMismoCierre = () => setShowModalAsignarMismoCierre(true);



    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    function handleCerrarFoodtrucks() {

        axios.post('http://localhost:8000/api/foodtrucks/propietario/cerrartodaspropietario', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "user_id": `${user_id}`,
                "api_token": `${api_token}`,
                "role": `${role}`
            }
        })
            .then(function (response) {
                handleCloseConfirmCerrar();


            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );

    }

    function handleProgramarCierre() {
        /*recogemos la hora seleccionada en el modal y la guardamos en una variable*/
        var hora = document.getElementById("hora").value;

        axios.post('http://localhost:8000/api/foodtrucks/propietario/asignaratodarmismocierre', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "user_id": `${user_id}`,
                "api_token": `${api_token}`,
                "role": `${role}`,
                "hora": `${hora}`
            },
            hora: `${hora}`
        })
            .then(function (response) {
                handleCloseProgramarCierre();
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );
    }

    function handleAsignarMismoCierre() {
        var hora = document.getElementById("hora").value;

        axios.post('http://localhost:8000/api/foodtrucks/propietario/asignaratodarmismocierre', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "user_id": `${user_id}`,
                "api_token": `${api_token}`,
                "role": `${role}`,
                "hora": `${hora}`
            },
            hora: `${hora}`
        })
            .then(function (response) {
                handleCloseAsignarMismoCierre();
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );
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
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        /*Cuando sea la pantalla de un movil  se habilita el scroll vertical*/
                        overflowY: "auto",
                        /*Cuando sea la pantalla de un movil  se habilita el scroll horizontal*/
                        overflowX: "auto",
                        scrollbarWidth: "none" /* Firefox */,
                        msOverflowStyle: "none" /* Internet Explorer 10+ */,
                        "&::-webkit-scrollbar": {
                            width: "0px",
                            background: "transparent" /* Chrome/Safari/Webkit */,
                        },
                        /*Si es google chrome hacemos que la web se pueda deslizar hacia abajo*/
                        overflow: "-moz-scrollbars-none",





                    }

                }> Panel de administración de la aplicación
            </MKTypography>


            <MKBox className="container"
                sx={
                    {
                        textAlign: "center",
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                    }
                }

                py={10}
            >
                <div className="btn-group  align-items-center "
                    id="btnsGlobales" role="group" aria-label="Basic example">
                    <MKBox className=" " sx={
                        {
                            textAlign: "center",
                            fontFamily: "Roboto",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            /*movemos un poco a la izquierda el boton*/
                            marginRight: "15px",


                        }
                    }>
                        <Modal open={showconfirmcerrar} onClose={handleCloseConfirmCerrar} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">¿Estás seguro de que quieres cerrar todas tus foodtrucks?</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseConfirmCerrar}>X</button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Si cierras todas tus foodtrucks, no serán visibles tus foodtrucks <strong>hasta que las vuelvas a abrir.</strong></p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseConfirmCerrar}>Cancelar</button>
                                        <button type="button" className="btn btn-primary" onClick={handleCerrarFoodtrucks}>Cerrar todas</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                        <Modal open={showModalProgramaCierre} onClose={handleCloseProgramarCierre} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">¿A qué hora quieres cerrar todas tus foodtrucks?</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseProgramarCierre}>X</button>
                                    </div>
                                    <div className="modal-body">
                                        <p>A la hora seleccionada se cerrarán todas tus foodtrucks <strong> Recuerda que hasta que no las abras no serán visibles al público </strong></p>
                                        <br />

                                        <MKInput sx={
                                            {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                textAlign: "center",
                                                display: "flex",
                                            }
                                        }
                                            id="hora"
                                            type="time"
                                            defaultValue="00:00" />

                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseProgramarCierre}>Cancelar</button>
                                        <button type="button" className="btn btn-primary" onClick={handleProgramarCierre}>Aplicar cierre automático</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                        <Modal open={showModalAsignarMismoCierre} onClose={handleCloseAsignarMismoCierre} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">¿A qué hora cerrarás todas tus foodtrucks?</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseAsignarMismoCierre}>X</button>
                                    </div>
                                    <div className="modal-body">
                                        <p>A la hora seleccionada se asignará a todas tus foodtrucks <strong> Recuerda que hasta que no las abras no serán visibles al público </strong></p>
                                        <br />

                                        <MKInput sx={
                                            {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                textAlign: "center",
                                                display: "flex",
                                            }
                                        }
                                            id="hora" type="time" />



                                    </div>
                                    <br />

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseAsignarMismoCierre}>Cancelar</button>
                                        <button type="button" className="btn btn-primary" onClick={handleAsignarMismoCierre}>Aplicar cierre automático</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                        <div className="row justify-content-center ">
                            <div className="col-md-4">

                                <MKButton
                                    color="primary"
                                    size="large"
                                    className="btn"
                                    onClick={handleOpenConfirmCerrar}
                                >
                                    Cerrar todas mis foodtrucks activas
                                </MKButton>
                            </div>
                            <div className="col-md-4">

                                <MKButton
                                    color="primary"
                                    size="large"
                                    className="btn"
                                    onClick={handleOpenProgramaCierre}
                                >
                                    Programar cierres de las Foodtrucks <p></p>
                                </MKButton>
                            </div>
                            <div className="col-md-4">

                                <MKButton
                                    color="primary"
                                    size="large"
                                    className="btn"
                                    onClick={handleOpenAsignarMismoCierre}
                                >

                                    Asignar misma hora a las foodtrucks
                                </MKButton>
                            </div>
                        </div>
                    </MKBox>
                </div>
            </MKBox>
            {/*Si la resolucion es igual a 1920px o superior, se inserta 5 <br /> para que se vea bien el footer*/
                (window.screen.width >= 1920) ? <div><br /><br /><br /><br /><br /><br /><br /><br /><br /></div> : <div></div>
            }



        </Container>
        <Footer />
    </div>

);
}

export default AjustesPropietario;