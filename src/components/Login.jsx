import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading textTransform={'uppercase'}>Welcome to CourseBundler</Heading>
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              type="email"
              focusBorderColor="yellow.500"
              placeholder="abc@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              required
              id="password"
              type="password"
              focusBorderColor="yellow.500"
              placeholder="Enter Your Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>

          <Box>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password?
              </Button>
            </Link>
          </Box>

          <Button my={'4'} colorScheme='yellow' type='submit'>
            Login
          </Button>
          <Box my={'4'}>
            <Link to={'/register'}>
                New User? {' '}
              <Button colorScheme='yellow' fontSize={'sm'} variant={'link'}>
                Register
              </Button>{' '}
              here
            </Link>
          </Box>

        </form>
      </VStack>
    </Container>
  );
};

export default Login;
