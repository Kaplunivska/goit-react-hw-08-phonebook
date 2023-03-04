import styled from '@emotion/styled';

export const Div = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    max-width: 270px;
    margin: 30px 0 0 20px;
  }
`;

// align-items: center;
// justify-content: center;
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px 20px;
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    padding: 20px 40px 40px;
  }
`;
export const Input = styled.input`
  display: inline-block;
  border-radius: 8px;
  width: 360px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 4px 12px;
  font-size: 16px;
  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.accent};
  }
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 35px;
  }
  @media screen and (min-width: 1280px) {
    width: 420px;
  }
`;

export const Validation = styled.p`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.red};
  text-align: start;
`;
export const Button = styled.button`
  width: 360px;
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
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 420px;
  }
`;
export const Policy = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 370px;
  padding: 20px 40px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 10px 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;
