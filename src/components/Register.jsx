import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {registerAction} from "../redux/actions/userAction.js"

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imageprev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const dispatch=useDispatch()

  const changeImageHandler = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler=(e)=>{
    e.preventDefault()
    const formdata=new FormData()

    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('password',password)
    formdata.append('file',image)

    dispatch(registerAction(formdata))
    
  }

  return (
    <Container h={'100vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'6'}>
        <Heading textTransform={'uppercase'}>Registration</Heading>
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imageprev} size={'2xl'} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              required
              id="name"
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Enter Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              type="email"
              focusBorderColor="yellow.500"
              placeholder="abc@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              required
              id="password"
              type="password"
              focusBorderColor="yellow.500"
              placeholder="Enter Your Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvater">Choose Avatar</FormLabel>
            <Input
              required
              accept="image/*"
              id="chooseAvater"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Register
          </Button>
          <Box my={'4'}>
            <Link to={'/login'}>
              Already Signed Up?{' '}
              <Button colorScheme="yellow" fontSize={'sm'} variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
