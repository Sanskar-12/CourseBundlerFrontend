import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading color={'white'}>All Rights Reserved</Heading>
          <Heading fontFamily={'body'} size={'sm'} color={'yellow.400'}>
            @Sanskar Vishwakarma
          </Heading>
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a href="https://www.youtube.com/" target="blank">
            <TiSocialYoutubeCircular />
          </a>
          <a
            href="https://www.linkedin.com/in/sanskar-vishwakarma-a706b5252/"
            target="blank"
          >
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://github.com/Sanskar-12" target="blank">
            <DiGithub /> 
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
