import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authentification/selectors';
import { useSelector } from 'react-redux';
export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{!isLoggedIn ? <Navigate to={redirectTo} /> : Component}</>;
}
