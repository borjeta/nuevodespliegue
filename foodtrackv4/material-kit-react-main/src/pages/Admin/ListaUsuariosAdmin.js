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

    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    const StyledTableCell = styled(TableCell)`
    border: 1px solid black;
    background-color: #f5f5f5;
    color: #000000;
    font-weight: bold;
    `;
    const StyledTableRow = styled(TableRow)`
    background-color: #f5f5f5;
    color: #000000;
    font-weight: bold;
    `;
    const StyledButton = styled(MKButton)`
    background-color: #f5f5f5;
    color: #000000;
    font-weight: bold;
    `;
    const StyledIcon = styled(Icon)`
    color: #000000;
    font-weight: bold;
    `;



    useEffect(() => {

        axios
            .get(`http://localhost:8000/api/usuarios`, {
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

                            <Table className={classes.table} aria-label="simple table">

                                <TableHead >
                                    <br />
                                    <TableRow>
                                        <MKTypography variant="h2"
                                            justify="center"
                                            align="center"
                                            color="textprimary"
                                            gutterBottom

                                        >
                                            Usuarios
                                        </MKTypography>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            <MKTypography variant="h4" justify="center" align="center" color="textprimary" gutterBottom >
                                                Nombre
                                            </MKTypography>

                                        </TableCell>
                                        <TableCell align="right">
                                            <MKTypography variant="h4" justify="center" align="center" color="textprimary" gutterBottom >
                                                Email
                                            </MKTypography>
                                        </TableCell>

                                        <TableCell align="right">
                                            <MKTypography variant="h4" justify="center" align="center" color="textprimary" gutterBottom >
                                                Rol</MKTypography></TableCell>
                                        <TableCell align="right">                                    <MKTypography variant="h4" justify="center" align="center" color="textprimary" gutterBottom >
                                            Acciones</MKTypography></TableCell>
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
                                                <StyledButton>
                                                    <Link to={`/admin/usuarios/${usuario.id}/info`} className='btn btn-primary btn-sm'>
                                                        <StyledIcon icon={showIcon} />
                                                    </Link>
                                                </StyledButton>
                                                <StyledButton>
                                                    <Link to={`/admin/usuarios/${usuario.id}/editar`} className='btn btn-primary btn-sm'>
                                                        <StyledIcon icon={editIcon} />
                                                    </Link>
                                                </StyledButton>
                                                <StyledButton>
                                                    <Link to={`/admin/usuarios/${usuario.id}/eliminar`} className='btn btn-primary btn-sm'>
                                                        <StyledIcon icon={deleteIcon} />
                                                    </Link>
                                                </StyledButton>
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
