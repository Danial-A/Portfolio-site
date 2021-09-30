import React from 'react'
import {Typography, Container, Grid} from '@mui/material'
import about from '../images/about.svg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
function AboutSection() {
    return (
        <div style = {{marginBottom : "10vh"}}>
            <Container>
                <Typography variant = "h3" fontWeight = "bold" color = "secondary" textAlign = "center">About Me</Typography>
                
                <Grid container justifyContent= "space-between" mt = {6} >
                    <Grid md = {5} item sx = {{display: { md : 'block' , xs :"none"}}}>
                    <img src={about}  width = "100%"alt="" />
                    </Grid>
                    <Grid md = {5} sm = {12} item>
                    <Typography variant = "h5" fontWeight = "500" mb = {1}>Who am i?</Typography>
                        <Typography variant = "body1" mb = {3}>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias odio enim aspernatur earum quibusdam at blanditiis voluptatem recusandae molestias velit eaque atque voluptates delectus expedita, similique voluptatum et, ut harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem accusantium fuga, sunt vitae cupiditate labore quia minus velit magni ipsam ex. Sit sequi omnis asperiores praesentium, harum eum iusto?"</Typography>
                        <Typography variant = "caption" color = "#aba89f">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus maiores temporibus dolore mollitia magnam!</Typography><FormatQuoteIcon/>
                    </Grid>
                  
                </Grid>
            </Container>
        </div>
    )
}

export default AboutSection
