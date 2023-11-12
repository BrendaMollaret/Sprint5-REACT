import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import React from "react";
import DetalleTareaPage from "../pages/DetalleTareaPage/DetalleTareaPage";

const Login = React.lazy(() => import ('../pages/login/Login'));
const PrivateRoute = React.lazy(() => import ('./PrivateRoute'));
const Admin = React.lazy(() => import ('../pages/AdminPage/Admin'))

const AppRoutes = () => {
  return (
    <>
    <Routes>
      
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/admin' element={<PrivateRoute element={<Admin/>}/>}> </Route> {/* Slot: cuando mandamos un componente como propiedad */}
        <Route path='/detalle/idProduct' element={<DetalleTareaPage/>}></Route>
        
    </Routes>
    </>
  )
}

export default AppRoutes