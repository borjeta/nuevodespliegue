import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Icon } from "@iconify/react";
import editIcon from "@iconify/icons-mdi/edit";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import deleteIcon from "@iconify/icons-mdi/delete";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "pages/Admin/NavbarAdmin";
import MKInput from "components/MKInput";


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
    const [show, setShow] = useState(false);
    const [totalfoodtrucks, setTotalfoodtrucks] = useState(0);

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");



    useEffect(() => {

        axios
            .get(`http://20.199.41.101:8000/api/foodtrucks`, {
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
                if (res.data.length > 0) {
                    setTotalfoodtrucks(res.data.length + 1);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
        , []);


    return (
        <div>
            <NavbarAdmin />


            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h1 className="card-title ">Foodtrucks</h1>
                                <p className="card-category"> Listado de foodtrucks</p>
                            </div>
                            <MKBox sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1,
                                bgcolor: 'background.paper',
                            }}>
                                <MKTypography justify="left" align="left" variant="h5" >
                                    Total de foodtrucks: {totalfoodtrucks}
                                </MKTypography>

                                <MKButton>
                                    <Link to={`/foodtrucks/admin/crear`} className='btn btn-primary btn-md'>
                                        Crear foodtruck
                                    </Link>
                                </MKButton>
                                <MKButton>
                                    <Link to={`/homeadmin`} className='btn btn-primary btn-md'>
                                        Volver al inicio
                                    </Link>
                                </MKButton>
                                <MKTypography variant="h6" sx={{
                                    color: "#FFFFFF",
                                }} >
                                    Buscar foodtrucks
                                </MKTypography>

                                <MKInput type="text" sx={
                                    {
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                        marginTop: 3.5,
                                        marginRight: 4

                                    }

                                } placeholder="Buscar foodtrucks por nombre"
                                    onChange={() => {
                                        var nombre = document.getElementById("nombre").value;
                                        if(nombre != ""){

                                        axios
                                            .get(`http://20.199.41.101:8000/api/foodtrucks/buscar/${nombre}`, {
                                                headers: {
                                                    "Access-Control-Allow-Origin": "*",
                                                    "Content-Type": "application/json",
                                                    "user_id": `${user_id}`,
                                                    "api_token": `${api_token}`,
                                                    "role": `${role}`,
                                                    "nombre": `${nombre}`
                                                }
                                            })
                                            .then((res) => {
                                                setFoodtrucks(res.data);
                                                setTotalfoodtrucks(res.data.length+1);
                                                console.log(res.data);
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                        }
                                        else{
                                            axios
                                            .get(`http://20.199.41.101:8000/api/foodtrucks`, {
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
                                                setTotalfoodtrucks(res.data.length + 1);
                                            })
                                            .catch((err) => {
                                            });
                                        }
                                        
                                    }}

                                    id="nombre"
                                    name="nombre"
                                    label="Nombre"
                                    variant="outlined"
                                    size="small"
                                />


                            </MKBox>



                            <div className="card-body">
                                <div className="table-responsive">
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Nombre</TableCell>
                                                    <TableCell align="right">Descripción</TableCell>
                                                    <TableCell align="right">Dirección</TableCell>
                                                    <TableCell align="right">Teléfono</TableCell>
                                                    <TableCell align="right">Categoria </TableCell>
                                                    <TableCell align="right">Acciones</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {foodtrucks.map((foodtruck) => (
                                                    <TableRow key={foodtruck.id}>
                                                        <TableCell component="th" scope="row">
                                                            {foodtruck.nombre}
                                                        </TableCell>
                                                        <TableCell align="right">{foodtruck.descripcion}</TableCell>
                                                        <TableCell align="right">{foodtruck.ubicacion}</TableCell>
                                                        <TableCell align="right">{foodtruck.telefono}</TableCell>
                                                        <TableCell align="right">{foodtruck.TipoComida}</TableCell>

                                                        <TableCell align="right">
                                                            <MKButton
                                                                href={`/foodtrucks/propietario/listafoodtrucks/${foodtruck.id}/editar`}
                                                                variant="gradient"
                                                                size="large"
                                                                startIcon={<Icon icon={editIcon} />}
                                                                className="btn"

                                                            >
                                                                Editar
                                                            </MKButton>
                                                            <br />
                                                            &nbsp;
                                                            <br />

                                                            <MKButton variant="gradient" className="btn"
                                                                size="large"
                                                                sx = {{hover: { backgroundColor: "#Ee170f"
                                                                }}}
                                                                startIcon={<Icon icon={deleteIcon} />} onClick={() => {
                                                                    setShow(true);
                                                                    setFoodtruck(foodtruck);
                                                                }}>Eliminar</MKButton>
                                                        </TableCell>

                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Modal open={show} onClose={() => setShow(false)}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HomeAdmin;
