import React, {useState} from 'react'
import { Box } from '@chakra-ui/react'  
 
import {Header} from './Header'

export const MainLayout: React.FC = ( ) => {
  
  return (
    <Box maxW='1600px'>
        <Header />
    </Box>
  )
}