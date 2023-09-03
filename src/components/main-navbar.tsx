import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
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
       <Typography>
       Test
       </Typography>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default MainNavbar
