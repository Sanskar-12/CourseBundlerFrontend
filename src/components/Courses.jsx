import { useState } from 'react';
import './Courses.css';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import CourseCard from './CourseCard';

const Courses = () => {
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'DSA',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const { keyword, setKeyword } = useState('');
  const { category, setCategory } = useState('');

  const addtoPlaylistHandler=()=>{
    console.log("added")
  }

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading m={'8'}>All Courses</Heading>
      <Input
        placeholder="Search a Course"
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowY={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((i, idx) => (
          <Button key={idx} onClick={() => setCategory(i)} minW={'60'}>
            <Text>{i}</Text>
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <CourseCard
        title={'Sample'}
        description={'Sample'}
        views={30}
        imageSrc={'sample'}
        id={'sample'}
        creator={'sample'}
        lectCount={5}
        addtoPlaylistHandler={addtoPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
