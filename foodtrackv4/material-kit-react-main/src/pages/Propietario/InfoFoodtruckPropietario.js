import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
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
import NavbarPropietario from "./NavbarPropietario";





function InfoFoodtruckPropietario() {
    const [data, setData] = useState([]);
    const [foodtruck, setfoodtruck] = useState([]);
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(true);
    const id = useParams();


    const [open, setOpen] = useState(false);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    useEffect(() => {

        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        document.getElementById("root").scrollTop = 0;

        /*OBtener datos del foodtruck*/
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
                setfoodtruck(res.data);
                document.getElementById("nombre").value = res.data.nombre;
                document.getElementById("descripcion").value = res.data.descripcion;
                document.getElementById("ubicacion").value = res.data.ubicacion;
                document.getElementById("telefono").value = res.data.telefono;
                document.getElementById("avatar").value = res.data.avatar;
                document.getElementById("horario").value = res.data.horario;
                document.getElementById("TipoComida").value = res.data.TipoComida;
                if (document.getElementById)

                    console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });



        axios
            .get(`http://localhost:8000/api/usuarios/${user_id}`, {
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



    }, []);

    /*ACtivar y desactivar foodtruck*/

    const handleOpen = () => {
        axios
            .get(`http://localhost:8000/api/foodtrucks/listaporpropietario/${foodtruck.id}/abrirfoodtruck`, {
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
                window.location.href = `/foodtrucks/propietario/listafoodtrucks/${foodtruck.id}/info`;

            })
            .catch((err) => {
                console.log(err);

            });
    }



    const handleClose = () => {
        axios
            .get(`http://localhost:8000/api/foodtrucks/listaporpropietario/${foodtruck.id}/cerrarfoodtruck`, {
                "estado": "Inactivo"
            }, {
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
                window.location.href = `/foodtrucks/propietario/listafoodtrucks/${foodtruck.id}/info`;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const toggleModal = () => {

        handleSubmit();
        setShow(!show);
    };
    const handleSubmit = () => {


        axios.put(`http://localhost:8000/api/foodtrucks/${foodtruck.id}/editar`, {

            "nombre": document.getElementById("nombre").value,
            "descripcion": document.getElementById("descripcion").value,
            "ubicacion": document.getElementById("ubicacion").value,
            "telefono": document.getElementById("telefono").value,
            "avatar": document.getElementById("avatar").value,
            "horario": document.getElementById("horario").value,
            "tipocomida": document.getElementById("TipoComida").value,
            "status": foodtruck.status,

        }, {
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

            }
            )
            .catch((err) => {
                console.log(err);
                window.location.href = `http://localhost:3000/foodtrucks/propietario/listafoodtrucks`;

            }
            );

    };


    const handleAvatar = (e) => {
        /* Lector de archivos
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);
        */

        window.location.href = `/foodtrucks/propietario/listafoodtrucks/${foodtruck.id}/info`;

    }


    return (
        <div>
            <NavbarPropietario />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-user">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5 pr-1">
                                        <div className="form-group">
                                            <label>Nombre</label>
                                            <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 px-1">
                                        <div className="form-group">
                                            <label>Telefono</label>
                                            <input type="text" className="form-control" id="telefono" placeholder="Telefono" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 pl-1">
                                        <div className="form-group">
                                            <label>Ubicacion</label>
                                            <input type="text" className="form-control" id="ubicacion" placeholder="Ubicacion" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Descripcion</label>
                                            <input type="text" className="form-control" id="descripcion" placeholder="Descripcion" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 pr-1">
                                        <div className="form-group">
                                            <label>Horario</label>
                                            <input type="text" className="form-control" id="horario" placeholder="Horario" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 pl-1">
                                        <div className="form-group">
                                            <label>Tipo de comida</label>
                                            <input type="text" className="form-control" id="TipoComida" placeholder="Tipo de comida" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Avatar</label>
                                            <input type="text" className="form-control" id="avatar" placeholder="Avatar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="update ml-auto mr-auto">
                                        <button type="submit" className="btn btn-primary btn-round" onClick={toggleModal}>Actualizar</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>



    );
}
export default InfoFoodtruckPropietario;
