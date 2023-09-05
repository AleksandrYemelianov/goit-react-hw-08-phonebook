import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';



export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isSuccesses } = useAuth();
    return isSuccesses ? <Navigate to={redirectTo} /> : Component;
};