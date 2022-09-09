import { gql, useQuery } from "@apollo/client";
import { Box, Checkbox, HStack, Spinner, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { GetProductsByTagDataType } from "@custom-types/admin/productTypes";
import { setRefetchAddProduct } from "@store/features/products/productSlice";
import { RootState } from "@store/index";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrProduct } from "./TrProduct";

type Props = {
  name: string;
  tag: string;
}

const GET_PRODUCTS_BY_TAG = gql`
  query GetProductsByTag($tag: String!) {
    getProductsByTag(tag: $tag) {
      products {
        id
        name
        description
        price
        image
        category
        stock
      }
      errors {
        message
      }
    }
  }
`;

export const TableListProducts = ({ name, tag }: Props) => {

  const [checkedItems, setCheckedItems] = useState<boolean[]>([false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const startRefetch = useSelector((state: RootState) => state.product.startRefetch);
  const dispatch = useDispatch();

  const { loading, data, refetch } = useQuery<GetProductsByTagDataType>(GET_PRODUCTS_BY_TAG, {
    variables: {
      tag: tag,
    }
  });

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems((arr: boolean[]) => arr.map(_ => e.target.checked));
  }

  useEffect(() => {
    if (!loading && data) {
      setCheckedItems(_ => data.getProductsByTag.products.map(_ => false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  useEffect(() => {
    if (startRefetch) {
      refetch();
      dispatch(setRefetchAddProduct(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startRefetch]);

  return (
    <Box
      paddingX='1.5rem'
      boxShadow='xl'
      borderRadius='2xl'
      background='white'
    >
      {
        loading ? (
          <HStack justifyContent='center' paddingY='1.5rem' color='gray.700'>
            <Spinner size='sm'/>
            <Text textAlign='center' fontWeight={500}>Cargando</Text>
          </HStack>
        ) : (
          <>
            <Text
              paddingTop='1.5rem'
              paddingBottom='0.75rem'
              fontSize='xl'
              fontWeight={600}
              color='gray.600'
            >
              Lista de Productos
            </Text>
            <Table
              variant='simple'
              color='#fff'
            >
              <Thead>
                <Tr marginY='0.8rem' paddingLeft={0}>
                  <Th
                    background='purple.50'
                    paddingY='1rem'
                    borderBottomColor='transparent'
                    roundedLeft='xl'
                  >
                    <Checkbox
                      isChecked={allChecked}
                      isIndeterminate={isIndeterminate}
                      onChange={handleCheckbox}
                      colorScheme='purple'
                    />
                  </Th>
                  <Th
                    color='purple.500'
                    fontFamily='Poppins'
                    background='purple.50'
                    paddingY='1rem'
                    borderBottomColor='transparent'
                  >
                    Producto
                  </Th>
                  <Th
                    color='purple.500'
                    fontFamily='Poppins'
                    background='purple.50'
                    paddingY='1rem'
                    borderBottomColor='transparent'
                  >
                    Stock
                  </Th>
                  <Th
                    color='purple.500'
                    fontFamily='Poppins'
                    background='purple.50'
                    paddingY='1rem'
                    borderBottomColor='transparent'
                  >
                    Precio
                  </Th>
                  <Th background='purple.50' paddingY='1rem' borderBottomColor='transparent' roundedRight='xl'></Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  data && data.getProductsByTag.products.map(({ id, name, description, image, price, stock }, index) => (
                    <TrProduct
                      key={id}
                      index={index}
                      name={name}
                      image={image}
                      price={price}
                      stock={stock}
                      checkedItems={checkedItems}
                      setCheckedItems={setCheckedItems}
                    />
                  ))
                }
              </Tbody>
            </Table>
          </>
        )
      }
    </Box>
  )
}
