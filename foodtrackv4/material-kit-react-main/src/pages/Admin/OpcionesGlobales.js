import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavbarAdmin from "pages/Admin/NavbarAdmin";
import MKTypography from "components/MKTypography";
import axios from "axios";
import Modal from "@mui/material/Modal";
import MKAlert from "components/MKAlert";
import MKInput from "components/MKInput";
import Footer from "pages/LandingPages/Author/sections/Footer";



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function OpcionesGlobales() {

    const classes = useStyles();
    const [data, setData] = useState([]);
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [showmodalexito, setShowModalExito] = useState(false);
    const [showmodalerror, setShowModalError] = useState(false);
    const [showmodal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [mensajeerror, setMensajeError] = useState("");
    const [mensajeexito, setMensajeExito] = useState("");


    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    const deleteCookie = (name) => {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    


    return (
        <div>
            <NavbarAdmin />

            <Container className="container" align="center" justify-content="center" py={10}>

                <MKTypography>
                    <br />
                    
                </MKTypography>
                <MKTypography variant="h2" component="h2" sx={
                    {
                        textAlign: "center",
                        fontFamily: "Roboto",
                        color: "#FFFFFF",
                        marginTop: 8,
                        fontWeight: "bold",

                    }
                }>
                    <br />
                        <br />
                        <br />
                    Opciones Globales
                </MKTypography>
                <Modal open={showmodal} onClose={() => {
                    setShowModal(false);
                }}>

                    <MKAlert severity="success">
                        {mensajeexito}
                    </MKAlert>
                </Modal>



                <MKBox className="container"
                    align="center"
                    justify-content="center"
                    py={10}
                >
                    <div className="btn-group btn-group-justified" id="btnsGlobales" role="group" aria-label="Basic example">

                        <MKBox align="center" justify-content="center">
                            <div className="row">
                                <div className="col-md-3">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        className="btn"
                                        style={{
                                            margin : "auto"
                                        }}

                                        onClick={() => {
                                            setShowModal(true);
                                        }}

                                    >
                                        Crear Administrador
                                    </MKButton>
                                </div>

                                <div className="col-md-3">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        className="btn"
                                        style={{
                                            margin : "auto"
                                        }}
                                        onClick={() => {
                                            axios.get(`http://172.16.238.10:8000/api/foodtrucks/admin/cierratodas`, {
                                                headers: {
                                                    "Access-Control-Allow-Origin": "*",
                                                    "Content-Type": "application/json",
                                                    "user_id": `${user_id}`,
                                                    "api_token": `${api_token}`,
                                                    "role": `${role}`
                                                }
                                            })
                                                .then((res) => {
                                                    console.log(res.data);

                                                })
                                                .catch((err) => {
                                                    console.log(err);


                                                });
                                        }}

                                    >
                                        Cerrar foodtrucks
                                    </MKButton>

                                </div>

                                <div className="col-md-3">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        className="btn"
                                        onClick={() => {
                                            axios.get(`http://172.16.238.10:8000/api/foodtrucks/admin/abretodas`, {
                                                headers: {
                                                    "Access-Control-Allow-Origin": "*",
                                                    "Content-Type": "application/json",
                                                    "user_id": `${user_id}`,
                                                    "api_token": `${api_token}`,
                                                    "role": `${role}`
                                                }
                                            })
                                                .then((res) => {
                                                    console.log(res.data);
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                });
                                        }}

                                    >
                                        Abrir foodtrucks
                                    </MKButton>

                                </div>

                                <div className="col-md-3">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        className="btn"
                                        onClick={() => {
                                            window.location.href = "/homeadmin";
                                        }}

                                    >
                                        Volver al panel
                                    </MKButton>
                                </div>

                            </div>
                        </MKBox>
                    </div>

                </MKBox>
            </Container>

            <Modal open={showmodalexito} onClose={() => setShowModalExito(false)}>
                <MKAlert severity="success">
                    <MKTypography variant="h6" component="h2" gutterBottom sx={
                        { color: "green" }
                    }>
                        {{ mensajeexito }}
                    </MKTypography>
                </MKAlert>
            </Modal>
            <Modal open={showmodalerror} onClose={() => setShowModalError(false)}
                sx={{
                    display: "grid",
                    placeItems: "center",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',

                }}

            >
                <MKAlert severity="error" >
                    <MKTypography variant="h6" component="h2" gutterBottom >
                        {{ mensajeerror }}
                    </MKTypography>
                </MKAlert>
            </Modal>
            <Modal open={showmodal} onClose={() => setShowModal(false)} sx={{ display: "grid", placeItems: "center" }}>
                <div className="container" align="center" justify-content="center" py={10}>
                    <MKBox sx={{
                        width: 400,
                        height: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24, p: 4,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',


                    }}>
                        <MKButton
                            color="primary"
                            size="large"
                            onClick={() => {
                                setShowModal(false);
                            }}
                            className="btn"
                            sx={
                                {
                                    position: 'absolute',
                                    top: '10%',
                                    right: '0%',
                                    transform: 'translate(-50%, -50%)',

                                }
                            }
                        > X
                        </MKButton>



                        <MKTypography variant="h6" component="h2" gutterBottom>
                            Crear administrador
                        </MKTypography>
                        <div className="form-group">

                            <MKInput
                                id="outlined-basic"
                                label="Nombre"
                                variant="outlined"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <br />
                            <br />
                            <MKInput
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <br />
                            <MKInput

                                id="outlined-basic"
                                label="Contraseña"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <br />
                            <MKInput
                                id="outlined-basic"
                                label="Confirmar contraseña"
                                variant="outlined"
                                value={password_confirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                            <br />
                            <br />
                            <MKButton
                                variant="contained"
                                color="primary"
                                sx={{
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',


                                }}
                                onClick={() => {
                                    if (nombre === "" || email === "" || password === "" || password_confirmation === "") {
                                        alert("Rellena todos los campos");
                                        return;
                                    } else if (password !== password_confirmation) {
                                        alert("Las contraseñas no coinciden");
                                        return;
                                    } else {

                                        axios.post("http://172.16.238.10:8000/api/usuarios/admin/crearadmin", {
                                            name: nombre,
                                            email: email,
                                            password: password,
                                            password_confirmation: password_confirmation
                                        }, {
                                            headers: {
                                                "Access-Control-Allow-Origin": "*",
                                                "Content-Type": "application/json",
                                                "user_id": `${user_id}`,
                                                "api_token": `${api_token}`,
                                                "role": `${role}`
                                            }
                                        }
                                        ).then((response) => {
                                            console.log(response);
                                            setShowModalExito(true);
                                            setShowModal(false);
                                        }).catch((error) => {
                                            console.log(error);
                                            setShowModalError(true);
                                            setShowModal(false);
                                        })
                                    }
                                }
                                }
                            >
                                Crear
                            </MKButton>
                        </div>
                    </MKBox>
                </div>
            </Modal>
             {/*Si la resolución es mayor a 1920 px añadimos 4 etiquetas br */
                window.screen.width >= 1920 ? (
                    <div>
                        <br />
                        <br />
                        <br />
                        
                        <br />
                        <br />
                    </div>
                ) : null}
            <Footer />
        </div >
    );
}


export default OpcionesGlobales;