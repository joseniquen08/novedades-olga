import { Box, Divider, Text } from "@chakra-ui/react";

type Props = {
  name: string;
}

export const HomeTitle = ({ name }: Props) => {
  return (
    <Box>
      <Text
        fontSize='1.7rem'
        fontWeight={600}
        color='purple.800'
      >
        Bienvenid@, {name}
      </Text>
      <Divider marginY='0.5rem'/>
    </Box>
  )
}