import React from 'react'
import { 
  Text,
  Box,
  Link,
  Heading,
  Stack 
} from '@chakra-ui/react'
 
export const AboutMe: React.FC = () => (
  <Box>
    <Heading size='md'>About me:</Heading>
    <Text mt='5'>
      I am 32 years old, married and have a child.
      I live in Kirov, Russian Federation.
      Currently working as a front-end developer (middle level).
    </Text>
    <Text>December 2, 2020 completed Html Academy courses.</Text>
    <Heading mt='5' size='md'>My certificates:</Heading>
    <Stack>
    <Link
     mt='5'
     color='teal.500' href='https://assets.htmlacademy.ru/certificates/intensive/155/122528.pdf?1584981643&_ga=2.24071485.680870164.1664108654-1004014431.1664108653'>
      HTML & CSS level 1
    </Link>
    <Link 
     color='teal.500'
     href='https://assets.htmlacademy.ru/certificates/intensive/157/122528.pdf?1590649324&_ga=2.224848285.680870164.1664108654-1004014431.1664108653'>
      HTML & CSS level 2
    </Link>
    <Link 
     color='teal.500' 
     href='https://assets.htmlacademy.ru/certificates/intensive/167/122528.pdf?1595865720&_ga=2.44637731.680870164.1664108654-1004014431.1664108653'>
      JavaScript. Professional Development of Web Interfaces
    </Link>
    <Link  
      color='teal.500'
      href='https://assets.htmlacademy.ru/certificates/intensive/171/122528.pdf?1661969491&_ga=2.15720881.680870164.1664108654-1004014431.1664108653'>
        React. Development of Complex Front-end Applications
    </Link>
    </Stack>
  </Box>
)