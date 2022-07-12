import { Avatar, Button, Divider, HStack, Tooltip, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import Image from "next/image";
import { useRouter } from 'next/router';
import { FiBox, FiGrid, FiSettings, FiTruck, FiUsers } from "react-icons/fi";
import { SideItem } from './SideItem';

export const Sidebar = (props: any) => {

  const router = useRouter();

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
          <SideItem label='Órdenes' path='/admin/store/orders' active={router.pathname.split('/')[3] === 'orders'}>
            <FiTruck/>
          </SideItem>
        </VStack>
        <Divider/>
        <VStack>
          <SideItem label='Configuración' path='/admin/store/settings' active={router.pathname.split('/')[3] === 'settings'}>
            <FiSettings/>
          </SideItem>
        </VStack>
      </VStack>
      <VStack>
        <Wrap>
          <WrapItem>
            <Tooltip hasArrow label='Perfil' placement='right' paddingX='0.75rem'>
              <Avatar as='button' size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </Tooltip>
          </WrapItem>
        </Wrap>
      </VStack>
    </VStack>
  )
}
