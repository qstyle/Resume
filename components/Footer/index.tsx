import React from 'react'
import {
   Flex,
   Link,
   Text,
   useMediaQuery 
  } from '@chakra-ui/react'
 
import { ModalThisTechnology } from './ModalThisTechnology'

export const Footer: React.FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 768px)')
  
  return (
    <Flex
      p='3'
      mt='3'
      w='100%'
      borderTop='1px'
      alignItems='center' 
      justifyContent='space-between'
      flexDirection={isMobile ? 'row' : 'column'}
    >
      <Text mb={isMobile ? '0': '3'} >Designed and created by Dmitry Ordin</Text>
      <Flex alignItems='center' gap='5'>
        <ModalThisTechnology />
        <Link color='teal.500'  href='https://github.com/qstyle/resume'>
          This project on GitHub
        </Link>
      </Flex>
    </Flex>
)}