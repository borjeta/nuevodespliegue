import { useEffect } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

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
import OpcionesGlobales from "pages/Admin/OpcionesGlobales";
import bgImage from "assets/images/img1.jpeg";
import MKBox from "components/MKBox";
import AjustesPropietario from "pages/Propietario/AjustesPropietario";
import CrearFoodtruckAdmin from "pages/Admin/CrearFoodtruckAdmin";
import CrearAdmin from "pages/Admin/CrearAdmin";

export default function App() {
  const { pathname } = useLocation();

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
        <MKBox sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          position: "fixed",

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
            <Route path="/foodtrucks/admin/crear" element={<CrearFoodtruckAdmin />} />
            <Route path="/admin/opcionesglobales" element={<OpcionesGlobales />} />
            <Route path="/foodtrucks/propietario/ajustes" element={<AjustesPropietario />} />
            <Route path="/admin/crear/crearadmin" element={<CrearAdmin />} />
          </Routes>
        </MKBox>
      </ThemeProvider>
    </div>
  );
}

