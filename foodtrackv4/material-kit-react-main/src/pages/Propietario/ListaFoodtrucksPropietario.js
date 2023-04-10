import { useEffect, useState } from "react";
import axios from "axios";
import Container from '@mui/material/Container';
import NavbarPropietario from "pages/Propietario/NavbarPropietario";
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import editIcon from '@iconify/icons-mdi/edit';
import Modal from '@mui/material/Modal';



import MKButton from "components/MKButton";
import MKBox from "components/MKBox";


function ListaFoodtrucksPropietario() {
    const [foodtrucks, setFoodtrucks] = useState([]);
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
            .get(`http://localhost:8000/api/foodtrucks/listaporpropietario/${user_id}`, {
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


    return (
        <MKBox maxWidth="auto" >
            <NavbarPropietario />
            <br />
            <br />
            <br />
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute  text-white">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse justify-content-end">
                        <MKButton href="/foodtrucks/propietario/nuevafoodtruck" variant="gradient" color="info" size="large" startIcon={<Icon icon={editIcon} />}>
                            Crear Foodtruck
                        </MKButton>
                        &nbsp;

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                    <i className="material-icons">settings</i>

                                </a>
                            </li>
                            <li className="nav-item dropdown">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />



            {/*Contenedor para la los botones de crear foodtruck y contactar con soporte*/}
            {/*align-center justify-content-center*/}
            <Container maxWidth="lg" align="center">
                <Box sx={{ width: '100%' }}>
                    <div className="d-flex justify-content-center align-text-center ">
                        <table className="table table-striped table-hover">

                            <thead>
                                <tr>
                                    <th scope="col"> <div className="d-flex justify-content-center align-text-center ">Nombre</div></th>
                                    <th scope="col"> <div className="d-flex justify-content-center align-text-center ">Estado</div></th>
                                    <th scope="col"><div className="d-flex justify-content-center align-text-center ">Acciones</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodtrucks.map((foodtruck) => (
                                    <tr key={foodtruck.id}>
                                        <td> <div className="d-flex justify-content-center align-text-center ">{foodtruck.nombre}</div></td>
                                        <td> <div className="d-flex justify-content-center align-text-center ">{foodtruck.status}</div></td>
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
                                                <MKButton variant="gradient" color="info" size="large"
                                                    startIcon={<Icon icon={editIcon} />}
                                                    onClick={() => {
                                                        setShow(true);
                                                    }}>Eliminar</MKButton>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </Box>
            </Container>
            <Modal open={show} onClose={() => setShow(false)}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            ¿Está seguro que desea eliminar el foodtruck?
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShow(false)}>Cancelar</button>
                            &nbsp;
                            <button type="button" className="btn btn-primary" onClick={() => {
                                axios
                                    .delete(`http://localhost:8000/api/foodtrucks/${foodtruck.id}`, {
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
    )


}
export default ListaFoodtrucksPropietario;

