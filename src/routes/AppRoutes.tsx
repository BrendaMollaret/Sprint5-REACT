import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import React from "react";
import DetalleProductoPage from "../pages/DetalleProductoPage/DetalleProductoPage";
import DetallePedidoPage from "../pages/DetallePedidoPege/DetallePedidoPage";
import LoginPage from "../pages/LoginPage/LoginPage";

import ShowProfilePage from "../pages/showProfilePage/showProfilePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ABMRubroPage from "../pages/ABMRubroPage/ABMRubroPage";


const PrivateRoute = React.lazy(() => import ('./PrivateRoute'));

const AppRoutes = () => {
  return (
    <>
 

        <Routes>
          <Route path="/" element={<HomePage />} />

          
          <Route path="/login" element={<LoginPage />} />
          
              
        
          <Route path="/adminPage" element={<PrivateRoute element= {<AdminPage/>}/>} />

          <Route path="/detalle/:idProduct" element={<DetalleProductoPage />} />

          <Route path="/detallePedido" element={<DetallePedidoPage />} />

          <Route path="/showProfile" element={<ShowProfilePage/>}/>

          <Route path="/registrarse" element={<RegisterPage />} />

          <Route path="/ABMRubro" element={<ABMRubroPage />} />


        </Routes>
  
 
    </>
  )
}

export default AppRoutes