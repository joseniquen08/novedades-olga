import { Avatar, Button, ButtonGroup, Divider, HStack, Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal, Tooltip, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FiBox, FiGrid, FiSettings, FiTruck, FiUsers } from 'react-icons/fi';
import Cookies from 'universal-cookie';
import { SideItem } from './SideItem';

export const Sidebar = (props: any) => {

  const cookies = new Cookies();
  const router = useRouter();

  const logout = () => {
    cookies.remove('token', { path: '/' });
    router.reload();
  }

  return (
    <VStack
      as='aside'
      position='sticky'
      top={0}
      bottom={0}
      left={0}
      height='full'
      minHeight='100vh'
      overflowX='hidden'
      overflowY='auto'
      flexDirection='column'
      paddingX='0.6rem'
      paddingY='1rem'
      borderRight='1px solid'
      borderColor='gray.300'
      justifyContent='space-between'
      flex='none'
      zIndex={50}
    >
      <VStack
        width='full'
      >
        <HStack
          paddingTop={1}
          paddingBottom={3}
          justifyContent='center'
        >
          <Tooltip hasArrow label='Inicio' placement='right' paddingX='0.75rem'>
            <Button
              variant='unstyled'
              width='3rem'
              height='3rem'
              position='relative'
              onClick={() => router.push('/admin/store')}
            >
              <Image
                src='/images/isotipo.png'
                alt='Logo'
                layout='fill'
              />
            </Button>
          </Tooltip>
        </HStack>
        <Divider/>
        <VStack
          width='full'
          paddingY='0.5rem'
          spacing='0.6rem'
        >
          <SideItem label='Resumen' path='/admin/store/resume' active={router.pathname.split('/')[3] === 'resume'}>
            <FiGrid/>
          </SideItem>
          <SideItem label='Productos' path='/admin/store/products' active={router.pathname.split('/')[3] === 'products'}>
            <FiBox/>
          </SideItem>
          <SideItem label='Usuarios' path='/admin/store/users' active={router.pathname.split('/')[3] === 'users'}>
            <FiUsers/>
          </SideItem>
          <SideItem label='??rdenes' path='/admin/store/orders' active={router.pathname.split('/')[3] === 'orders'}>
            <FiTruck/>
          </SideItem>
        </VStack>
        <Divider/>
        <VStack>
          <SideItem label='Configuraci??n' path='/admin/store/settings' active={router.pathname.split('/')[3] === 'settings'}>
            <FiSettings/>
          </SideItem>
        </VStack>
      </VStack>
      <VStack>
        <Popover placement='right-start'>
          <PopoverTrigger>
            <Avatar as='button' size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          </PopoverTrigger>
          <Portal>
            <PopoverContent width='11rem' background='white'>
              <PopoverBody padding={0}>
                <ButtonGroup flexDirection='column' spacing={0} width='full'>
                  <Button width='full' rounded={0} variant='ghost' fontWeight={400}>
                    Perfil
                  </Button>
                  <Divider/>
                  <Button onClick={() => logout()} width='full' rounded={0} variant='ghost' fontWeight={400}>
                    Cerrar sesi??n
                  </Button>
                </ButtonGroup>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </VStack>
    </VStack>
  )
}
