import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyprofileAction,
  removeFromPlaylistAction,
  updateProfilePictureAction,
} from '../redux/actions/userAction';
import toast from 'react-hot-toast';

const Profile = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageprev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.profile);
  const {  message:courseMessage, error:courseError } = useSelector(state => state.course);

  const removefromPlaylistHandler = async (id) => {
    await dispatch(removeFromPlaylistAction(id))
    dispatch(getMyprofileAction())
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

  const imageSubmitHandler = async (e, image) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('file', image);

    await dispatch(updateProfilePictureAction(formdata));
    dispatch(getMyprofileAction());
  };

  const onCloseHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (courseMessage) {
      toast.success(courseMessage);
      dispatch({ type: 'clearMessage' });
    }


  }, [dispatch, error, message,courseError,courseMessage]);

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
          <Avatar boxSize={'48'} src={user?.avatar?.url} />
          <Button colorScheme="yellow" variant={'ghost'} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'}>Name</Text>
            <Text>{user?.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Email</Text>
            <Text>{user?.email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Created At</Text>
            <Text>{user?.createdAt?.split('T')[0]}</Text>
          </HStack>
          {user?.role !== 'admin' && (
            <HStack>
              <Text fontWeight={'bold'}>Subscription</Text>
              {user?.subscription?.status === 'active' ? (
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
      {user?.playlist?.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user?.playlist?.map(item => (
            <VStack w={'48'} m={'2'} key={item.course}>
              <Image src={item.poster} boxSize={'full'} objectFit={'contain'} />
              <HStack>
                <Link to={`/course/${item.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button isLoading={loading}>
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
                  <Button
                    w={'full'}
                    colorScheme="yellow"
                    type="submit"
                    isLoading={loading}
                  >
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
