import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import Container from '@mui/material/Container';
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import MKButton from "components/MKButton";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MKAvatar from "components/MKAvatar";
import Stack from "@mui/material/Stack";
import { borders } from '@material-ui/system';
import Box from '@mui/material/Box';


const defaultProps = {
    bgcolor: 'background.paper',
    m: 5,
    style: {},
    borderColor: 'text.primary',
    border: 1,
    borderRadius: 16,
    boxShadow: 3,
    p: 2,
};


function InfoFoodtruck() {
    const [foodtruck, setFoodtruck] = useState([]);
    const api_token = document.cookie.replace(/(?:(?:^|.*;\s*)api_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const id = useParams();
    const [showDatos, setShowDatos] = useState(true);
    const [show, setShow] = useState(true);
    const toggleModal = () => setShow(!show);



    useEffect(() => {

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
                setFoodtruck(res.data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    var URLUbicacion = `https://www.google.com/maps/search/?api=1&query=`;


    return (
        <MKBox component="section" py={4}  >

            <Container>

                <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">

                </Grid>
                <Modal open={show} sx={{ display: "grid", placeItems: "center" }} >
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
                            <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2} >
                                <MKTypography variant="h5">Detalles de la foodtruck</MKTypography>
                                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={() => {
                                    window.history.back();
                                }} />

                            </MKBox>
                            <Divider sx={{ my: 0 }} />
                            <MKBox
                                component="section"
                                py={6}
                                borderRadius="xl"
                                bgColor="white"
                                shadow="xl"
                            >

                                <Container  >
                                    <MKButton variant="gradient" color="info" size="large" onClick={() => {
                                        window.history.back();
                                    }}>
                                        volver
                                    </MKButton>
                                    <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
                                        <MKTypography variant="h3" >
                                        </MKTypography>

                                        <MKBox width="100%" component="form" method="post" autoComplete="off"
                                            border={1} {...defaultProps} >


                                            <Grid container item
                                                xs={10}
                                                md={10}
                                                lg={10}
                                                mx="auto"
                                                textAlign="center"
                                                justifyContent="center"
                                                alignItems="center" >

                                                <Grid item xs={12} sm={10} >
                                                    <MKTypography variant="h4" >
                                                        {foodtruck.nombre}
                                                    </MKTypography>
<hr></hr>
                                                    <MKTypography
                                                        variant="h6"
                                                        color="primary"
                                                        fontWeight="400"
                                                        mb={2}
                                                    >
                                                        {foodtruck.description}
                                                    </MKTypography>
                                                    <MKBox component="section" variant="contained">
                                                        <Container>
                                                            <Grid container justifyContent="center">
                                                                <Stack direction="row" alignItems="flex-end" spacing={1}>
                                                                    <MKAvatar src={foodtruck.avatar}
                                                                        alt="xxl" size="xxl" />
                                                                </Stack>
                                                            </Grid>
                                                        </Container>
                                                    </MKBox>



                                                    <MKTypography
                                                        variant="h6"
                                                        color="textSecondary"
                                                        fontWeight="400"
                                                        mb={2}
                                                    >
                                                        {foodtruck.telefono}
                                                    </MKTypography>
                                                    <MKTypography
                                                        variant="h6"
                                                        color="textSecondary"
                                                        fontWeight="400"
                                                        mb={2}
                                                    >Estamos en &nbsp;
                                                        {foodtruck.ubicacion}
                                                    </MKTypography>
                                                    <MKTypography
                                                        variant="h3"
                                                        color="primary"
                                                        fontWeight="600"
                                                        mb={2}
                                                    >
                                                        ¡ABIERTO AHORA!
                                                    </MKTypography>
                                                    <MKTypography
                                                        variant="h6"
                                                        fontWeight="400"
                                                        mb={2}
                                                    >
                                                        Abiertos hasta &nbsp;{foodtruck.horario}
                                                    </MKTypography>

                                                    <MKButton variant="gradient" color="info" size="large" onClick={() => {
                                                        window.location.href = URLUbicacion + foodtruck.ubicacion;
                                                    }}>
                                                        Ubicacion
                                                    </MKButton>








                                                </Grid>
                                            </Grid>
                                            <Grid container item justifyContent="center" xs={12} my={1}>

                                                &nbsp;
                                            </Grid>
                                        </MKBox>
                                    </Grid>
                                </Container>
                            </MKBox>
                        </MKBox>
                    </Slide>
                </Modal>
            </Container>
        </MKBox >



    );
}

export default InfoFoodtruck;
