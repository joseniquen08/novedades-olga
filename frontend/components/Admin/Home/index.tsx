import { Box, SimpleGrid } from '@chakra-ui/react';
import { UserType } from '@custom-types/auth';
import { HomeCard } from './HomeCard';
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
            <HomeCard title='Últimas ventas'/>
            <HomeCard title='Últimas ventas'/>
            <HomeCard title='Últimas ventas'/>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
