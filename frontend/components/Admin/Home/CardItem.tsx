import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

export const CardItem = () => {
  return (
    <HStack
      width='full'
      justifyContent='space-between'
      rounded='lg'
      paddingX='1rem'
      paddingY='0.5rem'
      fontSize='0.95rem'
      _hover={{
        background: 'purple.50',
        cursor: 'default'
      }}
    >
      <HStack
        spacing='0.75rem'
      >
        <Box
          width='2rem'
          height='2rem'
          position='relative'
          border='1px solid'
          borderColor='gray.300'
          rounded='full'
        >
          <Image
            src='/images/isotipo.png'
            alt='Logo'
            layout='fill'
          />
        </Box>
        <Text>Producto 1</Text>
      </HStack>
      <Text>S/. 10.00</Text>
    </HStack>
  )
}
