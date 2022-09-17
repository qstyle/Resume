import React from 'react'
import {
    Box,
    Switch,
    FormLabel,
    FormControl, 
    useColorMode,
    } from '@chakra-ui/react'  

enum ColorMode {
  Light = 'light',
  Night = 'night'
}

export const NightSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  const activeColor = colorMode === ColorMode.Light ? ColorMode.Night : ColorMode.Light
  
  return (
      <FormControl display='flex' justifyContent='end'>
        <FormLabel fontSize='sm' mb='0'>Switch to {activeColor}</FormLabel>
        <Switch 
          onChange={toggleColorMode}
          checked={colorMode === ColorMode.Light} />
      </FormControl>
  )
}