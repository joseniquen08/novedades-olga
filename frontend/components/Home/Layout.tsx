import { Box } from '@chakra-ui/react';
import { Navbar } from '../Shared/Navbar';

type Props = {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box minHeight='100vh'>
      <Navbar/>
      {children}
    </Box>
  )
}
