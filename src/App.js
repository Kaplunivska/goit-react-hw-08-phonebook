import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsRefetchingCurrentUser } from 'redux/authentification/selectors';
import { fetchCurrentUser } from 'redux/authentification/operations';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

function App() {
  const dispatch = useDispatch();
  const refetchingCurrentUser = useSelector(selectIsRefetchingCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!refetchingCurrentUser && (
        <div className="App">
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route
                index
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Home />}
                  />
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Home />}
                  />
                }
              ></Route>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              ></Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <ToastContainer position="top-center" />
        </div>
      )}
    </>
  );
}

export default App;