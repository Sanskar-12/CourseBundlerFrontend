import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const courses = [
  {
    _id: 'dnjbnsjdjfndnf0',
    poster: {
      url: 'ndfknnfskn',
    },
    title: 'React Course',
    category: 'Dev',
    createdBy: 'Sanskar',
    views: 152,
    numOfVideos: 27,
  },
];

const AdminCourse = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailHandler = id => {
    console.log(id);
    onOpen();
  };

  const deleteHandler = id => {
    console.log(id);
  };

  const deleteLectureButtonhandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addlectureHandler = (e,courseId,title,description,video) => {
    e.preventDefault()
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        >
          All Courses
        </Heading>

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available courses in the Database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailHandler={courseDetailHandler}
                  deleteHandler={deleteHandler}
                  addlectureHandler={addlectureHandler}
                  id="kndkfsdf"
                  courseTitle="React course"
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          deleteButtonHandler={deleteLectureButtonhandler}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default AdminCourse;

const Row = ({ item, courseDetailHandler, deleteHandler }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric> {item.views}</Td>
      <Td isNumeric> {item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => courseDetailHandler(item._id)}
          >
            Views Lectures
          </Button>

          <Button
            colorScheme={'purple'}
            onClick={() => deleteHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
