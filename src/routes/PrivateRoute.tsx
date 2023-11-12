import React from "react";
import { Navigate } from 'react-router-dom';

import useIsLoggedIn from "../hooks/useIsLoggedIn";

type PrivateRouteProps = {
    element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    //Utils
    //Logica para fijarnos si está autenticado o no
    const isLoggedIn = useIsLoggedIn();

    if (isLoggedIn) {
        return element;
    }
    return <Navigate to="/login"/>;

}

export default PrivateRoute;