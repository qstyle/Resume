import React from 'react'
import { Box } from '@chakra-ui/react'  
 
import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'

export const MainLayout: React.FC = () => (
  <Box p='5px' maxW='1200px'>
    <Header />
    <Body />
    <Footer />
  </Box>
)
