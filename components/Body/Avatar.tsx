import React from 'react'
import Image from 'next/image'
import { Flex } from '@chakra-ui/react'

import AvatarSrc from '../../public/avatar/avatar.jpg'

export const Avatar: React.FC = () => (
  <Flex justifyContent='center'>
    <Image
      width='400px'
      height='500px'
      src={AvatarSrc}
      alt="avatar"
    />
  </Flex>
)