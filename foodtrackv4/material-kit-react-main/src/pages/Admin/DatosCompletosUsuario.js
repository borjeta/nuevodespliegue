import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Slide from "@mui/material/Slide";




const DatosCompletosUsuario = () => {
    const [data, setData] = useState([]);
    const [foodtruck, setfoodtruck] = useState([]);
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [usuarioinfo, setUsuarioinfo] = useState([]);
    const id = useParams();
    const [showDatos, setShowDatos] = useState(true);


    const [open, setOpen] = useState(false);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    useEffect(() => {

        /*Obtener usuario logueado*/
        axios
            .post(`http://localhost:8000/api/usuarios/${user_id}/buscausuario`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`
                }
            })
            .then((res) => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        /*Obtener usuario seleccionado*/
        axios
            .post(`http://localhost:8000/api/usuarios/${id.id}/buscausuario`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`
                }
            })
            .then((res) => {
                setUsuarioinfo(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);



    const toggleModal = () => {
        setOpen(!show);
        window
    };




    return (
        <div>



            <MKBox className="container" aling="center">

                {/*si se pulsa el botón de eliminar, se abre el modal*/}
                <MKBox component="section" className="section section-lg" py={4}>
                    <MKBox className="container">

                        <Modal open={show} sx={{ display: "grid", placeItems: "center" }}>

                            <MKBox
                                sx={{
                                    width: 400,
                                    bgcolor: "background.paper",
                                    border: "2px solid #000",
                                    boxShadow: 24,
                                    p: 4,
                                }}
                            >
                                <MKTypography id="modal-modal-title" variant="h6" component="h2">
                                    ¿Estás seguro de que quieres eliminar este usuario?
                                </MKTypography>
                                <MKTypography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Esta acción no se puede deshacer.
                                </MKTypography>
                                <MKBox sx={{ mt: 2 }} align="center">
                                    <MKButton id="btnCancelar" variant="contained" color="secondary" onClick={() => {
                                        setShow(false);
                                        setShowDatos(true);
                                    }}>
                                        Cancelar
                                    </MKButton>
                                    &nbsp;
                                    &nbsp;

                                    <MKButton id="btnEliminar" variant="contained" color="primary" >
                                        Eliminar
                                    </MKButton>
                                </MKBox>
                            </MKBox>
                        </Modal>
                    </MKBox>
                </MKBox>




            </MKBox>
            <MKBox component="section" py={4} >
                <br />
                <br />
                <br />
                <Container>
                    x
                    <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">

                    </Grid>
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
                </Container>
            </MKBox>







        </div>





    )
}


export default DatosCompletosUsuario;
