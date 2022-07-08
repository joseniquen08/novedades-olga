import { Box, HStack } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

type Props = {
  children: JSX.Element;
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
