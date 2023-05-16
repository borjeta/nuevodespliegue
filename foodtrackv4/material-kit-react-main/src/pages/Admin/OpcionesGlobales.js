import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
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
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import Footer from "pages/LandingPages/Author/sections/Footer";
import Card from "@mui/material/Card";


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
            .get(`http://localhost:8000/api/foodtrucks/zonas/ciudades/zona`, {
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
    const Activo = (status) => {
        if (status == "Activo") {
            return "Activo";
        } else {
            return "Inactivo";
        }

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
                    marginTop: "1rem",
                }}>
                Encuentra los mejores foodtrucks cerca de ti
            </MKAlert>
            {/*Insertamos separaador*/}
            <span style={{ display: "block", height: "20px" }}></span>

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
                            <option selected value="Activas">Activas</option>
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
                            <option selected value=" ">Todas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    </option>
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
                <Container maxWidth="md" sx={{
                    mt: 4, mb: 4,
                    border: "1px solid #FFFFFF",
                    borderRadius: "12px",
                    padding: "10px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    background: "linear-gradient(90deg, #836b4f  0%, #FFDB58 50%, #836b4f  100%)",


                }}>



                    <Box sx={{ my: 4 }}>



                        <Container sx={{ py: 2 }} maxWidth="md"
                        >
                            {/* End hero unit */}
                            <Grid container spacing={6} sx={
                                {

                                }

                            } >


                                {foodtrucks.map((foodtruck) => (
                                    <Grid item key={foodtruck.id} xs={12} sm={6} md={4} >
                                        <Card sx={{
                                            height: '100%', display: 'flex', flexDirection: 'column', border: "1px solid #FFFFFF",
                                            borderRadius: "12px",
                                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                                        }} border={1} borderRadius={16}>
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    width: "25rem",
                                                    height: "15rem",
                                                    margin: "auto",
                                                    position: "relative",

                                                }}
                                                image={foodtruck.avatar}
                                                alt="random"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h4" component="h4" sx={
                                                    {
                                                        textAlign: "center",
                                                        fontWeight: "bold",
                                                        fontSize: "2rem",
                                                    }

                                                }>
                                                    {foodtruck.nombre}
                                                </Typography>
                                                <Typography>
                                                    {foodtruck.descripcion}
                                                </Typography>
                                                &nbsp;

                                                <Typography color="text.primary">
                                                    {foodtruck.ubicacion}
                                                </Typography>
                                                &nbsp;
                                                <Typography color="text.primary">
                                                    Cerramos a las {foodtruck.horario} horas de hoy
                                                </Typography>

                                                <Typography color="text.primary">
                                                    Categoria: {foodtruck.TipoComida}
                                                </Typography>

                                            </CardContent>
                                            <div className="row g-3 align-items-center justify-content-center">
                                                <CardActions >
                                                    <Link to={`/foodtrucks/dondeesta/${foodtruck.id}/info`} className='btn btn-primary btn-lg '>
                                                        Ver donde está ahora
                                                    </Link>
                                                </CardActions>
                                            </div>
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