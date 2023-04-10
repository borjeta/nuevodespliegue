
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import HomePropietario from "./HomePropietario";





function NavbarPropietario() {

    const rutas = [

        {
            name: "Mis foodtrucks",
            icon: <i className="fas fa-home" />,
            route: "/foodtrucks/propietario/listafoodtrucks",

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

export default NavbarPropietario;
