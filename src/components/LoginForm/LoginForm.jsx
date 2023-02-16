import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/authentification/operations';
import { selectIsLoading } from 'redux/authentification/selectors';
import {
  Form,
  Input,
  Validation,
  Button,
  Text,
  Container,
} from './LoginForm.styled';

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmitHandler = data => {
    dispatch(logIn(data))
      .unwrap()
      .then(({ user }) => toast.success(`Welcome back ${user.name}`))
      .catch(() => toast.error('Something went wrong. Please try again'));

    reset();
  };
  return (
    <section>
      <Container>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Text>Log in</Text>
          <Input
            type="text"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
                message: 'Invalid type of email',
              },
            })}
            placeholder="Email"
          />
          <Validation>{errors.email?.message}</Validation>

          <Input
            type="password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,16})/,
                message:
                  'Invalid type of password ( password must be at least of 8 characters including number, upper, lower and one special character)',
              },
            })}
            placeholder="Password"
          />
          <Validation>{errors.password?.message}</Validation>

          <Button disabled={isLoading || Object.keys(errors).length !== 0}>
            Log in
          </Button>
        </Form>
      </Container>
    </section>
  );
}
