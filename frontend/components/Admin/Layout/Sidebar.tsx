import { Avatar, Box, Button, Divider, HStack, Tooltip, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import Image from "next/image";
import { FiBox, FiGrid, FiSettings, FiUsers } from "react-icons/fi";

export const Sidebar = (props: any) => {
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
      paddingX='0.75rem'
      paddingY='1rem'
      borderRight='1px solid'
      borderColor='gray.300'
      justifyContent='space-between'
    >
      <VStack
        width='full'
      >
        <HStack
          paddingTop={1}
          paddingBottom={3}
          justifyContent='center'
        >
          <Box
            width='3rem'
            height='3rem'
            position='relative'
          >
            <Image
              src='/images/isotipo.png'
              alt='Logo'
              layout='fill'
            />
          </Box>
        </HStack>
        <Divider/>
        <VStack
          width='full'
          paddingY='0.5rem'
          spacing='0.5rem'
        >
          <Tooltip hasArrow label='Resumen' placement='right' paddingX='0.75rem'>
            <Button
              variant='ghost'
              colorScheme='gray'
              fontSize='2xl'
            >
              <FiGrid/>
            </Button>
          </Tooltip>
          <Tooltip hasArrow label='Usuarios' placement='right' paddingX='0.75rem'>
            <Button
              variant='ghost'
              colorScheme='gray'
              fontSize='2xl'
            >
              <FiUsers/>
            </Button>
          </Tooltip>
          <Tooltip hasArrow label='Productos' placement='right' paddingX='0.75rem'>
            <Button
              variant='ghost'
              colorScheme='gray'
              fontSize='2xl'
            >
              <FiBox/>
            </Button>
          </Tooltip>
        </VStack>
        <Divider/>
        <VStack>
          <Tooltip hasArrow label='Configuración' placement='right' paddingX='0.75rem'>
            <Button
              variant='ghost'
              colorScheme='gray'
              fontSize='2xl'
            >
              <FiSettings/>
            </Button>
          </Tooltip>
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
