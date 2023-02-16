import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { registerNewUser } from 'redux/authentification/operations';
import { selectIsLoading } from 'redux/authentification/selectors';
import {
  Form,
  Input,
  Button,
  Policy,
  Div,
  Text,
  Validation,
} from './RegisterForm.styled';

export default function RegisterForm() {
  const signInLoading = useSelector(selectIsLoading);
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
      password: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmitHandler = data => {
    dispatch(registerNewUser(data))
      .unwrap()
      .then(({ user }) =>
        toast.success(`${user.name}, your account was successfully created!`)
      )
      .catch(() => toast.error('Something went wrong. Please try again'));
    reset();
  };

  return (
    <Div>
      <Text>Sign in</Text>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          type="text"
          {...register('name', {
            required: 'Full name is required',
            pattern: {
              value: /^([\p{L}]{3,12})+\s+([\p{L}\s]{3,12})+$/iu,
              message: 'Invalid type of full name',
            },
          })}
          placeholder="Full name"
        />
        <Validation>{errors.name?.message}</Validation>

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

        <Button disabled={signInLoading || Object.keys(errors).length !== 0}>
          Create your account
        </Button>
      </Form>
      <Policy>
        <Text>
          By signing up, you agree to our terms, data policy and cookies policy
        </Text>
      </Policy>
    </Div>
  );
}
