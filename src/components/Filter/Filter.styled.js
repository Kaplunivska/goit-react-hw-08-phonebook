import styled from '@emotion/styled';
import { CiSearch } from 'react-icons/ci';
export const Input = styled.input`
  display: block;
  border-radius: 8px;
  width: 500px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 8px 36px;
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.accent};
  &:focus,
  &:hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
export const StyledLabel = styled.label`
  display: block;
  position: relative;
`;
export const SearchIcon = styled(CiSearch)`
  position: absolute;
  z-index: 10;
  top: 12px;
  left: 10px;
  color: ${({ theme }) => theme.colors.accent};
  width: 24px;
  height: 24px;
`;
