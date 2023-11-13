import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import React from "react";
import DetalleProductoPage from "../pages/DetalleProductoPage/DetalleProductoPage";
import DetallePedidoPage from "../pages/DetallePedidoPege/DetallePedidoPage";



const Login = React.lazy(() => import ('../pages/login/Login'));
const PrivateRoute = React.lazy(() => import ('./PrivateRoute'));
const Admin = React.lazy(() => import ('../pages/AdminPage/Admin'))

const AppRoutes = () => {
  return (
    <>
 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
          <Route path="/detalle/:idProduct" element={<DetalleProductoPage />} />
          <Route path="/detallePedido" element={<DetallePedidoPage />} />
        </Routes>
  
 
    </>
  )
}

export default AppRoutes