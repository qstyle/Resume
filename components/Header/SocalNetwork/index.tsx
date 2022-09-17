import React from 'react'
import { Flex, Icon } from '@chakra-ui/react' 

import { vkIcon , telegramIcon} from './icon'
 


export const SocalNetwork: React.FC = ( ) => {
return(
  <Flex  justifyContent='end' mt='2' gap='2'>
    <Icon color='' w='7' h='7'>{telegramIcon}</Icon>
    <Icon w='7' h='7'>{vkIcon}</Icon>
    <Icon w='7' h='7'>{telegramIcon}</Icon>
  </Flex>
)
}