import { Box, Divider, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { UserType } from '@custom-types/auth';
import { HomeTitle } from './HomeTitle';

type Props = {
  user: UserType;
}

export const Home = ({ user }: Props) => {
  return (
    <Box
      minHeight='100vh'
      width='full'
      zIndex={20}
      background='gray.50'
    >
      <Box
        marginX='auto'
        maxWidth='7xl'
        paddingX='1.5rem'
        paddingY='1.5rem'
      >
        <HomeTitle name={user.name}/>
        <Box
          paddingY='1rem'
        >
          <SimpleGrid
            columns={3}
            spacing={5}
          >
            <VStack
              spacing='1rem'
              rounded='xl'
              paddingX='1.5rem'
              paddingY='1rem'
              boxShadow='lg'
              width='full'
              background='white'
            >
              <Text width='full' fontSize='1.2rem'>Últimas ventas</Text>
              <VStack width='full' spacing='0.75rem'>
                <Box>1. Prueba</Box>
                <Divider/>
                <Box>2. Prueba</Box>
                <Divider/>
                <Box>3. Prueba</Box>
                <Divider/>
                <Box>4. Prueba</Box>
                <Divider/>
                <Box>5. Prueba</Box>
              </VStack>
            </VStack>
            <VStack
              spacing='1rem'
              rounded='xl'
              paddingX='1.5rem'
              paddingY='1rem'
              boxShadow='lg'
              width='full'
              background='white'
            >
              <Text width='full' fontSize='1.2rem'>Últimas ventas</Text>
              <VStack width='full' spacing='0.75rem'>
                <Box>1. Prueba</Box>
                <Divider/>
                <Box>2. Prueba</Box>
                <Divider/>
                <Box>3. Prueba</Box>
                <Divider/>
                <Box>4. Prueba</Box>
                <Divider/>
                <Box>5. Prueba</Box>
              </VStack>
            </VStack>
            <VStack
              spacing='1rem'
              rounded='xl'
              paddingX='1.5rem'
              paddingY='1rem'
              boxShadow='lg'
              width='full'
              background='white'
            >
              <Text width='full' fontSize='1.2rem'>Últimas ventas</Text>
              <VStack width='full' spacing='0.75rem'>
                <Box>1. Prueba</Box>
                <Divider/>
                <Box>2. Prueba</Box>
                <Divider/>
                <Box>3. Prueba</Box>
                <Divider/>
                <Box>4. Prueba</Box>
                <Divider/>
                <Box>5. Prueba</Box>
              </VStack>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
