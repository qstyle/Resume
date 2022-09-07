import React from 'react'
import { FormControl, FormLabel,  useColorMode, Switch } from '@chakra-ui/react'  

export const NightSwitch: React.FC = ( ) => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  const getLabel = colorMode === 'light' ? 'night' : 'light'
  
  return (
    <FormControl display='flex'>
      <FormLabel mb='0'>Switch to {getLabel}</FormLabel>
      <Switch 
        onChange={toggleColorMode}
        checked={colorMode === 'light'} />
    </FormControl>
  )
}