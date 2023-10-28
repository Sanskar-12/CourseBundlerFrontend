import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Register';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  addlectureHandler,
  deleteButtonHandler,
  courseTitle,
  lectures = [],
}) => {
  //   const courseTitle = 'React Course';
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };


  const closeHandler=()=>{
    setTitle("")
    setDescription("")
    setVideo("")
    setVideoPrev("")
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} size={'full'} scrollBehavior='outside'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />

        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading>{courseTitle}</Heading>
                <Heading size={'sm'} opacity={0.4}>{`#${id}`}</Heading>
              </Box>

              <Heading size={'lg'}>Lectures</Heading>

              <VideoCard
                title="REact"
                description="react course"
                num={1}
                lectureId="ndnkf"
                courseId="nkdnkf"
                deleteButtonHandler={deleteButtonHandler}
              />
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  addlectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading size={'md'} textTransform={'uppercase'}>
                    Add Lecture
                  </Heading>
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/mp4"
                    required
                    type="file"
                    focusBorderColor="purple.300"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                    onChange={changeVideoHandler}
                  />
                  {videoPrev && (
                    <video controlsList="nodownload" src={videoPrev} controls />
                  )}

                  <Button w={'full'} colorScheme="purple" type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

const VideoCard = ({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) => {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'}>{`#${num} ${title}`}</Heading>
        <Text>{description}</Text>
      </Box>

      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
};
