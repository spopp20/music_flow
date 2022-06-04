import { Link as RouteLink } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const LoginPage = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Welcome</Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
              Member Login
            </Heading>
            <FormControl id="email">
              <InputGroup>
                <InputLeftElement>
                  <Box as={MdEmail} pointerEvents="none" color="gray.500" />
                </InputLeftElement>
                <Input type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <InputLeftElement>
                  <Box as={FaLock} pointerEvents="none" color="gray.500" />
                </InputLeftElement>
                <Input type="password" placeholder="password" />
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <RouteLink to="/forgot">
                  <Link color={'blue.400'}>Forgot password?</Link>
                </RouteLink>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
