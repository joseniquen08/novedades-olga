import { HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { FiRotateCw } from "react-icons/fi";
import { CardItem } from "./CardItem";

type Props = {
  title: string;
}

export const HomeCard = ({ title }: Props) => {
  return (
    <VStack
      spacing='1rem'
      rounded='xl'
      paddingX='1.25rem'
      paddingY='1rem'
      boxShadow='xl'
      width='full'
      background='white'
    >
      <HStack width='full' justifyContent='space-between'>
        <Text width='full' fontSize='1.1rem' fontWeight={400}>{title}</Text>
        <IconButton
          aria-label="Rotate"
          icon={<FiRotateCw/>}
          background='purple.50'
          color='gray.600'
          _hover={{
            background: 'purple.100',
          }}
          _active={{
            backgroundColor: 'purple.200'
          }}
        />
      </HStack>
      <VStack width='full' spacing='0.5rem'>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </VStack>
    </VStack>
  )
}
