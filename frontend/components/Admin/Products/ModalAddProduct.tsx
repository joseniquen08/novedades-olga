import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Textarea, VStack } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAddProduct = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      size='xl'
      isCentered
    >
      <ModalOverlay backdropFilter='blur(3px)' />
      <ModalContent
        as='form'
        // onSubmit={addCareer}
        px={3}
        py={2}
      >
        <ModalHeader fontSize='1.5rem' color='purple.700'>Agregar Producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={5}>
            <FormControl isRequired variant="floating">
              <Input
                // ref={nameCareerRef}
                id='name_career'
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
              <FormLabel color='gray.400' htmlFor='name_career'>Nombre</FormLabel>
            </FormControl>
            <FormControl isRequired>
              <Select
                variant='outline'
                placeholder='Universidad'
                color='gray.400'
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
                // onChange={handleSelectUniversity}
              >
                {/* {
                  data && (
                    data.map(({ _id, name }) => (
                      <option key={_id} value={_id}>{name}</option>
                    ))
                  )
                } */}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <Select
                variant='outline'
                placeholder='Categoría'
                color='gray.400'
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
                // onChange={handleSelectCategory}
              >
                <option value='Arquitectura'>Arquitectura</option>
                <option value='Arte'>Arte</option>
                <option value='Ciencias'>Ciencias</option>
                <option value='Ciencias Sociales'>Ciencias Sociales</option>
                <option value='Derecho'>Derecho</option>
                <option value='Ingeniería'>Ingeniería</option>
              </Select>
            </FormControl>
            <FormControl isRequired variant="floating">
              <Input
                // ref={facultyCareerRef}
                id='faculty_career'
                type='text'
                _focus={{
                  boxShadow: 'none',
                  borderColor: 'gray.400',
                }}
                placeholder=' '
                fontSize='0.95rem'
                fontWeight='500'
              />
              <FormLabel color='gray.400' htmlFor='faculty_career'>Facultad</FormLabel>
            </FormControl>
            <FormControl isRequired variant="floating">
              <Textarea
                // ref={descriptionCareerRef}
                id='description_career'
                resize='none'
                placeholder=' '
                _focus={{
                  boxShadow: 'none',
                  borderColor: 'gray.400',
                }}
                fontSize='0.95rem'
                fontWeight='500'
              />
              <FormLabel color='gray.400' htmlFor='description_career'>Descripción</FormLabel>
            </FormControl>
            <HStack w='full' spacing={3}>
              <FormControl isRequired variant="floating" w='50%'>
                <NumberInput min={6} max={12} defaultValue={6}>
                  <NumberInputField
                    // ref={durationCareerRef}
                    id='duration_career'
                    _focus={{
                      boxShadow: 'none',
                      borderColor: 'gray.400',
                    }}
                    placeholder=' '
                    fontSize='0.95rem'
                    fontWeight='500'
                    onKeyDown={(e) => {e.preventDefault()}}
                  />
                  <FormLabel color='gray.400' htmlFor='duration_career'>Duración</FormLabel>
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isRequired w='50%'>
                <Select
                  variant='outline'
                  color='gray.400'
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
                  // onChange={(e) => setTypeDurationCareer(e.target.value)}
                >
                  <option value="semestres" defaultChecked>semestres</option>
                  <option value="ciclos">ciclos</option>
                </Select>
              </FormControl>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" colorScheme='blackAlpha'>Agregar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
