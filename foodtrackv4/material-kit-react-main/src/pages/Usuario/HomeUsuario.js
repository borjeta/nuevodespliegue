import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import NavbarUsuario from "./NavbarUsuario";

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MKAlert from "components/MKAlert";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import Icon from '@mui/material/Icon';
import Footer from "pages/LandingPages/Author/sections/Footer";
import Card from "@mui/material/Card";
import { Block } from "@mui/icons-material";
import { bool } from "prop-types";

function HomeUsuario() {
    const [data, setData] = useState([]);
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [foodtrucks, setFoodtrucks] = useState([]);
    const theme = createTheme();
    const [selectedCategory, setSelectedCategory] = useState("");
    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const [zona, setZona] = useState("");
    useEffect(() => {

        axios
            .post(`http://localhost:8000/api/foodtrucks/estado/foodtrucksabiertas`, {
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

    const handleDetalles = (id) => {
        window.location.href = `/foodtrucks/${id}/info`;
    }

    /*configuramos el addeventlistener onChange del deplegable de categorias*/
    const handleCategoria = () => {
        var categoria = document.getElementById("categoria").value;

        axios
            .post(`http://localhost:8000/api/foodtrucks/categoria/categoria`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`,
                    "categoria": `${categoria}`
                }

            })
            .then((res) => {
                setFoodtrucks(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    /*configuramos el addeventlistener onChange del buscador por zona*/
    const handleZona = () => {
        var zona1 = document.getElementById("filterzona").value;
        alert(zona1);
        

        axios
            .get(`http://localhost:8000/api/foodtrucks/zona/zona`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "user_id": `${user_id}`,
                    "api_token": `${api_token}`,
                    "role": `${role}`,
                    "zona": `${zona1}`
                }


            })
            .then((res) => {
                setFoodtrucks(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });


    }





    return (
        <div >
            <NavbarUsuario />

            <br />
            <br />
            <br />
            <br />
            <MKAlert severity="info"
                sx={{
                    width: "70%",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    marginTop: "10px",
                }}>
                Encuentra los mejores foodtrucks cerca de ti
            </MKAlert>
            <MKBox sx={{
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "12px",
                padding: "10px",
                color: "#FFFFFF",
                border: "1px solid #FFFFFF",



            }} >
                <div className="row g-3 align-items-center justify-content-center">

                    <div className="col-md-4">

                        <MKTypography variant="h6" sx={{
                            color: "#FFFFFF",
                        }} >
                            Buscar por categoria
                        </MKTypography>

                        <select className="form-select" defaultValue={selectedCategory} onChange={handleCategoria} aria-label="Default select example" id="categoria">
                            <option value="Comida Mexicana">Comida Mexicana</option>
                            <option value="Comida Italiana">Comida Italiana</option>
                            <option value="Comida Japonesa">Comida Japonesa</option>
                            <option value="Comida China">Comida China</option>
                            <option value="Comida Española">Comida Española</option>
                            <option value="Comida Americana">Comida Americana</option>
                            <option value="Comida Peruana">Comida Peruana</option>
                            <option value="Comida Colombiana">Comida Colombiana</option>
                            <option value="Comida Argentina">Comida Argentina</option>
                            <option value="Hamburguesas y Hot Dogs">Hamburguesas y Hot Dogs</option>
                            <option value="Helados">Helados</option>
                            <option value="Churrerias">Churrerias</option>
                            <option value="Golosinas">Golosinas</option>
                        </select>

                    </div>
                    <div className="col-md-4">

                        <MKTypography variant="h6" sx={{
                            width: "70%",
                            color: "#FFFFFF",
                            margin: "auto",
                            position: "relative",
                        }} >
                            Buscador por zona
                        </MKTypography>
                        <select className="form-select" defaultValue=" " onChange={handleZona} aria-label="Default select example" id="filterzona">
                            <option value=" ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    </option>
                            <option value="Ontinyent">Ontinyent</option>
                            <option value="Alcoy">Alcoy</option>
                            <option value="xativa">Xativa</option>
                            <option value="Gandia">Gandia</option>
                        </select>
                    </div>
                </div>
            </MKBox>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>



                    <Box sx={{ my: 4 }}>



                        <Container sx={{ py: 2 }} maxWidth="md"
                        >
                            {/* End hero unit */}
                            <Grid container spacing={6}>


                                {foodtrucks.map((foodtruck) => (
                                    <Grid item key={foodtruck.id} xs={12} sm={6} md={4} >
                                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} border={1} borderRadius={16}>
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    // 16:9
                                                }}
                                                image="https://source.unsplash.com/random"
                                                alt="random"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h5" component="h5">
                                                    {foodtruck.nombre}
                                                </Typography>
                                                <Typography>
                                                    {foodtruck.descripcion}
                                                </Typography>
                                                <Typography>
                                                    {foodtruck.direccion}
                                                </Typography>
                                                &nbsp;
                                                <Typography color="text.primary">
                                                    {foodtruck.horario}
                                                </Typography>
                                                &nbsp;
                                                <Typography >
                                                    Estado: {foodtruck.status}
                                                </Typography>
                                            </CardContent>
                                            <CardActions >
                                                <Link to={`/foodtrucks/dondeesta/${foodtruck.id}/info`} className='btn btn-primary btn-lg'>
                                                    Ver donde está ahora
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}

                            </Grid>
                        </Container>
                    </Box>
                </Container>
            </ThemeProvider >
            <Footer />
        </div >
    );
}

export default HomeUsuario;
