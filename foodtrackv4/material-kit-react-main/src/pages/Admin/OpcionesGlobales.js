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
                <Modal show={showmodalexito}
                    open={showmodalexito}
                    onHide={() => setShowModalExito(false)}
                >

                    <Button variant="secondary" onClick={() => setShowModalExito(false)}>
                        Cerrar
                    </Button>
                </Modal>


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
                                        href="/admin/foodtrucks"
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


                                                })
                                                .catch((err) => {
                                                    console.log(err);
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
        </div>
    );
}


export default HomeAdmin;
