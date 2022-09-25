import React from 'react'
import { Flex, Icon, Link } from '@chakra-ui/react' 

import { vkIcon , telegramIcon, gitHubIcon} from './icon'
 


export const SocalNetwork: React.FC = ( ) => (
  <Flex  justifyContent='end' mt='2' gap='2'>
    <Link href='https://t.me/qstyle'>
      <Icon color='' w='7' h='7'>{telegramIcon}</Icon>
    </Link>
    <Link href='https://vk.com/quadro911'>
      <Icon w='7' h='7'>{vkIcon}</Icon>
    </Link>
    <Link href='https://github.com/qstyle'>
      <Icon w='7' h='7'>{gitHubIcon}</Icon>
    </Link>
  </Flex>
)
