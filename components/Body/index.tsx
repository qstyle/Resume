import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
 
import { ContentWrapper } from './ContentWrapper'
import { Avatar } from './Avatar'

export const Body: React.FC = () => {
const [isMobile] = useMediaQuery('(min-width: 768px)')

const styles = isMobile ? {
  templateRows:'repeat(3, 1fr)',
  templateColumns:'repeat(3, 1fr)'
  } : {
    templateRows:'repeat(1, 1fr)',
    templateColumns:'repeat(1, 1fr)'
  }

  return(
  <Grid {...styles} gap='2' mt='4'>
    <GridItem rowSpan={1} colSpan={1}>
      <ContentWrapper>
        <Avatar />
      </ContentWrapper>
    </GridItem>
    <GridItem rowSpan={3} colSpan={2}>
      <ContentWrapper>
        <Box w='100%' bg='tomato'>bingo1</Box>
      </ContentWrapper>
    </GridItem>
    <GridItem rowSpan={1} colSpan={1}>
      <ContentWrapper>
        <Box w='100%' bg='tomato'>bingo1</Box>
      </ContentWrapper>
    </GridItem>
  </Grid>
)
}