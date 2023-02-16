import styled from '@emotion/styled';
import { BiUserCircle } from 'react-icons/bi';
import { SlLogout } from 'react-icons/sl';

export const Container = styled.div`
  margin-left: auto;
  display: flex;
`;
export const StyledUserIcon = styled(BiUserCircle)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.grey};
  margin-right: 10px;
`;
export const StyledLogoutIcon = styled(SlLogout)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.grey};
  &:hover {
    color: ${({ theme }) => theme.colors.logo};
  }
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 22px;
  margin-right: 8px;
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
