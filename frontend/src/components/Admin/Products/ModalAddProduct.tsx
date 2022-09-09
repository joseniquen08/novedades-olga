import { gql, useMutation } from '@apollo/client';
import { Box, Button, FormControl, FormLabel, HStack, Icon, IconButton, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberInput, NumberInputField, Select, Text, Textarea, VStack } from '@chakra-ui/react';
import { uploadImageService } from '@lib/uploadImage';
import { setRefetchAddProduct } from '@store/features/products/productSlice';
import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { FiEdit3, FiImage } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

interface CategoryType {
  name: string;
  tag: string;
  status: string;
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
  categories: CategoryType[];
}

const ADD_PRODUCT = gql`
  mutation AddProduct($input: AddProductInput) {
    addProduct(input: $input) {
      product {
        name
      }
      errors {
        message
      }
    }
  }
`;

export const ModalAddProduct = ({ isOpen, onClose, categories }: Props) => {

  const fileRef = useRef<HTMLInputElement>(null);
  const nameProductRef = useRef<HTMLInputElement>(null);
  const descriptionProductRef = useRef<HTMLTextAreaElement>(null);
  const priceProductRef = useRef<HTMLInputElement>(null);
  const stockProductRef = useRef<HTMLInputElement>(null);

  const [priceValue, setPriceValue] = useState<string>('0.00');
  const [priceKeyboard, setPriceKeyboard] = useState<number>(0);
  const [image, setImage] = useState<string>();
  const [stockValue, setStockValue] = useState<number>(0);
  const [categoryProduct, setCategoryProduct] = useState<string>('');

  const [imageError, setImageError] = useState<boolean>(false);

  const [isLoadingAddProduct, setIsLoadingAddProduct] = useState<boolean>(false);

  const dispatch = useDispatch();

  const [addProductMutation, { data: dataProduct, loading: isLoadingAddProductMutation }] = useMutation(ADD_PRODUCT);

  const processImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = URL.createObjectURL(e.currentTarget.files![0]);
    setImage(imageUrl);
  }

  const handleSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryProduct(e.currentTarget.value);
  }

  const priceKeyboardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Backspace') {
      setPriceKeyboard(val => {
        return Math.floor(val/10);
      });
    } else if (Number(e.key) || e.key == '0') {
      setPriceKeyboard(val => {
        if (val === 0) {
          return Number(e.key);
        } else {
          return val*10 + Number(e.key);
        }
      });
    }
  }

  const stockKeyboardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Backspace') {
      setStockValue(val => {
        return Math.floor(val/10);
      });
    } else if (Number(e.key) || e.key == '0') {
      setStockValue(val => {
        if (val === 0) {
          return Number(e.key);
        } else {
          return val*10 + Number(e.key);
        }
      });
    }
  }

  const addProduct = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (fileRef.current?.files?.length === 0) {
      setImageError(true);
    } else {
      setIsLoadingAddProduct(true);
      const imageUrl = await uploadImageService(fileRef.current!.files![0]);
      if (imageUrl) {
        await addProductMutation({
          variables: {
            input: {
              name: nameProductRef.current!.value,
              description: descriptionProductRef.current!.value,
              price: parseFloat(priceProductRef.current!.value),
              image: imageUrl,
              category: categoryProduct,
              stock: parseInt(stockProductRef.current!.value)
            },
          },
        });
      }
      setIsLoadingAddProduct(false);
    }
  }

  useEffect(() => {
    if (priceKeyboard !== 0) {
      switch (priceKeyboard.toString().length) {
        case 1:
          setPriceValue('0.0' + priceKeyboard.toString());
          break;
        case 2:
          setPriceValue('0.' + priceKeyboard.toString());
          break;
        default:
          setPriceValue(priceKeyboard.toString().slice(0,priceKeyboard.toString().length - 2) + '.' + priceKeyboard.toString().slice(-2));
          break;
      }
    } else {
      setPriceValue('0.00');
    }
  }, [priceKeyboard]);

  useEffect(() => {
    if (!isLoadingAddProductMutation && !isLoadingAddProduct && dataProduct) {
      onClose();
      setImage(undefined);
      setPriceValue('0.00');
      setStockValue(0);
      dispatch(setRefetchAddProduct(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProduct, isLoadingAddProductMutation, isLoadingAddProduct]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      size='2xl'
      isCentered
    >
      <ModalOverlay backdropFilter='blur(3px)' />
      <ModalContent
        as='form'
        onSubmit={addProduct}
        px={3}
        py={2}
        rounded='xl'
      >
        <ModalHeader fontSize='1.6rem' color='purple.700'>Agregar Producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <HStack width='full' height='full' spacing={4}>
              <VStack
                flex='none'
                width='8.5rem'
                height='8.5rem'
                spacing={0}
                position='relative'
                rounded='xl'
                backgroundColor='gray.100'
              >
                <input
                  type='file'
                  ref={fileRef}
                  onChange={processImage}
                  accept='image/*'
                  style={{ display: 'none' }}
                />
                {
                  image ? (
                      <>
                        <Box width='full' height='full' overflow='hidden' rounded='xl'>
                          <Img src={image} alt={image} boxSize='8.5rem' objectFit='cover' objectPosition='center'/>
                        </Box>
                        <IconButton
                          aria-label='Edit image'
                          icon={<FiEdit3 />}
                          size='sm'
                          position='absolute'
                          colorScheme='purple'
                          rounded='full'
                          top={-3}
                          right={-3}
                          onClick={() => fileRef.current?.click()}
                        />
                      </>
                    ) : (
                    <VStack
                      as='button'
                      type='button'
                      backgroundColor='gray.100'
                      _hover={{
                        backgroundColor: 'gray.200'
                      }}
                      width='full'
                      height='full'
                      justifyContent='center'
                      onClick={() => fileRef.current?.click()}
                      color='gray.700'
                      rounded='xl'
                      border={imageError ? '2px solid red' : 'transparent'}
                      boxShadow={imageError ? 'rgba(255, 0, 0, 0.2) 0px 3px 8px' : 'none'}
                    >
                      <Icon as={FiImage} width={9} height={9}/>
                      <Text fontSize='0.8rem' fontWeight={600} textAlign='center'>Agregar imagen</Text>
                    </VStack>
                  )
                }
              </VStack>
              <VStack spacing={4} width='full'>
                <FormControl isRequired variant="floating">
                  <Input
                    ref={nameProductRef}
                    id='name_product'
                    type='text'
                    _focus={{
                      boxShadow: 'none',
                      borderColor: 'gray.400',
                    }}
                    placeholder=' '
                    fontSize='0.95rem'
                    fontWeight='500'
                    autoFocus
                  />
                  <FormLabel color='gray.500' htmlFor='name_product'>Nombre</FormLabel>
                </FormControl>
                <FormControl isRequired variant="floating">
                  <Textarea
                    ref={descriptionProductRef}
                    id='description_product'
                    resize='none'
                    placeholder=' '
                    _focus={{
                      boxShadow: 'none',
                      borderColor: 'gray.400',
                    }}
                    fontSize='0.95rem'
                    fontWeight='500'
                  />
                  <FormLabel color='gray.500' htmlFor='description_product'>Descripción</FormLabel>
                </FormControl>
              </VStack>
            </HStack>
            <HStack spacing={3}>
              <FormControl isRequired>
                <Select
                  variant='outline'
                  placeholder='Categoría'
                  color='gray.500'
                  fontWeight='500'
                  borderRadius='lg'
                  w='full'
                  flex='none'
                  _focus={{
                    boxShadow: 'none',
                    borderColor: 'gray.400',
                  }}
                  _hover={{
                    borderColor: 'inherit',
                  }}
                  onChange={handleSelectCategory}
                >
                  {
                    categories.map(({ name, tag }) => (
                      <option key={tag} value={tag}>{name}</option>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl isRequired variant="floating">
                <NumberInput
                  value={priceValue}
                >
                  <NumberInputField
                    ref={priceProductRef}
                    id='price_product'
                    _focus={{
                      boxShadow: 'none',
                      borderColor: 'gray.400',
                    }}
                    placeholder=' '
                    fontSize='0.95rem'
                    color='gray.500'
                    fontWeight='600'
                    onKeyDown={priceKeyboardHandler}
                    textAlign='right'
                    paddingInlineEnd={3}
                  />
                  <FormLabel color='gray.500' htmlFor='price_product'>Precio</FormLabel>
                </NumberInput>
              </FormControl>
              <FormControl isRequired variant="floating">
                <NumberInput
                  value={stockValue}
                >
                  <NumberInputField
                    ref={stockProductRef}
                    id='stock_product'
                    _focus={{
                      boxShadow: 'none',
                      borderColor: 'gray.400',
                    }}
                    placeholder=' '
                    fontSize='0.95rem'
                    color='gray.500'
                    fontWeight='600'
                    onKeyDown={stockKeyboardHandler}
                    textAlign='right'
                    paddingInlineEnd={3}
                  />
                  <FormLabel color='gray.500' htmlFor='stock_product'>Stock</FormLabel>
                </NumberInput>
              </FormControl>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button isLoading={isLoadingAddProduct} type="submit" colorScheme='purple'>Agregar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
