import styled from '@emotion/styled';
import { AiOutlineUserDelete } from 'react-icons/ai';
export const Element = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  width: 500px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Image = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  font-size: 24px;
  font-weight: 500;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 22px;
  font-weight: 500;
  margin-top: 4px;
`;
export const Number = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: left;
  font-size: 18px;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: auto;
  border: none;
  border-radius: 20%;
  background-color: #ffefd5;
`;
export const Icon = styled(AiOutlineUserDelete)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.colors.red};
`;
