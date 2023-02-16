import styled from '@emotion/styled';

export const Div = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 40px;
`;
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 40px 40px;
  width: 500px;
`;
export const Input = styled.input`
  display: inline-block;
  border-radius: 8px;
  width: 420px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 4px 12px;
  font-size: 16px;
  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Validation = styled.p`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.red};
  text-align: start;
`;
export const Button = styled.button`
  width: 420px;
  height: 50px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
export const Policy = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 500px;
  padding: 20px 40px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;
