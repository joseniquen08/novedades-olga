import { Box, Button, Divider, HStack, Text } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { ModalAddProduct } from "./ModalAddProduct";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ProductsTitle = ({ isOpen, onOpen, onClose }: Props) => {
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
          <ModalAddProduct isOpen={isOpen} onClose={onClose} />
        </HStack>
      </HStack>
      <Divider marginY='0.5rem'/>
    </Box>
  )
}
