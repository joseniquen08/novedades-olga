
import { Button, Divider, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { HiOutlineIdentification, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

const MotionButton = motion(Button);

export const RegisterModal = ({ isOpen, onClose, onOpenLogin }: Props) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [lengthPasswordError, setLengthPasswordError] = useState(false);
  const [equalPasswordError, setEqualPasswordError] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const handleShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(showPasswordConfirmation => !showPasswordConfirmation);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setLengthPasswordError(false);
  }

  const handlePasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(e.target.value);
    setEqualPasswordError(true);
  }

  const handleLoginModal = () => {
    onClose();
    onOpenLogin();
  }

  const register = (e: FormEvent<HTMLDivElement>): void => {
    e.preventDefault();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale'>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Registrarse</ModalHeader>
        <ModalCloseButton/>
        <Divider/>
        <ModalBody>
          <VStack
            as='form'
            w='full'
            paddingX='1rem'
            paddingY='1.5rem'
            spacing='0.4rem'
            onSubmit={register}
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
                Continúa con Google
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
                Continúa con Facebook
              </Button>
            </VStack>
            <HStack w='full' alignItems='center' justifyContent='center'>
              <Divider bg='gray.700' opacity={1}/>
              <Text color='gray.500' fontWeight={300}>o</Text>
              <Divider bg='gray.700' opacity={1}/>
            </HStack>
            <VStack
              w='full'
              spacing='0.5rem'
            >
              <FormControl isRequired>
                <FormLabel color='gray.600' fontSize='0.875rem' htmlFor='first_name'>Nombres Completos</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    pl='0.3rem'
                    color='gray.600'
                  >
                    <HiOutlineIdentification size={18}/>
                  </InputLeftElement>
                  <Input
                    ref={nameRef}
                    name="first_name"
                    id="first_name"
                    type='text'
                    fontSize='0.95rem'
                    fontWeight='500'
                    color='gray.600'
                    _focus={{
                      boxShadow: 'none',
                    }}
                    autoFocus
                  />
                </InputGroup>
              </FormControl>
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
                    name="email"
                    id="email"
                    type='email'
                    fontSize='0.95rem'
                    fontWeight='500'
                    color='gray.600'
                    _focus={{
                      boxShadow: 'none',
                    }}
                    onChange={() => setEmailError(false)}
                  />
                </InputGroup>
                {
                  emailError && (
                    <FormErrorMessage>El correo ya se encuentra registrado.</FormErrorMessage>
                  )
                }
              </FormControl>
              <FormControl isRequired isInvalid={lengthPasswordError}>
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
                    name="password"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    fontSize='0.95rem'
                    fontWeight='500'
                    color='gray.600'
                    _focus={{
                      boxShadow: 'none',
                    }}
                    value={password}
                    onChange={handlePassword}
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
                  lengthPasswordError && (
                    <FormErrorMessage>Ingresa por lo menos 8 caracteres.</FormErrorMessage>
                  )
                }
              </FormControl>
              <FormControl isRequired isInvalid={equalPasswordError}>
                <FormLabel color='gray.600' fontSize='0.875rem' htmlFor='password_confirmation'>Confirmar contraseña</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    pl='0.3rem'
                    color='gray.600'
                  >
                    <HiOutlineLockClosed size={18}/>
                  </InputLeftElement>
                  <Input
                    ref={passwordConfirmRef}
                    name="password_confirmation"
                    id="password_confirmation"
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    fontSize='0.95rem'
                    fontWeight='500'
                    color='gray.600'
                    _focus={{
                      boxShadow: 'none',
                    }}
                    value={passwordConfirmation}
                    onChange={handlePasswordConfirmation}
                  />
                  <InputRightAddon
                    bg='white'
                    px={0}
                    py={0}
                  >
                    <Button
                      color='gray.600'
                      onClick={handleShowPasswordConfirmation}
                    >
                      {showPasswordConfirmation ? <MdVisibilityOff size={18}/> : <MdVisibility size={18}/>}
                    </Button>
                  </InputRightAddon>
                </InputGroup>
                {
                  equalPasswordError && (
                    <FormErrorMessage>La contraseñas no coinciden.</FormErrorMessage>
                  )
                }
              </FormControl>
            </VStack>
            <VStack w='full' py='0.5rem' spacing='0.6rem'>
              <MotionButton
                type='submit'
                variant='solid'
                colorScheme='gray'
                w='full'
                whileTap={{ scale: 0.98 }}
              >Registrarme</MotionButton>
              <Text fontSize='0.9rem' textAlign='center' letterSpacing='wide'>
                ¿Ya tienes una cuenta? Inicia sesión <Button onClick={() => handleLoginModal()} variant='link'  fontSize='0.9rem' minW={0} fontWeight={700} color='gray.500'>aquí</Button>
              </Text>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
