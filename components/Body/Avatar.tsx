import React from 'react'
import fs from 'fs'
import Image from 'next/image'
import AvatarSrc from '../../public/avatar/4D5q2Z3otpE.jpg'
// import {Image} from '@chakra-ui/react'

export const Avatar: React.FC = ( ) => {
// var files = fs.readdirSync()

// console.log(files)


  return(
    <Image

      width='500px'
      height='500px'
      src={AvatarSrc}
      alt="avatar" />
  )
}