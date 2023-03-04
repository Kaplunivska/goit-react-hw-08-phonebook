import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 760px;
  text-align: start;
  padding-left: 40px;
  margin-right: 200px;
  margin-top: auto;
  margin-bottom: auto;
`;
export const Title = styled.h1`
  font-size: 60px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    width: 220px;
  }
`;
export const Container = styled.section`
  padding: 40px 0;
  @media screen and (max-width: 768px) {
    padding: 0 0;
  }
`;
export const Text = styled.p`
  margin-top: 12px;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 220px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  padding: 40px 40px 40px 0;
  @media screen and (max-width: 768px) {
    padding: 0 0;
    flex-direction: column;
  }
`;