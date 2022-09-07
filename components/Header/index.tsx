import React from 'react'

import { Flex } from '@chakra-ui/react' 

import { NightSwitch } from './NightSwitch'

export const Header: React.FC= () => {
return(
  <Flex>
    <NightSwitch />
  </Flex>
)
}