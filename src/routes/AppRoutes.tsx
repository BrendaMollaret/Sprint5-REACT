import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import React from "react";
import DetalleProductoPage from "../pages/DetalleProductoPage/DetalleProductoPage";
import DetallePedidoPage from "../pages/DetallePedidoPege/DetallePedidoPage";
import LoginPage from "../pages/LoginPage/LoginPage";

import Login from "../pages/login/Login";

import ShowProfilePage from "../pages/showProfilePage/showProfilePage";
import { ABMUnidadMedidaPage } from "../pages/ABMUnidadMedidaPage/ABMUnidadMedidaPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


const PrivateRoute = React.lazy(() => import ('./PrivateRoute'));

const AppRoutes = () => {
  return (
    <>
 

        <Routes>
          <Route path="/" element={<HomePage />} />

          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/loginProfe" element={<Login />} />

          
        
          <Route path="/adminPage" element={<PrivateRoute element= {<AdminPage/>}/>} />

          <Route path="/detalle/:idProduct" element={<DetalleProductoPage />} />
          <Route path="/detallePedido" element={<DetallePedidoPage />} />


          <Route path="/showProfile" element={<ShowProfilePage/>}/>

          <Route path="/ABMUnidadMedida" element={<ABMUnidadMedidaPage/>}/>
        </Routes>
  
 
    </>
  )
}

export default AppRoutes