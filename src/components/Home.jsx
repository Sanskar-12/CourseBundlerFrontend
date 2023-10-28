import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import vg from '../assets/home.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiUdemy, SiCoursera } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import intro from '../assets/introvideo.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack w={'full'} alignItems={['center', 'flex-end']} spacing={'3'}>
            <Heading size={'2xl'}>LEARN FROM THE EXPERTS</Heading>
            <Text fontFamily={'cursive'} textAlign={['center', 'left']}>
              Get the Latest Content at Reasonable Price.
            </Text>
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Get Started
              </Button>
            </Link>
          </VStack>
          <Image className="vg" src={vg} objectFit={'contain'} boxSize={'md'} />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.400'}>
          OUR PARTNERS
        </Heading>
        <HStack
          justifyContent={'space-evenly'}
          marginTop={'4'}
          className="brands"
        >
          <CgGoogle />
          <CgYoutube />
          <SiUdemy />
          <SiCoursera />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          src={intro}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
