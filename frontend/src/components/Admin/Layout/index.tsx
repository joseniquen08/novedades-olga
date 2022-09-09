import { Box, HStack } from '@chakra-ui/react';
import { UserType } from '@custom-types/auth';
import { Sidebar } from './Sidebar';

type Props = {
  children: JSX.Element;
  user: UserType;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box minHeight='100vh'>
      <HStack
        minHeight='100vh'
        spacing={0}
        width='full'
      >
        <Sidebar/>
        {children}
      </HStack>
    </Box>
  )
}
