
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import HomeAdmin from "./HomeAdmin";




function NavbarUsuario() {

    const rutas = [
        {
            name: "Panel de control",
            icon: <i className="fas fa-home" />,
            route: "/homeadmin",
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
