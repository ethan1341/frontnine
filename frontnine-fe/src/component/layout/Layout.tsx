import {Navbar} from "../navbar/Navbar";
import React from "react";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}