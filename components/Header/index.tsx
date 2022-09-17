import React from 'react'

import { Flex, Text, Box } from '@chakra-ui/react' 

import { NightSwitch } from './NightSwitch'
import{ SocalNetwork } from './SocalNetwork'

export const Header: React.FC= () => {
return(
  <Flex w='100%' p='3' borderBottom='1px'>
    <Box w='100%'>
      <Text 
        w='100%'
        fontSize='xl'
        fontWeight='medium'
      >
        Ordin Dmitry
      </Text>
      <Text fontSize='sm'>
        Frontend developer
      </Text>
    </Box>
    <Box w='100%'  justifyContent='end'>
      <NightSwitch />
      <SocalNetwork />
    </Box>
  </Flex>
)
}