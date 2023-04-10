/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Footer() {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
            </MKTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/homeusuario"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </MKTypography>
              </MKBox>

              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/micuenta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mi cuenta 
                                  </MKTypography>
              </MKBox>



              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  
                </MKTypography>
              </MKBox>


            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              Copyright ©  2023 Creado por Borja Alventosa
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
