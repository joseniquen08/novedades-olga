import { gql, useQuery } from "@apollo/client";
import { Box, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GetProductsByTagDataType } from '@custom-types/admin/productTypes';
import { setRefetchAddProduct } from "@store/features/products/productSlice";
import type { RootState } from '@store/index';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardProduct } from './CardProduct';

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

export const TabPanelContent = ({ name, tag }: Props) => {

  const startRefetch = useSelector((state: RootState) => state.product.startRefetch);
  const dispatch = useDispatch();

  const { loading, data, refetch } = useQuery<GetProductsByTagDataType>(GET_PRODUCTS_BY_TAG, {
    variables: {
      tag: tag,
    }
  });

  useEffect(() => {
    if (startRefetch) {
      refetch();
      dispatch(setRefetchAddProduct(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startRefetch]);

  return (
    <Box>
      {
        loading ? (
          <HStack justifyContent='center' paddingY='1.5rem' color='gray.700'>
            <Spinner size='sm'/>
            <Text textAlign='center' fontWeight={500}>Cargando</Text>
          </HStack>
        ) : (
          <SimpleGrid columns={2} spacing='2rem' paddingY='1.5rem' paddingX='0.5rem'>
            {
              data && data.getProductsByTag.products.map(({ id, name, description, image, price, stock }) => (
                <CardProduct key={id} name={name} description={description} image={image} price={price} stock={stock}/>
              ))
            }
          </SimpleGrid>
        )
      }
    </Box>
  )
}
