import React from 'react'
import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import CustomSwitch from './CustomSwitch'
import {CustomStackFullWidth} from '../styled/CustomStacks'
import { useDispatch, useSelector } from '../redux/store/store'
import {setThemeMode} from '../redux/slices/themeChange'
const MainNavbar = () => {
  const { themeMode} = useSelector((state:any)=>state.themeMode)
  const dispatch = useDispatch()
  const isChecked = themeMode==='dark' ? true : false
  const handleThemeMode = (e:any)=>{
    if(e.target.checked){
dispatch(setThemeMode('dark'))
    }
    else{
      dispatch(setThemeMode('light'))
    }
  }
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
    <CustomSwitch handleChange={handleThemeMode} isChecked={isChecked}/>
        </CustomStackFullWidth>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default MainNavbar
