import { gql, useMutation } from '@apollo/client';
import { Badge, Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightAddon, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Cookies from 'universal-cookie';

const SIGN_IN_ADMIN = gql`
  mutation SignInAdmin($input: LoginInput) {
    loginAdmin(input: $input) {
      token
      errors {
        message
      }
    }
  }
`;

export const Login: React.FC = () => {

  const cookies = new Cookies();
  const router = useRouter();

  const [loginAdmin, { data, loading }] = useMutation(SIGN_IN_ADMIN);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailNotFoundError, setEmailNotFoundError] = useState<boolean>(false);
  const [emailNotAdmin, setEmailNotAdmin] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(showPassword => !showPassword);
  }

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailNotFoundError(false);
    setEmailNotAdmin(false);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordError(false);
  }

  const login = async (e: FormEvent<HTMLDivElement>): Promise<void> => {
    e.preventDefault();
    if (emailRef.current?.value !== '' && passwordRef.current?.value !== '') {
      setIsLoading(true);
      await loginAdmin({
        variables: {
          input: {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
          },
        },
      });
    }
  }

  useEffect(() => {
    if (!loading && data) {
      if (data.loginAdmin.errors) {
        if (data.loginAdmin.errors.message === 'email not found') {
          setEmailNotFoundError(true);
          setIsLoading(false);
        } else if (data.loginAdmin.errors.message === 'invalid password') {
          setPasswordError(true);
          setIsLoading(false);
        } else if (data.loginAdmin.errors.message === 'not admin') {
          setEmailNotAdmin(true);
          setIsLoading(false);
        }
      } else {
        cookies.set('token', data.loginAdmin.token, { path: '/' });
        router.push('/admin/store');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return (
    <HStack
      minHeight='100vh'
      minWidth='full'
      backgroundColor='white'
      justifyContent='center'
      alignItems='center'
      background='purple.50'
    >
      <Box
        maxWidth='md'
        width='full'
        boxShadow='xl'
        rounded='lg'
        paddingX='2.5rem'
        paddingY='2rem'
        background='white'
      >
        <Box>
          <Box>
            <Text
              align='center'
              fontSize='2rem'
              fontWeight={600}
              color='purple.800'
            >
              Iniciar Sesión
            </Text>
            <Text align='center' fontSize='1rem'>como <Badge colorScheme='purple' variant='outline'>Admin</Badge></Text>
          </Box>
          <VStack
            as='form'
            onSubmit={login}
            width='full'
          >
            <VStack
              marginY='2rem'
              spacing='1.5rem'
              width='full'
            >
              <FormControl isRequired isInvalid={emailNotFoundError || emailNotAdmin} variant='floating'>
                <Input
                  ref={emailRef}
                  id='email'
                  type='email'
                  _focus={{
                    boxShadow: 'none',
                    borderColor: 'gray.400',
                  }}
                  placeholder=' '
                  onChange={handleEmail}
                  autoFocus
                />
                <FormLabel color='gray.500' fontWeight={400} htmlFor='email'>Correo electrónico</FormLabel>
                {
                  emailNotFoundError && (
                    <FormErrorMessage>El correo no se encuentra registrado.</FormErrorMessage>
                  )
                }
                {
                  emailNotAdmin && (
                    <FormErrorMessage>El correo no le pertenece a un administrador.</FormErrorMessage>
                  )
                }
              </FormControl>
              <FormControl isRequired isInvalid={passwordError} variant='floating'>
                <InputGroup>
                  <Input
                    ref={passwordRef}
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    _focus={{
                      boxShadow: 'none',
                      borderColor: 'gray.400',
                    }}
                    placeholder=' '
                    onChange={handlePassword}
                  />
                  <FormLabel color='gray.500' fontWeight={400} htmlFor='password'>Contraseña</FormLabel>
                  <InputRightAddon
                    bg='blackAlpha.300'
                    px={0}
                    py={0}
                  >
                    <Button
                      color='gray.500'
                      onClick={handleShowPassword}
                      roundedBottomLeft={0}
                      roundedTopLeft={0}
                    >
                      {showPassword ? <MdVisibilityOff size={18}/> : <MdVisibility size={18}/>}
                    </Button>
                  </InputRightAddon>
                </InputGroup>
                {
                  passwordError && (
                    <FormErrorMessage>La constraseña es incorrecta.</FormErrorMessage>
                  )
                }
              </FormControl>
            </VStack>
            <Box width='full'>
              <Button
                type='submit'
                isLoading={isLoading}
                width='full'
                backgroundColor='purple.400'
                _hover={{
                  transform: 'translateY(-1px)',
                  boxShadow: 'lg',
                  backgroundColor: 'purple.400'
                }}
                _active={{
                  backgroundColor: 'purple.500'
                }}
                color='white'
              >
                Ingresar
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </HStack>
  )
}
