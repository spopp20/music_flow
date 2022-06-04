import { Link as RouteLink } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Membership
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our applicatino features ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
              Become a member
            </Heading>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <InputGroup>
                    <InputLeftElement>
                      <Box as={FaUserAlt} pointerEvents="none" color="gray.500" />
                    </InputLeftElement>
                    <Input type="text" placeholder="first name" />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <InputGroup>
                    <InputLeftElement>
                      <Box as={FaUserAlt} pointerEvents="none" color="gray.500" />
                    </InputLeftElement>
                    <Input type="text" placeholder="last name" />
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <InputGroup>
                <InputLeftElement>
                  <Box as={MdEmail} pointerEvents="none" color="gray.500" />
                </InputLeftElement>
                <Input type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <InputLeftElement>
                  <Box as={FaLock} pointerEvents="none" color="gray.500" />
                </InputLeftElement>
                <Input type={showPassword ? 'text' : 'password'} placeholder="password" />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?
                <RouteLink to="/login">
                  <Link ml={2} color={'blue.400'}>
                    Login
                  </Link>
                </RouteLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
