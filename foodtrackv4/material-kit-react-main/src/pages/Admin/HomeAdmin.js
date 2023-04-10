import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavbarAdmin from "pages/Admin/NavbarAdmin";
import MKTypography from "components/MKTypography";


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

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");



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
                                href="/admin/foodtrucks"
                                className="btn"

                            >
                                Foodtrucks
                            </MKButton>
                            &nbsp;
                            &nbsp;
                            <MKButton
                                color="primary"
                                size="large"
                                href="/admin/usuarios"
                                className="btn"
                            >
                                Usuarios
                            </MKButton>
                            &nbsp;
                            &nbsp;
                            <MKButton
                                color="primary"
                                size="large"
                                href="/admin/roles"
                                className="btn"
                            >
                                Opciones globales
                            </MKButton>
                            &nbsp;
                            &nbsp;

                        </MKBox>
                    </div>

                </MKBox>
            </Container>
        </div>
    );
}


export default HomeAdmin;
