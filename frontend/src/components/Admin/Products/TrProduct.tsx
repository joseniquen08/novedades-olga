import { Avatar, Button, Checkbox, Flex, Td, Text, Tr } from '@chakra-ui/react';
import { ChangeEvent, Dispatch } from 'react';

type Props = {
  index: number;
  image: string;
  name: string;
  price: number;
  stock: number;
  checkedItems: boolean[];
  setCheckedItems: Dispatch<boolean[]>
}

export const TrProduct = ({ index, image, name, price, stock, checkedItems, setCheckedItems }: Props) => {

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems([checkedItems[index], e.target.checked]);
    setCheckedItems(Array.from(checkedItems, (_, i) => {
      return false;
    }))
  }

  return (
    <Tr>
      <Td
        width='4rem'
      >
        <Checkbox
          isChecked={checkedItems[index]}
          onChange={handleCheckbox}
        />
      </Td>
      <Td
        minWidth={{ sm: "250px" }}
        padding={0}
      >
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Avatar
            src={image}
            w='4rem'
            borderRadius='12px'
            me='18px'
            border='none'
          />
          <Flex direction='column'>
            <Text
              fontSize='sm'
              color='#999'
              fontWeight='normal'
              minWidth='100%'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minW='150px'>
        <Flex direction='column'>
          <Text fontSize='sm' color='#999' fontWeight='normal'>
            {price}
          </Text>
          <Text fontSize='sm' color='gray.400' fontWeight='normal'>
            {stock}
          </Text>
        </Flex>
      </Td>
      {/* <Td>
        <Badge
          bg={status === "Online" ? "green.400" : "transparent"}
          color={status === "Online" ? "white" : colorStatus}
          fontSize='sm'
          p='3px 10px'
          borderRadius='8px'
          border={status === "Online" ? "none" : "1px solid #999"}
          fontWeight='normal'>
          {status}
        </Badge>
      </Td> */}
      <Td>
        <Button p='0px' bg='transparent' variant='no-hover'>
          <Text
            fontSize='sm'
            color='gray.400'
            fontWeight='bold'
            cursor='pointer'>
            Edit
          </Text>
        </Button>
      </Td>
    </Tr>
  )
}
