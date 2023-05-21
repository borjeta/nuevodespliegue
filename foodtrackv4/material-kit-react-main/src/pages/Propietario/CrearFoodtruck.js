import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import axios from "axios";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";

import CardMedia from "@mui/material/CardMedia";


// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MKAlert from "components/MKAlert";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";


function CrearFoodtruck() {
    const [data, setData] = useState([]);
    const [foodtruck, setfoodtruck] = useState([]);
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(true);
    const [imagen, setImagen] = useState([]);
    const id = useParams();
    const [categorias, setCategorias] = useState([]);


    const [open, setOpen] = useState(false);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    const handleSubmit = () => {


        axios.post(`http://172.16.238.10:8000/api/foodtrucks`, {
            "nombre": document.getElementById("nombre").value,
            "descripcion": document.getElementById("descripcion").value,
            "ubicacion": document.getElementById("ubicacion").value,
            "telefono": document.getElementById("telefono").value,
            "avatar": document.getElementById("imagen").value,
            "tipocomida": document.getElementById("categoria").value,

        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "user_id": `${user_id}`,
                "api_token": `${api_token}`,
                "role": `${role}`
            }
        })

            .then((res) => {
                console.log(res.data);
                window.location.href = `/foodtrucks/propietario/listafoodtrucks`;
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );

    };


    const toggleModal = () => {
        handleSubmit();
    };


    return (
        <div>


            <MKBox component="section" py={4} >
                <br />
                <br />
                <br />
                <Container>

                    <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">

                    </Grid>
                    <Modal open={show} sx={{ display: "grid", placeItems: "center" }}
                        display="flex"
                        style={{ overflow: "scroll" }}

                    >
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
                                <MKBox display="flex" alignItems="center" p={2}>
                                    <MKTypography variant="h5" alignItems="center">Crear nueva foodtruck</MKTypography>
                                    <MKButton
                                        variant="text"
                                        color="primary"
                                        size="large"
                                        onClick={() => {
                                            window.history.back();
                                        }
                                        }
                                        sx={{
                                            position: "absolute",
                                            right: 0,
                                            top: 0,
                                            "@media (max-width:600px)": { top: "10px" }
                                        }}
                                        /*Si la resolucion es menos de 600px, el boton baja un poco para que no se solape con el titulo*/

                                        startIcon={<CloseIcon />}
                                    >
                                        Volver
                                    </MKButton>
                                </MKBox>
                                <MKAlert severity="info"
                                    sx={{
                                        width: "70%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "auto",
                                        marginTop: "10px",

                                    }}>
                                    Estos datos serán visibles para los clientes y los podrás modificar en cualquier momento.
                                </MKAlert>
                                <MKBox p={4}>
                                    <MKBox display="flex" flexDirection="column" gap={1}>
                                        {/* <!--Fila 1--> */}
                                        <div className="row">

                                            {/* <!--Columna 1--> */}
                                            <div className="col">
                                                <MKTypography variant="h6" >
                                                    Nombre
                                                </MKTypography>
                                                <MKInput
                                                    id="nombre"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                    fullWidth

                                                />
                                            </div>

                                            {/* <!--Columna 2--> */}
                                            <div className="col">
                                                <MKTypography variant="h6" >
                                                    Descripción
                                                </MKTypography>
                                                <MKInput
                                                    id="descripcion"
                                                    variant="outlined"
                                                    size="small"
                                                />
                                            </div>
                                        </div>

                                        {/* <!--Fila 2--> */}
                                        <div className="row">


                                            {/* <!--Columna 1--> */}
                                            <div className="col">
                                                <MKTypography variant="h6" >
                                                    Ubicacion
                                                </MKTypography>
                                                <MKInput
                                                    id="ubicacion"
                                                    variant="outlined"
                                                    size="small"

                                                />


                                            </div>



                                            {/* <!--Columna 3--> */}
                                            <div className="col">

                                                <MKTypography variant="h6" >
                                                    Teléfono
                                                </MKTypography>
                                                <MKInput
                                                    id="telefono"
                                                    variant="outlined"
                                                    size="small"
                                                />


                                            </div>


                                        </div>
                                        <div className="row">

                                            {/* <!--Columna 2--> */}


                                        </div>
                                        <MKTypography variant="h6" >
                                            Categoria
                                        </MKTypography>
                                        <select className="form-select" aria-label="Default select example" id="categoria">
                                            <option value="Comida Japonesa">Comida Japonesa</option>
                                            <option value="Comida Mexicana">Comida Mexicana</option>
                                            <option value="Comida Italiana">Comida Italiana</option>
                                            <option value="Comida China">Comida China</option>
                                            <option value="Comida Francesa">Comida Francesa</option>
                                            <option value="Comida Española">Comida Española</option>
                                            <option value="Comida Americana">Comida Americana</option>
                                            <option value="Comida Peruana">Comida Peruana</option>
                                            <option value="Comida Colombiana">Comida Colombiana</option>
                                            <option value="Comida Argentina">Comida Argentina</option>

                                        </select>
                                        <MKTypography
                                            variant="outlined"
                                            size="small"
                                        >
                                            URL de la imagen
                                        </MKTypography>
                                        <MKInput
                                            id="imagen"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />



                                        <MKTypography variant="h6" >
                                            Previsualización
                                        </MKTypography>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            alt="green iguana"
                                            image={foodtruck.avatar}
                                        />


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

                                                    size="small" onClick={toggleModal}>
                                                    Guardar cambios
                                                </MKButton>
                                            </MKBox>
                                        </div>
                                    </MKBox>
                                </MKBox>
                            </MKBox >
                        </Slide >
                    </Modal >
                </Container >
            </MKBox >
        </div >
    );
}

export default CrearFoodtruck;


