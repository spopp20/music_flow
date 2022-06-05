import {
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';

export const UserProfilePage = () => {
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
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Edit Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <InputGroup>
            <InputLeftElement>
              <Box as={FaUserAlt} pointerEvents="none" color="gray.500" />
            </InputLeftElement>
            <Input placeholder="user name" type="text" />
          </InputGroup>
        </FormControl>
        <FormControl id="email" isRequired>
          <InputGroup>
            <InputLeftElement>
              <Box as={FaEnvelope} pointerEvents="none" color="gray.500" />
            </InputLeftElement>
            <Input placeholder="your-email@example.com" type="email" />
          </InputGroup>
        </FormControl>
        <FormControl id="password" isRequired>
          <InputGroup>
            <InputLeftElement>
              <Box as={FaLock} pointerEvents="none" color="gray.500" />
            </InputLeftElement>
            <Input placeholder="password" type="password" />
          </InputGroup>
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500'
            }}
          >
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500'
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
