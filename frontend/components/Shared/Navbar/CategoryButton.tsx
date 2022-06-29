import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  category: string;
  route: string;
}

export const CategoryButton = ({ category , route}: Props) => {

  const router = useRouter();

  return (
    <Button
      variant='ghost'
      colorScheme='gray'
      fontWeight={500}
      color='gray.600'
      height='auto'
      paddingY='0.35rem'
      fontSize='0.95rem'
      onClick={() => router.push(`/categoria/${route}`)}
    >
      {category}
    </Button>
  )
}
