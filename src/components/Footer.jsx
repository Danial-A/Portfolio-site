import React from 'react'
import {Container, Grid, Typography, Stack, Link} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles ({
    company_links:{
        textDecoration : 'none',
        fontSize : "16px",
        fontWeight : "bold",
        transition: "0.2s ease-in",
        fontFamily : "Roboto",
        color:"black",
        '&:hover':{
            cursor:"pointer",
            color:"orange",
            fontSize:"20px"
        }
    }
})

function Footer() {
    const classes = useStyles()
    return (
        <div style = {{backgroundColor :"purple", width: "100%", height:"auto", marginTop:"5vh"}}>
        <Container>
            <Grid container spacing = {3} sx = {{ pb : "50px",pt :'40px', height :"100%"}} justifyContent = "space-around">
                <Grid item md = {4} sm = {12}>
                    <Typography variant = "h6" color = "white">Danial Ahmad</Typography>
                    <Typography variant = "body2" mt = {2} color = "white">Premier development hub for planning, building, support and enhancement of top-notch web applications.</Typography>
                    <Stack direction = "row" mt = {2} spacing = {1}>
                        <FacebookIcon sx={{color : 'white'}}/>
                        <InstagramIcon sx={{color : 'white'}}/>
                        <TwitterIcon sx={{color : 'white'}}/>
                        <GitHubIcon sx={{color : 'white'}}/>
                        <LinkedInIcon sx={{color : 'white'}}/>
                    </Stack>
                </Grid>
                <Grid item md = {2}>
                    <Typography variant = "h6" color = "white">Company</Typography>
                    <Stack spacing = {2} mt = {2}>
                        <Link className = {classes.company_links} underline = "false" color = "white">Blog</Link>
                        <Link className = {classes.company_links} underline = "false" color = "white">About</Link>
                        <Link className = {classes.company_links} underline = "false" color = "white">Careers</Link>
                    </Stack>
                </Grid>
                
                <hr  style = {{color : "orange"}}/>
                <Grid item md = {2} >
                    <Typography variant = "h6" color = "white">Showcase</Typography>
                    <Stack spacing = {2} mt = {2}>
                        <Link className = {classes.company_links} underline = "false" color = "white">Portfolio</Link>
                        <Link className = {classes.company_links} underline = "false" color = "white">Services</Link>
                    </Stack>
                </Grid>
                <hr  style = {{color : "orange"}}/>
                <Grid item md = {3} mr = {2}>
                    <Typography variant = "h6" color = "white">Contact</Typography>
                    <Stack spacing = {2} mt = {2}>
                        <Link className = {classes.company_links} underline = "false" color = "white">Portfolio</Link>
                        <Link className = {classes.company_links} underline = "false" color = "white">Services</Link>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}

export default Footer
