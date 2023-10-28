import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';

const Sidebar = () => {

    const location =useLocation()

    const active=location.pathname==="/admin/dashboard"
    const createcourseactive=location.pathname==="/admin/createcourse"
    const courseactive=location.pathname==="/admin/courses"
    const usersactive=location.pathname==="/admin/users"

  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <Link to={'/admin/dashboard'} >
        <Button fontSize={'larger'} variant={'ghost'} colorScheme={active? "purple":""}>
          <RiDashboardFill style={{ margin: '4px' }} />
          Dashboard
        </Button>
      </Link>

      <Link to={'/admin/createcourse'}>
        <Button fontSize={'larger'} variant={'ghost'} colorScheme={createcourseactive? "purple":""}>
          <RiAddCircleFill style={{ margin: '4px' }} />
          Create Course
        </Button>
      </Link>

      <Link to={'/admin/courses'}>
        <Button fontSize={'larger'} variant={'ghost'} colorScheme={courseactive? "purple":""}>
          <RiEyeFill style={{ margin: '4px' }} />
          Courses
        </Button>
      </Link>

      <Link to={'/admin/users'}>
        <Button fontSize={'larger'} variant={'ghost'} colorScheme={usersactive? "purple":""}>
          <RiUser3Fill style={{ margin: '4px' }} />
          Users
        </Button>
      </Link>
    </VStack>
  );
};

export default Sidebar;
