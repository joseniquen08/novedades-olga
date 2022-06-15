import { Box, chakra, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

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
        width='full'
        justifyContent='center'
        height='4.5rem'
        borderBottom='1px solid'
        borderBottomColor='#d6d3d1'
      >
        <Flex
          width='full'
          alignItems='center'
          justifyContent='space-between'
          marginX='auto'
        >
          <HStack
            alignItems='center'
          >
            <Box
              width='3rem'
              height='3rem'
              position='relative'
            >
              <Image
                src='/images/isotipo.png'
                layout='fill'
              />
            </Box>
            <Heading
              marginLeft='0.5rem'
              fontSize='3xl'
            >Novedades Olga</Heading>
          </HStack>
          <HStack
            alignItems='center'
            spacing={3}
          >
            <HStack
              alignItems='center'
              spacing={4}
            >
              <HStack
                display={{ base: 'none', md: 'inline-flex' }}
                marginRight='1rem'
                spacing={2}
              >
                <Text>Tejido</Text>
                <Text>Costura</Text>
                <Text>Joyas</Text>
                <Text>Temporadas</Text>
              </HStack>
            </HStack>
          </HStack>
        </Flex>
      </VStack>
    </chakra.nav>
  )
}