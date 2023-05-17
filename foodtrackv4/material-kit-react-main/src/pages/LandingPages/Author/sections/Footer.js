
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
              <MKBox >
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/homeusuario"
                  rel="noreferrer"
                >
                  Home
                </MKTypography>
              </MKBox>

              <MKBox >
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/micuenta"
                  rel="noreferrer"
                >
                  Mi cuenta
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography
              variant="gradient"
              fontWeight="regular"
              opacity={0.8}
              textAlign={{ xs: "center", lg: "left" }}
              color="white"
              justifyContent={{ xs: "center", lg: "left" }}>
              Copyright © 2023 Creado por Borja Alventosa
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
