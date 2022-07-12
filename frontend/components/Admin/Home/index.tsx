import { Box, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box
      minHeight='100vh'
      width='full'
    >
      <Box
        marginX='auto'
        maxWidth='7xl'
        paddingX='1.5rem'
        paddingY='2rem'
      >
        <Box>
          <Text
            fontSize='1.5rem'
            fontWeight={500}
            color='gray.700'
          >
            Bienvenid@, José
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
