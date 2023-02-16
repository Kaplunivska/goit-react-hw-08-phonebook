import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authentification/operations';
import { selectUserEmail } from 'redux/authentification/selectors';
import {
  Container,
  StyledUserIcon,
  Email,
  Button,
  StyledLogoutIcon,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const onClickHandler = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <StyledUserIcon />
      <Email>{email}</Email>
      <Button type="button" onClick={onClickHandler}>
        <StyledLogoutIcon />
      </Button>
    </Container>
  );
}
