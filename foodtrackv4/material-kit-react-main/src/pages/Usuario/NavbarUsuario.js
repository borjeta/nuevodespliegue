
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import HomeUsuario from "./HomeUsuario";
import InfoCuenta from "./InfoCuenta";




function NavbarUsuario() {

    const rutas = [


        {
            name: "home",
            icon: <i className="fas fa-home" />,
            component: <HomeUsuario />,
        },
        {
            name: "Mi cuenta",
            icon: <i className="fas fa-user" />,
            route: "/micuenta",
        },
        {
            name: "Logout",
            icon: <i className="fas fa-sign-out-alt" />,
            route: "/logout",
        }
    ];

    return (
        <div>
            <DefaultNavbar
                routes={rutas}
                sticky
            />
        </div >
    )
}

export default NavbarUsuario;
