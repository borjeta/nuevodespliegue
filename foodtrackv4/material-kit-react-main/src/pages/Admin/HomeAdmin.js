import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavbarAdmin from "pages/Admin/NavbarAdmin";
import MKTypography from "components/MKTypography";
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

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");



    return (
        <div>
            <NavbarAdmin />
            <br />
            <br />
            <br />

            <Container className="container" align="center" justify-content="center" py={10}
                sx={
                    {
                        width: "100%",
                        height: "100%",
                    }
                }>
                <MKTypography
                    variant="h3"
                    sx={
                        {

                            textAlign: "center",
                            fontFamily: "Roboto",
                            fontWeight: "bold",
                            color: "#FFFFFF",


                        }

                    }> Panel de administración de la aplicación
                </MKTypography>

                <MKBox className="container"
                    align="center"
                    justify-content="center"
                    py={10}
                >
                    <div className="btn-group btn-group-justified" id="btnsGlobales" role="group" aria-label="Basic example">
                        <MKBox align="center" justify-content="center" sx={
                            {
                                textAlign: "center",
                                fontFamily: "Roboto",
                                fontWeight: "bold",
                                borderRadius: "10px",
                                padding: "10px",
                                margin: "10px",
                                width: "100%",
                            }
                        }>
                            <div className="row">
                                <div className="col-md-4">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        className="btn"
                                        href="/admin/foodtrucks"
                                        sx={
                                            { hover: { backgroundColor: "#2c7b78" } }
                                        }
                                    >
                                        Foodtrucks
                                    </MKButton>
                                </div>

                                <div className="col-md-4">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        href="/admin/usuarios"
                                        className="btn"
                                        sx={
                                            { hover: { backgroundColor: "#2c7b78" } }
                                        }
                                    >
                                        usuarios
                                    </MKButton>
                                </div>
                                <div className="col-md-4">
                                    <MKButton
                                        color="primary"
                                        size="large"
                                        href="/admin/opcionesglobales"
                                        className="btn"
                                        sx={
                                            { hover: { backgroundColor: "#2c7b78" } }
                                        }
                                    >
                                        Opciones
                                    </MKButton>
                                </div>
                            </div>
                        </MKBox>
                    </div>
                </MKBox>
            </Container>
            <Footer />
        </div >

    );
}


export default HomeAdmin;
