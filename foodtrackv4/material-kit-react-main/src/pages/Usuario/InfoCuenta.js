import { useEffect, useState } from "react";
import axios from "axios";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";



// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKAvatar from "components/MKAvatar";
import MKAlert from "components/MKAlert";
/*
 columnas de la tabla usuarios
id	
name	
email	
email_verified_at	
password	
remember_token	
api_token	
date_createtoken	
expires_at	
role	
avatar	
telefono	
ubicacion	
created_at	
updated_at*/

function SimpleModal() {
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(true);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    const handleSubmit = (e) => {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const ubicacion = document.getElementById("ubicacion").value;
        const password = document.getElementById("password").value;
        const password_confirmation = document.getElementById("password_confirmation").value;

        e.preventDefault();

        if (password !== password_confirmation) {
            alert("Las contraseñas no coinciden");
            document.getElementById("password");
            return;
        }

        axios
            .put(`http://localhost:8000/api/usuarios/editar/usuario`, {
                name: name,
                email: email,
                telefono: phone,
                ubicacion: ubicacion,
                password: password,
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
                if (res.data.role == "propietario")
                    window.location.href = `/homepropietario`;
                else if (res.data.role == "usuario")
                    window.location.href = `/homeusuario`;
                else if (res.data.role == "admin")
                    window.location.href = `/homeadmin`;
                else
                    window.location.href = `/login`;
            }
            )
            .catch((err) => {
                alert(err);
            }
            );
    }
    /*Cuando haya acabado de cargar la vista se ejecuta el useEffect*/
    useEffect(() => {
        axios
            .post(`http://localhost:8000/api/usuarios/${user_id}/buscausuario`, {
                headers: {
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`
                }
            })
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
                document.getElementById("name").value = res.data.name;
                document.getElementById("email").value = res.data.email;
                document.getElementById("phone").value = res.data.telefono;
                document.getElementById("ubicacion").value = res.data.ubicacion;

            })

            .catch((err) => {
                console.log(err);
                alert(err);
            });
    }, []);



    const handleConfirmDelete = (e) => {

        if (confirmacionBorrado === true) {
            axios
                .delete(`http://localhost:8000/api/usuarios/borrar/usuario`, {
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
                    window.location.href = `/login`;
                }
                )
                .catch((err) => {
                    alert(err);
                    console.log(err);
                }
                );
        }

    }
    function redirect() {
        if (user.role == "propietario")
            window.location.href = `/homepropietario`;
        else if (user.role == "user")
            window.location.href = `/homeusuario`;
        else if (user.role == "admin")
            window.location.href = `/homeadmin`;
        else
            window.location.href = `/login`;
    }


    const toggleModal = () => {
        setShow(!show);
        if (user.role == "propietario")
            window.location.href = `/homepropietario`;
        else if (user.role == "user")
            window.location.href = `/homeusuario`;
        else if (user.role == "admin")
            window.location.href = `/homeadmin`;
        else
            window.location.href = `/login`;
    };



    return (
        <MKBox component="section" py={4} >
            <Container>

                <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">

                </Grid>
                <Modal open={show}
                    style={{ overflow: "scroll" }}
                    sx={{ display: "grid", placeItems: "center" }}>
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
                                <MKTypography variant="h5">Ventana de información del usuario</MKTypography>
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
                                <MKBox component="section" variant="contained">
                                    <Container>
                                        <Grid container justifyContent="center">
                                            <Stack direction="row" alignItems="flex-end" spacing={1}>
                                                <MKAvatar src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                                                    alt="xxl" size="xxl" />
                                            </Stack>
                                        </Grid>
                                    </Container>
                                </MKBox>

                                <Container  >
                                    <MKButton variant="gradient" color="info" size="large" onClick={redirect}>
                                        volver
                                    </MKButton>
                                    <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">

                                        <MKTypography variant="h3" >
                                            Mi cuenta
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
                                                        id="name"
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
                                                        id="email"
                                                        name="email"
                                                        label=""
                                                        variant="outlined"
                                                        style={{ marginBottom: "20px" }}
                                                        fullWidth
                                                        required

                                                    />
                                                    <MKTypography variant="h6" mb={1}>
                                                        Teléfono
                                                    </MKTypography>
                                                    <MKInput
                                                        id="phone"
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
                                                        id="password"
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
                                                        id="password_confirmation"
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
                                                        id="ubicacion"
                                                        name="ubicacion"
                                                        fullWidth
                                                        style={{ marginBottom: "20px" }}
                                                        required
                                                    />

                                                </Grid>
                                            </Grid>
                                            <Grid container item justifyContent="center" xs={12} my={1}>
                                                <MKButton onClick={handleSubmit} size="large" variant="gradient" color="warning" >
                                                    Guardar cambios
                                                </MKButton>
                                                &nbsp;
                                                <MKButton onClick={handleConfirmDelete} size="large" variant="gradient" color="error" >
                                                    borrar cuenta
                                                </MKButton>

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