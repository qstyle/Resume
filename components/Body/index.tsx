import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
 
import { Avatar } from './Avatar'
import { Skills } from './Skills'
import { AboutMe } from './AboutMe'
import { ContentWrapper } from './ContentWrapper'

export const Body: React.FC = () => {
const [isMobile] = useMediaQuery('(min-width: 768px)')

const styles = isMobile ? {
    templateColumns:'repeat(3, 1fr)'
  } : {
    templateColumns:'repeat(1, 1fr)'
  }

  return (
    <Grid {...styles} gap='2' mt='4'>
      <GridItem rowSpan={1} colSpan={1}>
        <ContentWrapper>
            <Avatar />
        </ContentWrapper>
      </GridItem>
      <GridItem rowSpan={3} colSpan={2}>
        <ContentWrapper>
          <AboutMe />
        </ContentWrapper>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <ContentWrapper>
          <Skills />
        </ContentWrapper>
      </GridItem>
    </Grid>
  )
}