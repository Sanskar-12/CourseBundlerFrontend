import React, { useState } from 'react';
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import intro from '../assets/introvideo.mp4';

const CoursePage = () => {
  const [lectureNumber,setLectureNumber]=useState(0)

  const lectures = [
    {
      _id: 'jadjf',
      title: 'Sample 1',
      description: 'nksndknkfnndskfnkdnfkndkndkf',
      video: {
        url: 'bsjdbj',
      },
    },
    {
        _id: 'jadjfsdsdf',
        title: 'Sample 2',
        description: 'nksndknkfnndskfnkdnfkndkndkf',
        video: {
          url: 'bsjdbj',
        },
      },
      {
        _id: 'jadjfsdnf',
        title: 'Sample 3',
        description: 'nksndknkfnndskfnkdnfkndkndkf',
        video: {
          url: 'bsjdbj',
        },
      },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
        width={'100%'}
          controls
          src={intro}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading m={'4'}>
          {`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        </Heading>

        <Heading m={'4'}>Description</Heading>

        <Text m={'4'}>{lectures[lectureNumber].description}</Text>
      </Box>

      <VStack>
        {lectures.map((item, idx) => (
          <button
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
            onClick={()=>setLectureNumber(idx)}
          >
            <Text noOfLines={1}>
              #{idx + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
