import { Box, chakra, Heading, HStack, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { CategoryButton } from './CategoryButton';

export const Navbar = () => {
  return (
    <chakra.nav
      position='sticky'
      top={0}
      zIndex={50}
      width='full'
      background='white'
    >
      <VStack
        paddingX={{ base: '1rem', md: '2.5rem' }}
        paddingY='0.35rem'
        width='full'
        justifyContent='center'
        borderBottom='1px solid'
        borderBottomColor='#d6d3d1'
        spacing={1}
      >
        <HStack
          width='full'
          alignItems='center'
          justifyContent='space-between'
          marginX='auto'
          position='relative'
        >
          <HStack
            alignItems='center'
            spacing={1}
            zIndex={1}
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
            <Heading
              fontSize='3xl'
            >Novedades Olga</Heading>
          </HStack>
          <HStack
            alignItems='center'
            spacing={3}
            zIndex={1}
          >
            <HStack
              alignItems='center'
              spacing={4}
            >
              <HStack
                display={{ base: 'none', md: 'inline-flex' }}
                alignItems='center'
                marginRight='1rem'
                spacing={3}
              >
                {/* <CategoryButton category='Temporadas' route='temporadas'/> */}
              </HStack>
            </HStack>
          </HStack>
          <HStack position='absolute' left={0} right={0} zIndex={0} justifyContent='center'>
            <InputGroup width='22rem' alignItems='center'>
              <Input
                fontSize='0.9rem'
                height='auto'
                paddingY='0.35rem'
                _focus={{
                  boxShadow: 'none',
                }}
              />
              <InputRightElement
                height='auto'
                paddingY='0.35rem'
              >
                <FaSearch/>
              </InputRightElement>
            </InputGroup>
          </HStack>
        </HStack>
        <HStack alignItems='center' justifyContent='center' width='full'>
          <CategoryButton category='Tejido' route='tejido'/>
          <CategoryButton category='Costura' route='costura'/>
          <CategoryButton category='Joyas' route='joyas'/>
        </HStack>
      </VStack>
    </chakra.nav>
  )
}