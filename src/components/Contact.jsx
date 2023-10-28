import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading>Contact Us</Heading>

        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              required
              id="name"
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Enter Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input
              required
              id="email"
              type="email"
              focusBorderColor="yellow.500"
              placeholder="Enter Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              required
              id="message"
              type="message"
              focusBorderColor="yellow.500"
              placeholder="Enter Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Send
          </Button>
          <Box my={'4'}>
            <Link to={'/request'}>
              Request for a Course?{' '}
              <Button colorScheme="yellow" fontSize={'sm'} variant={'link'}>
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
