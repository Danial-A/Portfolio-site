import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Stack , Container} from '@mui/material';
import myImage from '../images/social.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function HeroSection() {
  
  return (
   <div style = {{width : "100%", backgroundColor : 'orange', marginTop : "1.5vh", height : '71vh', justifyContent : 'center', alignItems : 'center', paddingTop : '5vh', marginBottom : '10vh'}}>
    <Container fixed sx = {{height : '100%'}}>
      <Grid container spacing={2} pb = "10vh" style = {{borderBottom:"0.5px solid orange", height : '100%'}} justifyContent = "space-between">
        <Grid item xs={12} md = {5} mb = "5vh" textAlign = "center">
           <Typography
            mt = "25%"
            variant = "h2"
            fontWeight = "bold"
            color = "purple"
            >Hi, I'm Danial!
            </Typography>
            
            <Typography
                mt = '4vh'
            >A Full Stack Web Developer specializing in MERN Stack Development from Islamabad, Pakistan. I create good looking websites for people ranging from personal blogs to corporate businesses.</Typography>
         
           <Button variant = "contained" sx = {{ mt: "2vh"}} color = "secondary">Contact Me?</Button>
 
        </Grid>
        <Grid item xs={5} justifyContent = "center" mt = "10vh">
            <Box sx = {{display : {xs:"none" , md : "block" , height :'100%'}}}><img src={myImage} alt="" width = "100%" /></Box>
        </Grid>
        <Grid item xs = {1} mt = "12%" sx = {{display : {md : 'block', xs : "none" }}} mr = {1} justifyContent = "center">
                <Stack direction  = "column" spacing = {2}>               
                    <FacebookIcon fontSize = "large" color = "secondary" />
                    <InstagramIcon fontSize = "large" color = "secondary"/>
                    <TwitterIcon fontSize = "large" color = "secondary"/>
                    <LinkedInIcon fontSize = "large" color = "secondary"/>
                    <GitHubIcon fontSize = "large" color = "secondary"/>
                </Stack>
        </Grid>
        <Grid item xs = {12}  sx = {{display : {md : 'none', sm : "block" }, textAlign : 'center', width : "100%"}}>
            <Stack direction = "row" spacing = {2} justifyContent = "center" >               
                <FacebookIcon fontSize = "large" color = "secondary" />
                <InstagramIcon fontSize = "large" color = "secondary"/>
                <TwitterIcon fontSize = "large" color = "secondary"/>
                <LinkedInIcon fontSize = "large" color = "secondary"/>
                <GitHubIcon fontSize = "large" color = "secondary"/>
            </Stack>

        </Grid>
      </Grid>
      </Container>
      </div>
  );
}
