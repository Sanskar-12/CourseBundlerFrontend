import React from 'react';
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import intro from '../assets/introvideo.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading textAlign={['center', 'left']}>About Us</Heading>
      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
          <Avatar
            src="https://imgs.search.brave.com/YeomwGl3TkasFNRzC6eHbYkrpy11KOIEVSzcUrT3wn0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81ODgv/ODQ3L0hELXdhbGxw/YXBlci1pcm9ubWFu/LWpmY3gtcnNqLmpw/Zw"
            boxSize={['40', '48']}
          />
          <Text>CouFounder</Text>
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading size={['md', 'xl']}>Sanskar Vishwakarma</Heading>
          <Text textAlign={['center', 'left']}>
            Hi, I am a full stack developer.Our mission is to provide quality
            content at Reasonable price.
          </Text>
        </VStack>
      </Stack>
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are video streaming platform with some premium courses available
          only for premium users
        </Text>

        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <Box>
        <video
          controls
          src={intro}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        />
      </Box>

      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        >
          Payment is secured by Razorpay
        </Heading>
      </HStack>
    </Container>
  );
};

export default About;
