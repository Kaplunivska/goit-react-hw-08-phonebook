import {
    Container,
    Wrapper,
    Title,
    Text,
    ContentContainer,
  } from './Home.styled';
  
  import RegisterForm from 'components/RegisterForm/RegisterForm';
  export default function Home() {
    return (
      <Container>
        <ContentContainer>
          <Wrapper>
            <Title>SAFELY * RELIABLY * SIMPLY *</Title>
            <Text>
            Do you want to add and remove contacts in the phonebook easily? Try it now in your
            phonebook application
            </Text>
          </Wrapper>
          <RegisterForm />
        </ContentContainer>
      </Container>
    );
  }