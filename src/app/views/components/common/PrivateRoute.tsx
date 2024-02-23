import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '~/store';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
    const { isAuthenticated } =useSelector((state:RootState) => state.login);

    return (
        <>{isAuthenticated ? <Navigate to="/" /> : <>{children}</>}</>
    );
};

export default PrivateRoute;
