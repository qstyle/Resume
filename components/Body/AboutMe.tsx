import React from 'react'
import { 
  Box,
  Text,
  Link,
  Stack,
  Heading,
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
    <Text mt='5'>December 2021 - November  2022 startup frisbiiStudio (SPA constructor app with interesting logic):</Text>
    <Text>
      I create and customize interfaces and their behavior,
      I also do code reviews and participate in the resolution of the project resolution.
      I was investigating and proposing technologies that speeded up feature delivery and further maintenance.
    </Text>
    <Text mt='5'>November  2022 -  1 March  web studio `Palax` </Text>
    <Text>
      As an experienced Front-end Developer, Senior Developer, and Team Leader, 
      I specialize in the development of the client-facing components of projects.
      With a keen eye for detail and a passion for quality,
      I lead a team of two developers, overseeing their work, conducting thorough code reviews,
      and providing expert guidance on technical matters.
      My responsibilities also include setting tasks,
      monitoring their progress, and ensuring timely completion 
      of all deliverables. By leveraging my skills in leadership, 
      collaboration, and technical expertise, I have consistently delivered
      exceptional results that exceed client expectations.
    </Text>
  </Box>
)