import { Box, Divider, Text } from "@chakra-ui/react";

export const HomeTitle = ({ name }: { name: string }) => {
  return (
    <Box>
      <Text
        fontSize='1.5rem'
        fontWeight={500}
        color='gray.800'
      >
        Bienvenid@, {name}
      </Text>
      <Divider marginY='0.5rem'/>
    </Box>
  )
}