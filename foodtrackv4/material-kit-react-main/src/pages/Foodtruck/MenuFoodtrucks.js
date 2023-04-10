import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import NavbarDark from "layouts/sections/navigation/navbars/components/NavbarDark";



function MenuFoodtrucks() {



    return (
        <div>
            
            <br /><br />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Foodtruck</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Menu</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>

                        </div>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default MenuFoodtrucks;