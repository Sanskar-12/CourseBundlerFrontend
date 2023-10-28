import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const Databox = ({ title, qty, qtyPercent, profit }) => {
  return (
    <Box
      w={['full', '20%']}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      p={'8'}
      borderRadius={'lg'}
    >
      <Text>{title}</Text>

      <HStack spacing={'6'}>
        <Text fontSize={'2xl'} fontWeight={'bold'}>
          {qty}
        </Text>
        <HStack>
          <Text>{qtyPercent}%</Text>
          {profit ? (
            <RiArrowUpLine color="green" />
          ) : (
            <RiArrowDownLine color="red" />
          )}
        </HStack>
      </HStack>
      <Text opacity={0.6}>Since Last Month</Text>
    </Box>
  );
};

const Bar = ({ title, value, profit }) => {
  return (
    <Box py={'4'} px={['0', '20']}>
      <Heading size={'sm'} mb={'2'}>
        {title}
      </Heading>
      <HStack w={'full'} alignItems={'center'}>
        <Text>{profit ? '0%' : `-${value}%`}</Text>
        <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
        <Text>{value > 100 ? value : 100}%</Text>
      </HStack>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text textAlign={'center'} opacity={0.5}>
          {`Last Change was on ${String(new Date()).split('G')[0]}`}
        </Text>

        <Heading ml={['0', '16']} textAlign={['center', 'left']} mb={'16'}>
          Dashboard
        </Heading>
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title="Views" qty={123} qtyPercent={30} profit={true} />
          <Databox title="Users" qty={12} qtyPercent={30} profit={true} />
          <Databox
            title="Subscription"
            qty={12}
            qtyPercent={30}
            profit={false}
          />
        </Stack>

        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            pt={['8', '0']}
            ml={['0', '16']}
          >
            Views Graph
          </Heading>

          {/* Line Chart */}

          <LineChart/>
        </Box>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              my={'8'}
              ml={['0', '16']}
            >
              Progress Bar
            </Heading>
            <Bar profit={true} title="Views" value={30} />
            <Bar profit={true} title="Users" value={78} />
            <Bar profit={true} title="Subscription" value={20} />
          </Box>
          <Box p={['0', '16']} boxSizing="border-box" py={'4'}>
            <Heading textAlign={'center'} size={'md'} mb={'4'}>
              Users
            </Heading>

            <DoughnutChart/>
          </Box>
        </Grid>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
