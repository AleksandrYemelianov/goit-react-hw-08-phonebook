import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isSuccesses, isRefreshing } = useAuth();
  const shouldRedirect = !isSuccesses && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};