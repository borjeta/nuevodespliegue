import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


function foodtruckFilter({ selectedCategory, onCategoryChange }) {
    return (<div>
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
    </div>
    )
}

export default foodtruckFilter;