import React from 'react'
import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import CustomSwitch from './CustomSwitch'
import {CustomStackFullWidth} from '../styled/CustomStacks'
const MainNavbar = () => {
  return (
    <AppBar
    elevation={0}
    sx={{
      backgroundColor: 'background.paper',
      borderBottomColor: 'divider',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      color: 'text.secondary'
    }}
  >
    <Container maxWidth="lg">
      <Toolbar
        disableGutters
        sx={{ minHeight: 64 }}
      >
        <CustomStackFullWidth direction='row' alignItems='center' justifyContent='space-between'>
        <Typography>
       Test
       </Typography>
       <CustomSwitch/>
        </CustomStackFullWidth>
    
      
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default MainNavbar
