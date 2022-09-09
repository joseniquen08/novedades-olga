import { Box, Button, Divider, HStack, Text } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { ModalAddProduct } from "./ModalAddProduct";

interface CategoryType {
  name: string;
  tag: string;
  status: string;
}

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  categories: CategoryType[];
}

export const ProductsTitle = ({ isOpen, onOpen, onClose, categories }: Props) => {
  return (
    <Box>
      <HStack
        justifyContent='space-between'
      >
        <Text
          fontSize='1.7rem'
          fontWeight={600}
          color='purple.700'
        >
          Productos
        </Text>
        <HStack>
          <Button
            leftIcon={<FiPlusCircle/>}
            variant='ghost'
            colorScheme='purple'
            onClick={onOpen}
          >
            Agregar
          </Button>
          <ModalAddProduct isOpen={isOpen} onClose={onClose} categories={categories}/>
        </HStack>
      </HStack>
      <Divider marginY='0.5rem' borderColor='gray.300'/>
    </Box>
  )
}
