import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from './Register';

const user = {
  name: 'Sanskar',
  email: 'sanskar@gmail.com',
  createdAt: String(new Date().toISOString()),
  role: 'user',
  subscription: {
    status: 'active',
  },
  playlist: [
    {
      course: 'kndnkf',
      poster: 'jdfnk',
    },
  ],
};

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageprev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
  const removefromPlaylistHandler = id => {
    console.log(id);
  };

  const changeImageHandler = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const imageSubmitHandler = (e, image) => {
    e.preventDefault()
  };

  const onCloseHandler=()=>{
    onClose()
    setImagePrev("")
    setImage("")
  }

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading m={'8'} textTransform={'uppercase'}>
        Profile
      </Heading>
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button colorScheme="yellow" variant={'ghost'} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'}>Name</Text>
            <Text>{user.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Email</Text>
            <Text>{user.email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Created At</Text>
            <Text>{user.createdAt.split('T')[0]}</Text>
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text fontWeight={'bold'}>Subscription</Text>
              {user.subscription.status === 'active' ? (
                <Button color={'yellow.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading size={'md'} my={'8'}>
        Playlist
      </Heading>
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map(item => (
            <VStack w={'48'} m={'2'} key={item.course}>
              <Image src={item.poster} boxSize={'full'} objectFit={'contain'} />
              <HStack>
                <Link to={`/course/${item.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button>
                  <RiDeleteBin7Fill
                    onClick={() => removefromPlaylistHandler(item.course)}
                  />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter={'blur(10px)'} />
        <ModalContent>
            <ModalHeader>Change Photo </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <form onSubmit={e => imageSubmitHandler(e, image)}>
                <VStack spacing={'8'}>
                  {imageprev && <Avatar boxSize={'48'} src={imageprev} />}
                  <Input
                    type="file"
                    css={{ '&::file-selector-button': fileUploadCss }}
                    onChange={changeImageHandler}
                  />
                  <Button w={'full'} colorScheme="yellow" type="submit">
                    Change
                  </Button>
                </VStack>
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button mr={'3'} onClick={onCloseHandler}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Profile;
