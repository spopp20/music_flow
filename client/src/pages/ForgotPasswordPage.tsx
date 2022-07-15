import { Link as RouteLink } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';

//type ForgotPasswordFormInputs = {
//  email: string;
//};

const ForgotPasswordPage = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Reset Password
        </Heading>
        <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
          Request an email with a reset link
        </Text>
        <FormControl id="email">
          <InputGroup>
            <InputLeftElement>
              <Box as={MdEmail} pointerEvents="none" color="gray.500" />
            </InputLeftElement>
            <Input placeholder="your-email@example.com" type="email" />
          </InputGroup>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
          >
            Request Reset
          </Button>
        </Stack>
        <Stack pt={6}>
          <Text align={'center'}>
            Ready to login?
            <RouteLink to="/login">
              <Link ml={2} color={'blue.400'}>
                Login
              </Link>
            </RouteLink>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ForgotPasswordPage;
