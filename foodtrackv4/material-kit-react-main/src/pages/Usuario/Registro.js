import { useEffect, useState } from "react";
import axios from "axios";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

function SimpleModal() {
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(true);
    const [checked, setChecked] = useState(true);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    const handleSubmit = (e) => {

        const name = document.getElementById("name_nuevousuario").value;
        const email = document.getElementById("email_nuevousuario").value;
        const phone = document.getElementById("phone_nuevousuario").value;
        const ubicacion = document.getElementById("ubicacion_nuevousuario").value;
        const password = document.getElementById("password_nuevousuario").value;

        if (name === "" || email === "" || phone === "" || ubicacion === "" || password === "") {
            alert("Todos los campos son obligatorios");
            return;
        }
        if (password.length < 4) {
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }
        if (phone.length < 9) {
            alert("El teléfono debe tener al menos 9 caracteres");
            return;
        }
        if (email.indexOf("@") === -1) {
            alert("El email debe ser válido");
            return;
        }
        if (password !== document.getElementById("password_confirmation_nuevousuario").value) {
            alert("Las contraseñas no coinciden");
            return;
        }

        e.preventDefault();
        axios.post("http://localhost:8000/api/usuarios/registro/newuser", {
            name: name,
            email: email,
            telefono: phone,
            ubicacion: ubicacion,
            password: password
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    window.location.href = "/login";
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Error al crear el usuario");
            });
    };


    const toggleModal = () => setShow(show);


    return (
        <MKBox component="section" py={4} >
            <Container>

                <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">

                </Grid>
                <Modal open={show} sx={{ display: "grid", placeItems: "center" }}>
                    <Slide direction="down" in={show} timeout={500}>
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
                                <MKTypography variant="h5">Ventana de creación de usuario</MKTypography>
                                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                            </MKBox>
                            <Divider sx={{ my: 0 }} />
                            <MKBox
                                component="section"
                                py={6}
                                borderRadius="xl"
                                bgColor="white"
                                shadow="xl"
                            >

                                <Container  >
                                    <MKButton variant="gradient" color="info" size="large" onClick={() => {
                                        window.location.href = `/login`;
                                    }}>
                                        volver
                                    </MKButton>
                                    <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
                                        <MKTypography variant="h3" >
                                            Registro de usuario
                                        </MKTypography>

                                        <MKBox width="100%" component="form" method="post" autoComplete="off" >


                                            <Grid container item
                                                xs={10}
                                                md={10}
                                                lg={10}
                                                mx="auto"
                                                textAlign="center"
                                                justifyContent="center"
                                                alignItems="center" >

                                                <Grid item xs={12} sm={10} >


                                                    <MKTypography variant="h6" mb={1}>
                                                        Nombre
                                                    </MKTypography>

                                                    <MKInput
                                                        id="name_nuevousuario"
                                                        name="name"
                                                        variant="outlined"
                                                        style={{ marginBottom: "20px" }}
                                                        required
                                                        fullWidth

                                                    />
                                                    <MKTypography variant="h6" mb={1}>
                                                        Email
                                                    </MKTypography>

                                                    <MKInput
                                                        id="email_nuevousuario"
                                                        name="email"
                                                        variant="outlined"
                                                        style={{ marginBottom: "20px" }}
                                                        fullWidth
                                                        required

                                                    />
                                                    <MKTypography variant="h6" mb={1}>
                                                        Teléfono
                                                    </MKTypography>
                                                    <MKInput
                                                        id="phone_nuevousuario"
                                                        name="phone"
                                                        variant="outlined"
                                                        style={{ marginBottom: "20px" }}
                                                        fullWidth
                                                        required
                                                    />
                                                    <MKTypography variant="h6" mb={1}
                                                    >
                                                        Password
                                                    </MKTypography>
                                                    <MKInput
                                                        id="password_nuevousuario"
                                                        name="password"
                                                        type="password"
                                                        variant="outlined"
                                                        style={{ marginBottom: "20px" }}
                                                        fullWidth

                                                    />  <MKTypography variant="h6" mb={1}
                                                    >
                                                        Confirmación Password
                                                    </MKTypography>
                                                    <MKInput
                                                        id="password_confirmation_nuevousuario"
                                                        name="password_confirmation"
                                                        type="password"
                                                        variant="outlined"
                                                        style={{ marginBottom: "20px" }}
                                                        fullWidth

                                                    />
                                                    <MKTypography variant="h6" mb={1}
                                                    >
                                                        Ubicación
                                                    </MKTypography>
                                                    <MKInput
                                                        id="ubicacion_nuevousuario"
                                                        name="ubicacion"
                                                        fullWidth
                                                        style={{ marginBottom: "20px" }}
                                                        required
                                                    />

                                                </Grid>
                                            </Grid>
                                            <Grid container item justifyContent="center" xs={12} my={1}>
                                                <MKButton onClick={handleSubmit} size="large" variant="gradient" color="warning" >
                                                    Crear usuario
                                                </MKButton>
                                                &nbsp;
                                            </Grid>
                                        </MKBox>
                                    </Grid>
                                </Container>
                            </MKBox>
                        </MKBox>
                    </Slide>
                </Modal>
            </Container>
        </MKBox >
    );
}

export default SimpleModal;