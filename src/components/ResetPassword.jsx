import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params=useParams()

  console.log(params.token)
  return (
    <Container py={'16'} height={'90vh'}>
      <form>
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

          <Button my={'4'} w={'full'} colorScheme="yellow" type="submit">
           Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword
