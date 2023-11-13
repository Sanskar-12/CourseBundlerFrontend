import React, { useEffect, useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { resetPasswordAction } from '../redux/actions/userAction';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error } = useSelector(state => state.profile);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPasswordAction(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate("/login")
    }
  }, [dispatch, message, error,navigate]);

  return (
    <Container py={'16'} height={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        >
          Reset Password
        </Heading>
        <VStack>
          <Input
            required
            id="password"
            type="password"
            focusBorderColor="yellow.500"
            placeholder="New Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            my={'4'}
            w={'full'}
            colorScheme="yellow"
            type="submit"
            isLoading={loading}
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
