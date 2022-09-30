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
    <Heading mt='5' size='md'>Work experience:</Heading>
    <Text mt='5'>October 2020 - December 2021 developed tactivPro startup (application for search and results of offline events):</Text>
    <Text>
      Development of interfaces and customization of application logic,
      I was investigating and proposing technologies that speeded up feature delivery and further maintenance, participation
      in the discussion of the expected features and functionality of the project.
      the startup could not be brought to release due to a random political situation in the world.
    </Text>
    <Text mt='5'>December 2021 startup frisbiiStudio (SPA constructor app with interesting logic):</Text>
    <Text>
      I create and customize interfaces and their behavior,
      I also do code reviews and participate in the resolution of the project resolution.
      I was investigating and proposing technologies that speeded up feature delivery and further maintenance.
    </Text>
  </Box>
)