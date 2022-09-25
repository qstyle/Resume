import React from 'react'
import fs from 'fs'
import Image from 'next/image'
import { Image as ChakraImage } from '@chakra-ui/react'
import AvatarSrc from '../../public/avatar/avatar.jpg'
// import {Image} from '@chakra-ui/react'

export const Avatar: React.FC = () => (
  <Image
    width='400px'
    height='500px'
    src={AvatarSrc}
    alt="avatar" />
)