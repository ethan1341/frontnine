import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React from "react";
import {Layout} from "../layout/Layout";
import {Home} from "../home/Home";

export const AppRouter = ()=>{
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}