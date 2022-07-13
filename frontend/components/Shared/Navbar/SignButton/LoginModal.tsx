import { Button, Divider, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FormEvent, useRef, useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

const MotionButton = motion(Button);

export const LoginModal = ({ isOpen, onClose, onOpenRegister }: Props) => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  }

  const handleRegisterModal = (): void => {
    onClose();
    onOpenRegister();
  }

  const login = (e: FormEvent<HTMLDivElement>): void => {
    e.preventDefault();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale'>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Iniciar sesión</ModalHeader>
        <ModalCloseButton/>
        <Divider/>
        <ModalBody>
          <VStack
            as='form'
            w='full'
            spacing='1.2rem'
            paddingX='1rem'
            paddingY='1.5rem'
            onSubmit={login}
          >
            <VStack w='full'>
              <Button
                type='button'
                onClick={() => signIn('google')}
                leftIcon={<FaGoogle size={16}/>}
                variant='outline'
                fontWeight={400}
                color='gray.500'
                colorScheme='gray'
                w='full'
              >
                Ingresa con Google
              </Button>
              <Button
                type='button'
                onClick={() => signIn('facebook')}
                leftIcon={<FaFacebook size={18}/>}
                variant='outline'
                fontWeight={400}
                color='gray.500'
                colorScheme='gray'
                w='full'
              >
                Ingresa con Facebook
              </Button>
            </VStack>
            <HStack w='full' alignItems='center' justifyContent='center'>
              <Divider bg='gray.700' opacity={1}/>
              <Text color='gray.500' fontWeight={300}>o</Text>
              <Divider bg='gray.700' opacity={1}/>
            </HStack>
            <VStack
              w='full'
              spacing='0.6rem'
            >
              <FormControl isRequired isInvalid={emailError}>
                <FormLabel color='gray.600' fontSize='0.875rem' htmlFor='email'>Correo Electrónico</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    pl='0.3rem'
                    color='gray.600'
                  >
                    <HiOutlineMail size={18}/>
                  </InputLeftElement>
                  <Input
                    ref={emailRef}
                    id='email'
                    type='email'
                    size='md'
                    _focus={{
                      boxShadow: 'none',
                      borderColor: '#aaaaaa'
                    }}
                    fontSize='0.95rem'
                    fontWeight='500'
                    color='gray.600'
                    onChange={() => setEmailError(false)}
                    autoFocus
                  />
                </InputGroup>
                {
                  emailError && (
                    <FormErrorMessage>El correo no se encuentra registrado.</FormErrorMessage>
                  )
                }
              </FormControl>
              <FormControl isRequired isInvalid={passwordError}>
                <FormLabel color='gray.600' fontSize='0.875rem' htmlFor='password'>Contraseña</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    pl='0.3rem'
                    color='gray.600'
                  >
                    <HiOutlineLockClosed size={18}/>
                  </InputLeftElement>
                  <Input
                    ref={passwordRef}
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    _focus={{
                      boxShadow: 'none',
                      borderColor: '#aaaaaa'
                    }}
                    fontSize='0.95rem'
                    fontWeight='500'
                    color='gray.600'
                    onChange={() => setPasswordError(false)}
                  />
                  <InputRightAddon
                    bg='white'
                    px={0}
                    py={0}
                  >
                    <Button
                      color='gray.600'
                      onClick={handleShowPassword}
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
            <VStack w='full' py='0.5rem' spacing='0.6rem'>
              <MotionButton
                // isLoading={loading}
                type='submit'
                variant='solid'
                colorScheme='gray'
                w='full'
                whileTap={{ scale: 0.95 }}
              >
                Ingresar
              </MotionButton>
              <Text fontSize='0.9rem' textAlign='center' letterSpacing='wide'>
                ¿No tienes una cuenta? Créala <Button onClick={() => handleRegisterModal()} variant='link'  fontSize='0.9rem' minW={0} fontWeight={700} color='gray.500'>aquí</Button>
              </Text>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
