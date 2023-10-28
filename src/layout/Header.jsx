import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };

  const logoutHandler=()=>{
    console.log("Logout")
    onClose()
  }

  return (
    <>
      <ColorModeSwitcher />
      <Button
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        zIndex={'10'}
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <Link to={'/'} onClick={onClose}>
                <Button variant={'ghost'}>Home</Button>
              </Link>
              <Link to={'/courses'} onClick={onClose}>
                <Button variant={'ghost'}>Explore All Courses</Button>
              </Link>
              <Link to={'/request'} onClick={onClose}>
                <Button variant={'ghost'}>Request a Course</Button>
              </Link>
              <Link to={'/contact'} onClick={onClose}>
                <Button variant={'ghost'}>Contact</Button>
              </Link>
              <Link to={'/about'} onClick={onClose}>
                <Button variant={'ghost'}>About</Button>
              </Link>

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'} onClick={onClose}>
                          <Button colorScheme="yellow" variant={'ghost'}>
                            Profile
                          </Button>
                        </Link>

                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to={'/admin/dashboard'} onClick={onClose}>
                          <Button colorScheme='purple' variant={'ghost'} >
                            <RiDashboardFill style={{margin:"4px"}}/>
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'} onClick={onClose}>
                      <Button colorScheme="yellow">Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link to={'/register'} onClick={onClose}>
                      <Button colorScheme="yellow">Register</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
