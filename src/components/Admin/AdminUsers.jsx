import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const users = [
  {
    _id: 'dnjbnsjdjfndnf0',
    name: 'sanskar',
    email: 'sanskarv2004@gmail.com',
    role: 'admin',
    subscription: {
      status: 'active',
    },
  },
];

const AdminUsers = () => {
  const updateHandler = id => {
    console.log(id);
  };

  const deleteHandler = id => {
    console.log(id);
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        >
          All Users
        </Heading>

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available users in the Database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  updateHandler={updateHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default AdminUsers;

const Row = ({ item, updateHandler, deleteHandler }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => updateHandler(item._id)}
          >
            Change Role
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
