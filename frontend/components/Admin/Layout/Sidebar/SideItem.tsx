import { Button, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  label: string;
  path: string;
  active: boolean;
  children: JSX.Element;
}

export const SideItem = ({ label, path, active, children }: Props) => {

  const router = useRouter();

  return (
    <Tooltip hasArrow label={label} placement='right' paddingX='0.75rem'>
      <Button
        variant='ghost'
        bg={active ? 'gray.100' : 'transparent'}
        color='gray.600'
        fontSize='2xl'
        onClick={() => router.push(path)}
      >
        {children}
      </Button>
    </Tooltip>
  )
}
