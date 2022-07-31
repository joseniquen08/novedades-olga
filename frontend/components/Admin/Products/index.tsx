import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from '@chakra-ui/react';
import { ProductsTitle } from './ProductsTitle';

export const ProductsComponent = () => {

  const { isOpen: isOpenAddProduct, onOpen: onOpenAddProduct, onClose: onCloseAddProduct } = useDisclosure();

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
        <ProductsTitle
          isOpen={isOpenAddProduct}
          onOpen={onOpenAddProduct}
          onClose={onCloseAddProduct}
        />
        <Box>
          <Tabs
            variant='line'
            colorScheme='purple'
            isFitted
            isLazy
          >
            <TabList>
              <Tab>Tejido</Tab>
              <Tab>Costura</Tab>
              <Tab>Joyas</Tab>
              <Tab isDisabled>Próximamente</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  )
}
