import { useState } from 'react'

import { Box, Image, Input, VStack, Button, Flex, Text } from '@chakra-ui/react'




const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4} >
        <Image src='assets/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
        <Input 
          placeholder='Email'
          fontSize={14}
          type='email'
        />
        <Input 
          placeholder='Password'
          fontSize={14}
          type='password'
        />
        {isRegister ? <Input placeholder='Confirm Password' fontSize={14} type='password' /> : null}
        <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}>
          {isRegister ? "Sign up" : "Log in"}
        </Button>
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"1px"} bg={"gray.400"}> </Box>
          <Text mx={1} color={"white"}> OR </Text>
          <Box flex={2} h={"1px"} bg={"gray.400"}> </Box>
        </Flex>
      </VStack>
    </Box>
    </>
  )
}

export default AuthForm