import { Link as RouteLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaRoute } from 'react-icons/fa';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <FaRoute />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <RouteLink to="/">
                <Text fontSize="xl">Home</Text>
              </RouteLink>
              <RouteLink to="/music">
                <Text fontSize="xl">Music</Text>
              </RouteLink>
              <RouteLink to="/selection">
                <Text fontSize="xl">Selection</Text>
              </RouteLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <br />
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
            <br />
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <RouteLink to="/profile">
                    <MenuButton fontSize="xl">Profile</MenuButton>
                  </RouteLink>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <RouteLink to="/signout">
                    <MenuButton fontSize="xl">Sign Out</MenuButton>
                  </RouteLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <RouteLink to="/">
                <MenuButton fontSize="xl">Home</MenuButton>
              </RouteLink>
              <RouteLink to="/music">
                <MenuButton fontSize="xl">Music</MenuButton>
              </RouteLink>
              <RouteLink to="/selection">
                <MenuButton fontSize="xl">Selection</MenuButton>
              </RouteLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
