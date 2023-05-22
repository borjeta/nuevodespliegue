import { useEffect, useState } from "react";
import axios from "axios";
import Container from '@mui/material/Container';
import NavbarPropietario from "pages/Propietario/NavbarPropietario";
import Footer from "pages/LandingPages/Author/sections/Footer";
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import editIcon from '@iconify/icons-mdi/edit';
import Modal from '@mui/material/Modal';
import deleteIcon from "@iconify/icons-mdi/delete";
import settingsIcon from '@iconify/icons-mdi/settings';
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";


function ListaFoodtrucksPropietario() {
    const [foodtrucks, setFoodtrucks] = useState([]);
    const [foodtruck, setFoodtruck] = useState([]);
    const [show, setShow] = useState(false);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    /*Borramos de las cookies el api_token, user_id y role*/
    const deleteCookie = (name) => {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    deleteCookie("api_token");
    deleteCookie("user_id");
    deleteCookie("role");

    useEffect(() => {

        axios
            .get(`http://20.199.41.101:8000/api/foodtrucks/listaporpropietario/${user_id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`
                }

            })
            .then((res) => {
                setFoodtrucks(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    async function handleOpen(id) {

        await axios
            .get(`http://20.199.41.101:8000/api/foodtrucks/listaporpropietario/${id}/abrirfoodtruck`, {
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
                alert("Foodtruck abierto");
                window.location.reload();

            })
            .catch((err) => {
                console.log(err);

            });
    }



    async function handleClose(id) {


        axios
            .get(`http://20.199.41.101:8000/api/foodtrucks/listaporpropietario/${id}/cerrarfoodtruck`, {
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
                window.location.reload();
                alert("Foodtruck cerrado");

            })
            .catch((err) => {
                console.log(err);
            });
    }



    return (
        <div>
            <NavbarPropietario />


            <MKBox sx={
                {
                    scroll: 'true',
                }

            } >

                <br />

                <br />

                <br />



                {/*Contenedor para la los botones de crear foodtruck y contactar con soporte*/}
                {/*align-center justify-content-center*/}
                <Container maxWidth="lg" align="center">

                    <Box sx={{
                        borderRadius: "12px",
                        padding: "10px",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                        background: "linear-gradient(90deg, #836b4f  0%, #FFDB58 50%, #836b4f  100%)",
                        /*Si la vista es de movil se añade la clase table-responsive a la tabla*/
                        "@media (max-width: 600px)": {
                            "& table": {
                                width: "100%",
                                "& thead": {
                                    display: "none"
                                },
                                "& tbody": {
                                    display: "block",
                                    "& tr": {
                                        marginBottom: "10px",
                                        display: "block",
                                        borderRadius: "12px",
                                        padding: "10px",

                                    },
                                    "& td": {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "10px",
                                        "&:nth-child(1)": {
                                            fontWeight: "bold",
                                            fontSize: "1.2rem"
                                        },
                                        "&:nth-child(2)": {
                                            fontWeight: "bold",
                                            fontSize: "1.2rem"

                                        },
                                    }
                                }
                            }
                        },
                        /*Para el resto de resoluciones */
                        "@media (min-width: 600px)": {
                            "& table": {
                                width: "100%",
                                "& thead": {
                                    display: "none"
                                },
                                "& tbody": {
                                    display: "block",
                                    "& tr": {
                                        marginBottom: "10px",
                                        display: "block",
                                        borderRadius: "12px",
                                        padding: "10px",

                                    },
                                    "& td": {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "10px",
                                        "&:nth-child(1)": {
                                            fontWeight: "bold",
                                            fontSize: "1.2rem"
                                        },
                                        "&:nth-child(2)": {
                                            fontWeight: "bold",
                                            fontSize: "1.2rem"

                                        },
                                    }
                                }
                            }
                        }

                    }} >

                        <div className="  ">

                            <div className="table table-responsive">


                                <div className="container">

                                    <div className="row align-items-center justify-content-center">

                                        <MKButton href="/foodtrucks/propietario/nuevafoodtruck" variant="gradient" color="info" size="large" startIcon={<Icon icon={editIcon} />}>
                                            Crear nueva
                                        </MKButton>
                                        &nbsp;
                                        &nbsp;
                                        <div className="col-md-1.5 alig-rigth">
                                            <MKButton href="/foodtrucks/propietario/ajustes" variant="gradient" color="warning" size="large" startIcon={<Icon icon={settingsIcon} />}>
                                                Ajustes
                                            </MKButton>



                                        </div>
                                    </div>
                                    <br />


                                </div>
                                <thead>
                                    <tr>
                                        <th scope="col-3"> <div className="d-flex justify-content-center align-text-center ">
                                            <MKTypography color="black">Nombre</MKTypography></div></th>
                                        <th scope="col-3"> <div className="d-flex justify-content-center align-text-center ">
                                            <MKTypography color="black">Estado </MKTypography></div></th>
                                        <th scope="col-3"><div className="d-flex justify-content-center align-text-center ">
                                            <MKTypography color="black">Acciones</MKTypography></div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foodtrucks.map((foodtruck) => (
                                        <tr key={foodtruck.id}>
                                            <td> <div className="d-flex justify-content-center align-text-center "><MKTypography color="white">{foodtruck.nombre}</MKTypography></div></td>
                                            <td> <div className="d-flex justify-content-center align-text-center "><MKTypography color="white">

                                                {foodtruck.status == 'Activo' ? (
                                                    <MKButton size="large"
                                                        variant="contained" sx={
                                                            {
                                                                /*hover*/
                                                                "&:hover": {
                                                                    backgroundColor: "#FFDB58",
                                                                    color: "black"
                                                                },
                                                                /*focus*/
                                                                "&:focus": {
                                                                    backgroundColor: "#FFDB58",
                                                                    color: "black"
                                                                }
                                                            }
                                                        }

                                                        color="dark" onClick={() => handleClose(foodtruck.id)}>
                                                        Cerrar foodtruck
                                                    </MKButton>
                                                ) : (
                                                    <MKButton size="large" sx={
                                                        {
                                                            /*hover*/
                                                            "&:hover": {
                                                                backgroundColor: "#FFDB58",
                                                                color: "black"
                                                            },
                                                            /*focus*/
                                                            "&:focus": {
                                                                backgroundColor: "#FFDB58",
                                                                color: "black"
                                                            }
                                                        }
                                                    }

                                                        variant="contained" color="warning" onClick={() => handleOpen(foodtruck.id)}>

                                                        Abrir foodtruck
                                                    </MKButton>
                                                )}

                                            </MKTypography></div></td>
                                            <td>
                                                <div className="d-flex justify-content-center">


                                                    &nbsp;
                                                    <MKButton
                                                        href={`/foodtrucks/propietario/listafoodtrucks/${foodtruck.id}/editar`}
                                                        variant="gradient"
                                                        color="info"
                                                        size="large"
                                                        startIcon={<Icon icon={editIcon} />}
                                                    >
                                                        Editar
                                                    </MKButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <MKButton variant="gradient"
                                                        size="large"
                                                        sx={{
                                                            backgroundColor: "#FF6347",
                                                            color: "#FFFFFF",
                                                            /*hover*/
                                                            "&:hover": {

                                                                backgroundColor: "#FF6347",
                                                                color: "black"
                                                            },
                                                            /*focus*/
                                                            "&:focus": {
                                                                backgroundColor: "#FF6347",
                                                                color: "black"
                                                            }

                                                        }}
                                                        startIcon={<Icon icon={deleteIcon} />}
                                                        onClick={() => {
                                                            setShow(true);
                                                            setFoodtruck(foodtruck);
                                                        }}>Eliminar</MKButton>
                                                </div>
                                            </td>
                                        </tr>


                                    ))}
                                </tbody>
                            </div>
                        </div>

                    </Box>
                </Container><Modal open={show} onClose={() => setShow(false)}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                ¿Está seguro que desea eliminar el foodtruck?
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShow(false)}>Cancelar</button>
                                &nbsp;
                                <button type="button" className="btn btn-primary" onClick={() => {
                                    axios
                                        .delete(`http://20.199.41.101:8000/api/foodtrucks/${foodtruck.id}`, {
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
                                            window.location.reload();
                                        }
                                        )
                                        .catch((err) => {
                                            console.log(err);
                                        }
                                        );
                                    setShow(false);
                                }}>Eliminar</button>

                            </div>
                        </div>
                    </div>
                </Modal>



            </MKBox >
            {/*Si la resolución es mayor a 1920 px añadimos 4 etiquetas br */
                window.screen.width >= 1920 ? (
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                ) : null}
            <Footer />

        </div >
    )


}
export default ListaFoodtrucksPropietario;

