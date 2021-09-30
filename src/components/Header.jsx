import React, {useState} from 'react'
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {IconButton, Link, Drawer, Divider, List, ListItem} from '@mui/material'
import { makeStyles } from '@mui/styles';
import ChevronRight from '@mui/icons-material/ChevronRight'

import logoImage from '../images/code.png'

const useStyles = makeStyles({
  avatar:{
    marginRight : 20
  },
  link:{
    paddingRight : 20,
    padding:"10px",
    fontSize: "40px !important",
    transition : "0.3s ease-in",
    '&:hover':{
      cursor:"pointer",
      color:"purple",
      backgroundColor:"white",
      borderRadius : '20px'
    }
  }
  ,
  menuIcon:{
    color:"white",
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  hamburger_menu_items:{
    margin: 200
  },
  navigationBar:{
    backgroundColor:"orange !important"
  },
  drawer:{
   width: "200px",
   backgroundColor:"orange !important"
  }
})



function Header() {
  const [open,setOpen] = useState(false)
  const styles = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" className = {styles.navigationBar}>
      <Toolbar>
        
        
      
      
        <Box sx = {{flexGrow : 1}}> <img src={logoImage} width = "80px" alt="" style  ={{color : "purple"}}/> </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }} className = {styles.linkContainer} >
            <Stack direction = "row" spacing = {2}>
              <Link color = "#ffff" underline = "none" className = {styles.link}><Typography variant = "h6">Home</Typography></Link>
              <Link color = "#ffff" underline = "none" className = {styles.link}><Typography variant = "h6">About Me</Typography></Link>
              <Link color = "#ffff" underline = "none" className = {styles.link}><Typography variant = "h6">Portfolio</Typography></Link>
              <Link color = "#ffff" underline = "none" className = {styles.link}><Typography variant = "h6">Contact</Typography></Link>
            </Stack>
        </Box>
        <Box sx = {{display : {md: "none", xs : "block"}}}>
          <IconButton iconStyle = {styles.largeIcon} onClick = {() => setOpen(true)}>
            <MenuIcon className = {styles.menuIcon} />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor = "right" open = {open} onOpen = {()=> setOpen(true)} onClose = {()=>setOpen(false)} classes = {{paper : styles.drawer}}>
      
        <div>
        <IconButton onClick = {()=> setOpen(false)}>
          <ChevronRight/>
        </IconButton>
        </div>
        <Divider/>
        <List className = {styles.hamburger_menu_items}>
          <ListItem sx = {{justifyContent : 'center'}}>
            <Link  underline = "none" color = "white" className = {styles.link}><Typography variant = "h6">Home</Typography></Link>
          </ListItem>
          <Divider/>
            <ListItem sx = {{justifyContent : 'center'}}>
              <Link  underline = "none" color = "white" className = {styles.link}><Typography variant = "h6">About Me</Typography></Link>
            </ListItem>
            <Divider/>
          <ListItem sx = {{justifyContent : 'center'}}>
            <Link  underline = "none" color = "white" className = {styles.link}><Typography variant = "h6">Portfolio</Typography></Link>
          </ListItem>
          <Divider/>
          <ListItem sx = {{justifyContent : 'center'}}>
          <Link  underline = "none" color = "white" className = {styles.link}><Typography variant = "h6">Contact</Typography></Link>
        </ListItem>
        <Divider/>
        </List>

      </Drawer>
    </AppBar>
    </Box>
  );
}

export default Header;
