import styled from '@emotion/styled';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineDeviceMobile, HiOutlineUser } from 'react-icons/hi';

export const Label = styled.label`
  position: relative;
`;
export const AddIcon = styled(AiOutlineUserAdd)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const MobileIcon = styled(HiOutlineDeviceMobile)`
  position: absolute;
  top: 14px;
  left: 8px;
  color: ${({ theme }) => theme.colors.accent};
  width: 20px;
  height: 20px;
`;
export const UserIcon = styled(HiOutlineUser)`
  position: absolute;
  top: 14px;
  left: 8px;
  color: ${({ theme }) => theme.colors.accent};
  width: 20px;
  height: 20px;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: auto;
  margin-top: -10px;
`;
