import React from 'react'
import { 
    Tag,
    Box,
    Text,
    TagLabel,
  } from '@chakra-ui/react'

import { 
  Language,
  SoftSkills,
  MainHardSkills,
  ProgressHardSkills,
  } from './data'

 
export const Skills: React.FC = () => (
  <>
  <Box>
      <Text>Language</Text>
      {Language.map((it)=>
        <Tag 
          borderRadius='full'
          variant='solid'
          colorScheme='purple'
          key={it}
          m='1'
        >
          <TagLabel >{it}</TagLabel>
        </Tag>
      )}
    </Box>
    <Box mt='2'>
      <Text>Hard Skills</Text>
      {MainHardSkills.map((it)=>
        <Tag 
          borderRadius='full'
          variant='solid'
          colorScheme='green'
          key={it}
          m='1'
        >
          <TagLabel >{it}</TagLabel>
        </Tag>
      )}
    </Box>
    <Box mt='2'>
    <Text>In progress</Text>
      {ProgressHardSkills.map((it)=>
        <Tag 
          borderRadius='full'
          variant='solid'
          colorScheme='facebook'
          key={it}
          m='1'
        >
          <TagLabel >{it}</TagLabel>
        </Tag>
      )}
      </Box>
      <Box mt='2'>
        <Text>Soft Skills</Text>
        {SoftSkills.map((it)=>
          <Tag 
            borderRadius='full'
            variant='solid'
            colorScheme='teal'
            key={it}
            m='1'
          >
            <TagLabel >{it}</TagLabel>
          </Tag>
        )}
      </Box>
  </>
)