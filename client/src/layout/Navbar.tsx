import { Link as RouteLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
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

/*
const Links = ['Home', 'Music', 'Selection'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    >
    {children}
  </Link>
);
*/

type NavLinkProps = { text: string };
const NavLink = ({ text }: NavLinkProps) => (
  <Link>
    <Text fontSize="xl">{text}</Text>
  </Link>
);

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
                <NavLink text="Home" />
              </RouteLink>
              <RouteLink to="/music">
                <NavLink text="Music" />
              </RouteLink>
              <RouteLink to="/selection">
                <NavLink text="Selection" />
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
                    <NavLink text="Profile" />
                  </RouteLink>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <RouteLink to="/signout">
                    <NavLink text="Sign out" />
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
                <NavLink text="Home" />
              </RouteLink>
              <RouteLink to="/music">
                <NavLink text="Music" />
              </RouteLink>
              <RouteLink to="/selection">
                <NavLink text="Selection" />
              </RouteLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
