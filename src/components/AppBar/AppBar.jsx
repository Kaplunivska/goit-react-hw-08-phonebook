import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/authentification/selectors';
import { StyledLogo, Header, StyledLogin } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header>
        <StyledLogo to="/">PHONEBOOK</StyledLogo>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <StyledLogin to="/login">Log in</StyledLogin>
        )}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
