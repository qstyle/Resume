import React from 'react'
import {useDisclosure,
   Modal as ChakraModal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader, 
    ModalBody,
    ModalFooter,
    ModalCloseButton, 
    Stack,
    Link,
} from '@chakra-ui/react' 
 
export const ModalThisTechnology: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        color='teal.500'
        variant='ghost'
        onClick={() =>  onOpen()}
      >
       This Technology
      </Button>
      <ChakraModal onClose={onClose} size='sm' isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Technology on this project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Stack>
            <Link color='teal.500' href='https://reactjs.org'>React</Link>
            <Link color='teal.500' href='https://www.typescriptlang.org'>Type Script</Link>
            <Link color='teal.500' href='https://nextjs.org'>Next JS</Link>
            <Link color='teal.500' href='https://chakra-ui.com'>Chakra-ui</Link>
           </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  )
}