import React, { useEffect, useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import {
  getMyprofileAction,
  updatePasswordAction,
} from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const { loading, message, error } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updatePasswordAction(oldPassword, newPassword));
    dispatch(getMyprofileAction());
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
  }, [dispatch, error, message]);

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        >
          Change Password
        </Heading>
        <VStack spacing={'8'}>
          <Input
            required
            id="password"
            type="password"
            focusBorderColor="yellow.500"
            placeholder="Old Password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />

          <Input
            required
            id="password"
            type="password"
            focusBorderColor="yellow.500"
            placeholder="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />

          <Button
            w={'full'}
            colorScheme="yellow"
            type="submit"
            isLoading={loading}
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
