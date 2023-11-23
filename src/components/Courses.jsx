import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesAction } from '../redux/actions/courseAction';
import toast from 'react-hot-toast';
import { addToPlaylistAction, getMyprofileAction } from '../redux/actions/userAction';

const Courses = () => {
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'DSA',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const { error, course,message,loading } = useSelector(state => state.course);

  useEffect(() => {
    dispatch(getAllCoursesAction(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if(message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, category, keyword, error,message]);

  const addtoPlaylistHandler = async (courseId) => {

    await dispatch(addToPlaylistAction(courseId))
    dispatch(getMyprofileAction())
  };

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
        {course?.length > 0 ? (
          course?.map(item => (
            <CourseCard
              key={item?._id}
              title={item?.title}
              description={item?.description}
              views={item?.views}
              imageSrc={item?.poster?.url}
              id={item?._id}
              creator={item?.createdBy}
              lectCount={item?.numOfVideos}
              addtoPlaylistHandler={addtoPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading opacity={0.5} mt={'4'}>Course Not Found</Heading>
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
