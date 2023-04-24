import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavbarAdmin from "pages/Admin/NavbarAdmin";
import MKTypography from "components/MKTypography";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Modal from "@mui/material/Modal";
import MKAlert from "components/MKAlert";
import MKInput from "components/MKInput";
import Footer from "pages/LandingPages/Author/sections/Footer";



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function HomeAdmin() {

    const classes = useStyles();
    const [data, setData] = useState([]);
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [foodtrucks, setFoodtrucks] = useState([]);
    const [foodtruck, setFoodtruck] = useState([]);
    const [showmodalexito, setShowModalExito] = useState(false);
    const [showmodalerror, setShowModalError] = useState(false);
    const [showmodal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");




    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    const deleteCookie = (name) => {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    deleteCookie("api_token");
    deleteCookie("user_id");
    deleteCookie("role");






    return (
        <div>
            <NavbarAdmin />
            <br />
            <br />
            <br />

            <Container className="container" align="center" justify-content="center" py={10}>
                <MKTypography variant="h4" component="h2" gutterBottom>
                    Bienvenido al panel de administración del servicio
                </MKTypography>
                <br />
                <MKAlert severity="success"
                    style={{ display: showmodalexito ? "block" : "none" }}


                >
                    Se cerraron todas las foodtrucks
                </MKAlert>
                <br />



                <MKBox className="container"
                    align="center"
                    justify-content="center"
                    py={10}
                >
                    <div className="btn-group btn-group-justified" id="btnsGlobales" role="group" aria-label="Basic example">

                        <MKBox align="center" justify-content="center">
                            <div className="row">
                                <div className="col-md-4">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        onClick={() => {
                                            setShowModal(true);
                                        }}

                                        className="btn"
                                    >
                                        Crear Administrador
                                    </MKButton>
                                </div>
                                <br />

                                <div className="col-md-4">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        className="btn"
                                        onClick={() => {
                                            axios.get(`http://localhost:8000/api/foodtrucks/admin/cierratodas`, {
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
                                                    setShowModalExito(true);
                                                    /*cierra el modal a los 3 segundos*/
                                                    setTimeout(() => {
                                                        setShowModalExito(false);
                                                    }
                                                        , 3000);
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                    setShowModalError(true);
                                                    /*cierra el modal a los 3 segundos*/
                                                    setTimeout(() => {
                                                        setShowModalError(false);
                                                    }
                                                        , 3000);

                                                });
                                        }}

                                    >
                                        Cerrar foodtrucks
                                    </MKButton>
                                </div>

                                <div className="col-md-4">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        onClick={() => {
                                            window.history.back();
                                        }}
                                        className="btn"
                                    > Volver
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
                        ¡El administrador se ha creado con éxito!
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
                        ¡El administrador no se ha creado!
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

                                        axios.post("http://localhost:8000/api/usuarios/admin/crearadmin", {
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
            <Footer />
        </div >
    );
}


export default HomeAdmin;
