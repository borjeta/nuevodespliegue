/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Logout from "pages/Usuario/Logout";
import HomeUsuario from "pages/Usuario/HomeUsuario";
import Signin from "pages/LandingPages/SignIn";
import InfoCuenta from "pages/Usuario/InfoCuenta";
import Registro from "pages/Usuario/Registro";
import InfoFoodtruck from "pages/Foodtruck/InfoFoodtruck";
import HomePropietario from "pages/Propietario/HomePropietario";
import routes from "routes";
import ListaFoodtrucksPropietario from "pages/Propietario/ListaFoodtrucksPropietario";
import InfoFoodtruckPropietario from "pages/Propietario/InfoFoodtruckPropietario";
import EditarFoodtruck from "pages/Propietario/EditarFoodtruck";
import HomeAdmin from "pages/Admin/HomeAdmin";
import ListaFoodtrucksAdmin from "pages/Admin/ListaFoodtrucksAdmin";
import ListaUsuariosAdmin from "pages/Admin/ListaUsuariosAdmin";
import EditarUsuarioAdmin from "pages/Admin/EditarUsuarioAdmin";
import DatosCompletosUsuario from "pages/Admin/DatosCompletosUsuario";
import CrearFoodtruck from "pages/Propietario/CrearFoodtruck";
import bgImage from "assets/images/img1.jpeg";
import MKBox from "components/MKBox";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <div style={{
      backgroundImage: "/img2(Recortada).jpeg"
    }} >
      <ThemeProvider theme={
        pathname.indexOf("/presentation") !== -1
          ? Presentation
          : theme
      }>
        <CssBaseline />
        <MKBox  sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
          <Routes>
            {getRoutes(routes)}
            <Route path=" " element={<Navigate to="/login" />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/homeusuario" element={<HomeUsuario />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/micuenta" element={<InfoCuenta />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/foodtrucks/:id/info" element={<InfoFoodtruck />} />
            <Route path="/foodtrucks/dondeesta/:id/info" element={<InfoFoodtruck />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/homepropietario" element={<HomePropietario />} />
            <Route path="/foodtrucks/propietario/listafoodtrucks" element={<ListaFoodtrucksPropietario />} />
            <Route path="/foodtrucks/propietario/listafoodtrucks/:id/info" element={<InfoFoodtruckPropietario />} />
            <Route path="/foodtrucks/propietario/listafoodtrucks/:id/editar" element={<EditarFoodtruck />} />
            <Route path="/homeadmin" element={<HomeAdmin />} />
            <Route path="/admin/foodtrucks" element={<ListaFoodtrucksAdmin />} />
            <Route path="/admin/usuarios" element={<ListaUsuariosAdmin />} />
            <Route path="/admin/usuarios/:id/editar" element={<EditarUsuarioAdmin />} />
            <Route path="/admin/usuarios/:id/info" element={<DatosCompletosUsuario />} />
            <Route path="/foodtrucks/propietario/nuevafoodtruck" element={<CrearFoodtruck />} />
          </Routes>
        </MKBox>
      </ThemeProvider>
    </div>
  );
}

