import { Button, useDisclosure } from '@chakra-ui/react';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';

export const SignButton = () => {

  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure();
  const { isOpen: isOpenRegister, onOpen: onOpenRegister, onClose: onCloseRegister } = useDisclosure();

  return (
    <>
      <Button
        fontWeight={400}
        variant='ghost'
        color='gray.600'
        onClick={onOpenLogin}
      >
        Ingresar
      </Button>
      <LoginModal isOpen={isOpenLogin} onClose={onCloseLogin} onOpenRegister={onOpenRegister}/>
      <RegisterModal isOpen={isOpenRegister} onClose={onCloseRegister} onOpenLogin={onOpenLogin}/>
    </>
  )
}
