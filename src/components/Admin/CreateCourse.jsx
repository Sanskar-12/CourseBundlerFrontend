import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { fileUploadCss } from '../Register';

const categories = [
  'Web Development',
  'Artificial Intelligence',
  'DSA',
  'App Development',
  'Data Science',
  'Game Development',
];

const fileUploadStyle = {
  '&::file-selector-button': { ...fileUploadCss, color: 'purple' },
};

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imageprev, setImageprev] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageprev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            my={'16'}
            textAlign={['center', 'left']}
          >
            Create Course
          </Heading>

          <VStack m={'auto'} spacing={'8'}>
            <Input
              required
              id="title"
              type="text"
              focusBorderColor="purple.500"
              placeholder="Course Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              required
              id="description"
              type="text"
              focusBorderColor="purple.500"
              placeholder="Course Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <Input
              required
              id="createdBy"
              type="text"
              focusBorderColor="purple.500"
              placeholder="Creator Name"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
            />

            <Select
              focusBorderColor="purple.500"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={''}>Category</option>

              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>

            <Input
              required
              accept="image/*"
              id="chooseAvater"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />

            {imageprev && (
              <Image src={imageprev} boxSize={'64'} objectFit={'contain'} />
            )}

            <Button w={'full'} colorScheme="purple" type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Container>

      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
