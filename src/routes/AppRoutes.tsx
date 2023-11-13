import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import React from "react";
import DetalleProductoPage from "../pages/DetalleProductoPage/DetalleProductoPage";
import DetallePedidoPage from "../pages/DetallePedidoPege/DetallePedidoPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Login from "../pages/login/Login";


const PrivateRoute = React.lazy(() => import ('./PrivateRoute'));
const Admin = React.lazy(() => import ('../pages/AdminPage/Admin'))

const AppRoutes = () => {
  return (
    <>
 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/loginProfe" element={<Login />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />

          <Route path="/detalle/:idProduct" element={<DetalleProductoPage />} />
          <Route path="/detallePedido" element={<DetallePedidoPage />} />
        </Routes>
  
 
    </>
  )
}

export default AppRoutes