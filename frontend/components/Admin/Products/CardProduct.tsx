import { Badge, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
}

export const CardProduct = ({ name, description, image, price, stock }: Props) => {
  return (
    <Box
      cursor='pointer'
      background='white'
      boxShadow='lg'
      paddingX={5}
      paddingY={4}
      rounded='lg'
    >
      <HStack alignItems='start' spacing={4}>
        <HStack flex='none' mr={1} alignItems='center' justifyContent='center' rounded='lg' overflow='hidden' border='1px solid' borderColor='gray.50'>
          <Image src={image === '' ? '/images/user-default.png' : image} alt={name} width={95} height={95} priority={true} objectFit='cover' objectPosition='center'/>
        </HStack>
        <VStack alignItems='left' spacing={0}>
          <Text noOfLines={1} fontSize='1.5rem' fontWeight={600} color='gray.700'>{name}</Text>
          <Text noOfLines={2} fontSize='1.05rem' fontWeight={400} color='gray.600'>{description}</Text>
          <Text noOfLines={1} fontSize='1.2rem' fontWeight={700} color='gray.600'>S/. {price.toFixed(2)}</Text>
          <HStack spacing={1.5} pt={1} flexWrap='wrap'>
            <Badge my={1.5} fontSize='0.75rem' variant='outline' colorScheme={stock === 0 ? 'red' : 'green'}>
              Stock: {stock}
            </Badge>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  )
}
