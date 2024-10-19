import { Route, Routes } from "react-router-dom";
import React from "react";


import Home from "../../Pages/Home";



const RouteList = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
}

export default RouteList