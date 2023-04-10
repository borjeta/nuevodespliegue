import react from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavbarUsuario from "pages/Usuario/NavbarUsuario";
import Footer from "pages/LandingPages/Author/sections/Footer";
import MKAlert from "components/MKAlert";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import MKButton from "components/MKButton";


function InfoFoodtruck() {
    const [foodtruck, setFoodtruck] = useState([]);
    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const id = useParams();

    useEffect(() => {

        axios
            .get(`http://localhost:8000/api/foodtrucks/${id.id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`
                }

            })
            .then((res) => {
                setFoodtruck(res.data);
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <NavbarUsuario />
            <CssBaseline />
            <AppBar position="relative">

            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <br />
                        <br />
                        <br />
                        <Modal open={showDatos} sx={{ display: "grid", placeItems: "center" }}>
                            <Slide direction="down" in={showDatos} timeout={500}>
                                <MKBox
                                    position="relative"
                                    width="100%"
                                    maxWidth="1000px"
                                    display="flex"
                                    flexDirection="column"
                                    borderRadius="xl"
                                    bgColor="white"
                                    shadow="xl"

                                >
                                    <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                                        <MKTypography variant="h5" alignItems="center">Ventana de datos completos de usuario</MKTypography>
                                        <MKButton
                                            variant="text"
                                            color="primary"
                                            size="large"
                                            onClick={() => {
                                                window.location.href = "/admin/usuarios";
                                            }}
                                            startIcon={< CloseIcon />}
                                        >
                                            Volver a la lista
                                        </MKButton>
                                    </MKBox>

                                    <MKBox p={4}>
                                        <MKBox display="flex" flexDirection="column" gap={1}>
                                            {/* <!--Fila 1--> */}
                                            <div className="row">

                                                {/* <!--Columna 1--> */}
                                                <div className="col">
                                                    <MKTypography variant="h6" >
                                                        Nombre :
                                                    </MKTypography>
                                                    {usuarioinfo.name}
                                                </div>

                                                {/* <!--Columna 2--> */}
                                                <div className="col">
                                                    <MKTypography variant="h6" >
                                                        Email :
                                                    </MKTypography>
                                                    {usuarioinfo.email}
                                                </div>
                                            </div>

                                            {/* <!--Fila 2--> */}
                                            <div className="row">


                                                {/* <!--Columna 1--> */}
                                                <div className="col">
                                                    <MKTypography variant="h6" >
                                                        Ubicacion :
                                                    </MKTypography>
                                                    {usuarioinfo.ubicacion}


                                                </div>
                                                {/* <!--Columna 3--> */}
                                                <div className="col">

                                                    <MKTypography variant="h6" >
                                                        Teléfono :
                                                    </MKTypography>
                                                    {usuarioinfo.telefono}
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* <!--Columna 2--> */}
                                                <div className="col">
                                                    <MKTypography variant="h6" >
                                                        Password :
                                                    </MKTypography>
                                                    {usuarioinfo.password}
                                                </div>

                                                <div className="col">
                                                    <MKTypography variant="h6" >
                                                        Rol :
                                                    </MKTypography>
                                                    {usuarioinfo.role}
                                                </div>

                                            </div>
                                            <div className="row align-center justify-content-center">




                                                <MKBox display="flex" justifyContent="flex-end" p={2}>
                                                    <MKButton variant="contained" color="primary"
                                                        sx={
                                                            {
                                                                backgroundColor: "#FFA500",
                                                                color: "white",
                                                                "&:hover": {
                                                                    backgroundColor: "#FFA500",
                                                                    color: "white",
                                                                },
                                                            }
                                                        }

                                                        size="large" onClick={() => {
                                                            setShowDatos(false);
                                                            setShow(true);

                                                        }}>
                                                        Borrar usuario                                                </MKButton>
                                                </MKBox>
                                            </div>
                                        </MKBox>
                                    </MKBox>
                                </MKBox>
                            </Slide>
                        </Modal>

                        <div>

                        </div>
                    </Container>
                </Box>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </div >
    )
}

export default InfoFoodtruck;

