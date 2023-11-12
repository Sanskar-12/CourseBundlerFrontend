import React, {  useEffect, useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyprofileAction,
  updateProfileAction,
} from '../redux/actions/userAction';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({user}) => {
  const {  loading,message,error } = useSelector(state => state.profile);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const dispatch = useDispatch();
  const navigate=useNavigate()

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfileAction(name, email));
    dispatch(getMyprofileAction());
    navigate("/profile")
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
          Update Profile
        </Heading>
        <VStack spacing={'8'}>
          <Input
            id="name"
            type="text"
            focusBorderColor="yellow.500"
            placeholder="Enter Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            id="email"
            type="email"
            focusBorderColor="yellow.500"
            placeholder="Enter your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Button
            w={'full'}
            colorScheme="yellow"
            type="submit"
            isLoading={loading}
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
