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
import showIcon from "@iconify/icons-mdi/eye";
import styled from "styled-components";
import MKInput from "components/MKInput";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import deleteIcon from "@iconify/icons-mdi/delete";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "pages/Admin/NavbarAdmin";


const useStyles = makeStyles({
    table: {

    },
});

/* Tabla para listar los usuarios si el usuario es admin */
function ListaUsuariosAdmin() {

    const classes = useStyles();
    const [data, setData] = useState([]);
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [usuarios, setUsuarios] = useState([]);
    const [foodtruck, setFoodtruck] = useState([]);
    const [totalUsuarios, setTotalUsuarios] = useState(0);


    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    const deleteCookie = (name) => {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    deleteCookie("api_token");
    deleteCookie("user_id");
    deleteCookie("role");


    useEffect(() => {

        axios
            .get(`http://20.199.41.101:8000/api/usuarios`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`
                }

            })
            .then((res) => {
                setUsuarios(res.data);
                console.log(res.data);
                if (res.data != null) {
                    setTotalUsuarios(res.data.length + 1);
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
            <MKBox sx={{



            }}><div className="card-body">
                    <div className="table-responsive">
                        <TableContainer component={Paper}>
                            <div className="card-header card-header-primary">
                                <h4 className="card-title ">Usuarios</h4>
                                <p className="card-category"> Aquí puedes ver todos los usuarios registrados en FoodTrack</p>
                            </div>
                            <MKBox sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1,
                                bgcolor: 'background.paper',
                            }}>
                                <MKTypography justify="left" align="left" variant="h5" >
                                    Total de usuarios: {totalUsuarios}
                                </MKTypography>

                                <MKButton>
                                    <Link to={`/admin/usuarios/crear`} className='btn btn-primary btn-md'>
                                        Crear usuario
                                    </Link>
                                </MKButton>
                                <MKButton>
                                    <Link to={`/homeadmin`} className='btn btn-primary btn-md'>
                                        Volver al inicio
                                    </Link>
                                </MKButton>
                                <MKInput type="text" sx={
                                    {
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                        marginTop: 1,
                                        marginRight: 4
                                    }

                                } placeholder="Buscar usuarios por email"
                                    onChange={() => {
                                        var email = document.getElementById("email").value;

                                        if (email != "" && email != null && email != undefined) {

                                            axios
                                                .get(`http://20.199.41.101:8000/api/usuarios/admin/buscar`, {
                                                    headers: {
                                                        "Access-Control-Allow-Origin": "*",
                                                        "Content-Type": "application/json",
                                                        "user_id": `${user_id}`,
                                                        "api_token": `${api_token}`,
                                                        "role": `${role}`,
                                                        "email": `${email}`
                                                    }
                                                })
                                                .then((res) => {
                                                    setUsuarios(res.data);
                                                    setTotalUsuarios(res.data.length + 1);
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                });
                                        }
                                        else {
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

                                    id="email"
                                    name="email"
                                    label="Filtrar usuarios por email"
                                    variant="outlined"
                                    size="medium"
                                />



                            </MKBox>



                            <Table className={classes.table} aria-label="simple table">

                                <TableHead >
                                    <TableRow>
                                        <TableCell>
                                            <MKTypography justify="center" align="center" variant="h5" >
                                                Nombre
                                            </MKTypography>

                                        </TableCell>
                                        <TableCell align="right">
                                            <MKTypography justify="center" align="center" variant="h5"  >
                                                Email
                                            </MKTypography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <MKTypography justify="center" align="center" variant="h5"  >
                                                Rol</MKTypography></TableCell>
                                        <TableCell align="right">
                                            <MKTypography justify="center" align="center" variant="h5" >
                                                Acciones
                                            </MKTypography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {usuarios.map((usuario) => (
                                        <TableRow key={usuario.id}>
                                            <TableCell component="th" scope="row">
                                                {usuario.name}
                                            </TableCell>
                                            <TableCell align="right">{usuario.email}</TableCell>
                                            <TableCell align="right">{usuario.role}</TableCell>
                                            <TableCell align="right">
                                                <MKButton>
                                                    <Link to={`/admin/usuarios/${usuario.id}/info`} className='btn btn-primary btn-sm'>
                                                        <Icon icon={showIcon} />
                                                    </Link>
                                                </MKButton>
                                                <MKButton>
                                                    <Link to={`/admin/usuarios/${usuario.id}/editar`} className='btn btn-primary btn-sm'>
                                                        <Icon icon={editIcon} />
                                                    </Link>
                                                </MKButton>
                                                <MKButton>
                                                    <Link to={`/admin/usuarios/${usuario.id}/eliminar`} className='btn btn-primary btn-sm'>
                                                        <Icon icon={deleteIcon} />
                                                    </Link>
                                                </MKButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </MKBox>

        </div >
    );
}

export default ListaUsuariosAdmin;
