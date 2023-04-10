import { useEffect, useState } from "react";
import axios from "axios";


function Logout() {
    const [data, setData] = useState([]);



    useEffect(() => {
        /*elimina las id de usuario y api_token de las cookies*/

        document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "api_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/";

    }, []);

    return (
        <div>
        </div>
    );

}

export default Logout;