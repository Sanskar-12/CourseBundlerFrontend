import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        >
          Update Profile
        </Heading>
        <VStack spacing={'8'}>
          <Input
            required
            id="name"
            type="text"
            focusBorderColor="yellow.500"
            placeholder="Enter Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            required
            id="email"
            type="email"
            focusBorderColor="yellow.500"
            placeholder="Enter your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Button w={'full'} colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
