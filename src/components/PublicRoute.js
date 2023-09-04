import { Navigate } from 'react-router-dom';
import { useGetUserQuery } from 'redux/authUser/userSlice';


export const PublicRoute =  ({ component: Component, redirectTo = '/' }) => {
    const { isSuccess} =  useGetUserQuery();
    return isSuccess ? <Navigate to={redirectTo} /> : Component;
};