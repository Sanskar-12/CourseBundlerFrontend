import React, { useEffect, useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPasswordAction } from '../redux/actions/userAction';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.profile);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgetPasswordAction(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, message, error]);

  return (
    <Container py={'16'} height={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        >
          Forget Password
        </Heading>
        <VStack>
          <Input
            required
            id="email"
            type="email"
            focusBorderColor="yellow.500"
            placeholder="abc@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Button
            my={'4'}
            w={'full'}
            colorScheme="yellow"
            type="submit"
            isLoading={loading}
          >
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
