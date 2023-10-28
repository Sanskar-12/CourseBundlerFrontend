import {
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Stack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  addtoPlaylistHandler,
  creator,
  description,
  lectCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
      >
        {title}
      </Heading>
      <Text>{description}</Text>

      <HStack>
        <Text fontWeight={'bold'} textTransform={'uppercase'}>
          {'Creator'}
        </Text>
        <Text fontFamily={'body'} textTransform={'uppercase'}>
          {creator}
        </Text>
      </HStack>
      <Heading textAlign={'center'} size={'xs'} textTransform={'uppercase'}>
        {`Lectures - ${lectCount}`}
      </Heading>
      <Heading size={'xs'} textTransform={'uppercase'}>
        {`Views - ${views}`}
      </Heading>

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addtoPlaylistHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

export default CourseCard;
