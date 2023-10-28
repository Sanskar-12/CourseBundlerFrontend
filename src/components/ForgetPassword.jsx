import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Container py={'16'} height={'90vh'}>
      <form>
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

          <Button my={'4'} w={'full'} colorScheme="yellow" type="submit">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
