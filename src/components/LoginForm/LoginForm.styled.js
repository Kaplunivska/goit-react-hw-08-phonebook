import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 40px;
  width: 500px;
  border-radius: 12px;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 20px;
  text-align: center;
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
  color: red;
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
