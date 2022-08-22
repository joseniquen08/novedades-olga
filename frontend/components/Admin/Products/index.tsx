import { gql, useQuery } from '@apollo/client';
import { Box, IconButton, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, VStack } from '@chakra-ui/react';
import { GetAllCategoriesDataType } from '@custom-types/admin/productTypes';
import { FiEdit } from 'react-icons/fi';
import { ProductsTitle } from './ProductsTitle';
import { TabPanelContent } from './TabPanelContent';

const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      categories {
        name
        tag
        status
      }
      errors {
        message
      }
    }
  }
`;

export const ProductsComponent = () => {

  const { isOpen: isOpenAddProduct, onOpen: onOpenAddProduct, onClose: onCloseAddProduct } = useDisclosure();

  const { loading: loadingCategories, data: dataCategories } = useQuery<GetAllCategoriesDataType>(GET_ALL_CATEGORIES);

  return (
    <Box
      minHeight='100vh'
      width='full'
      zIndex={20}
      background='gray.50'
    >
      <VStack
        marginX='auto'
        maxWidth='7xl'
        paddingX='1.5rem'
        paddingY='1.5rem'
        minHeight='100vh'
        justifyContent={loadingCategories ? 'center' : 'start'}
      >
          {
            loadingCategories ? (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.300'
                color='purple.400'
                size='xl'
              />
            ) : (
              <Box width='full'>
                <ProductsTitle
                  isOpen={isOpenAddProduct}
                  onOpen={onOpenAddProduct}
                  onClose={onCloseAddProduct}
                  categories={dataCategories ? dataCategories.getAllCategories.categories : []}
                />
                <Box>
                  <Tabs
                    variant='line'
                    colorScheme='purple'
                    isFitted
                    isLazy
                  >
                    <TabList>
                      {
                        dataCategories && dataCategories.getAllCategories.categories.map(({ name, tag, status }) => (
                          <Tab key={tag} isDisabled={status == 'inactive'}>{name}</Tab>
                        ))
                      }
                      <IconButton
                        colorScheme='purple'
                        rounded={0}
                        aria-label='Edit categories'
                        icon={<FiEdit />}
                      />
                    </TabList>
                    <TabPanels>
                      {
                        dataCategories && dataCategories.getAllCategories.categories.map(({ name, tag, status }) => (
                          <TabPanel key={tag} padding={0}>
                            <TabPanelContent name={name} tag={tag}/>
                          </TabPanel>
                        ))
                      }
                    </TabPanels>
                  </Tabs>
                </Box>
              </Box>
            )
          }
      </VStack>
    </Box>
  )
}
