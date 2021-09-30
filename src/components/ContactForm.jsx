import React from 'react'
import {Typography, Container, Grid, TextField, FormControl,Stack, Button, Box} from '@mui/material'
import contact_svg from '../images/contactus.svg'

function ContactForrm() {
    return (
        <Container>
        <Typography variant = "h3" fontWeight = "bold" textAlign = "center" color = "secondary">Contact Me!</Typography>
            <Grid container mt = {6} justifyContent = "space-around" >
                <Grid item md = {6}  width = "100%">
                  <FormControl fullWidth >
                        <Stack spacing = {2}>
                            <TextField id="outlined-basic" label="Name" variant="filled" placeholder = "Enter your name..." color = "warning" fullWidth/>
                            <TextField id="outlined-basic" label="Email ID" variant="filled" placeholder = "Enter your Email ID.." color = "warning" fullWidth/>
                            <TextField label = "Feedback/Query" placeholder = "Enter your feedback/Query.." color = "warning" variant = "filled" multiline rows = {4}  fullWidth/>
                            
                        </Stack>
                        
                  </FormControl>
                  <Box textAlign = "center">
                    <Button variant = "contained" style = {{backgroundColor : "orange"}} sx = {{mt :2}}>Submit</Button>
                  </Box>
                  
                </Grid>
                <Grid md = {4} sx = {{display : { md : "block", sm : 'none'}}}> <img src={contact_svg} width = "100%" height = "100%" alt="" /> </Grid>
            </Grid>
        </Container>
    )
}

export default ContactForrm
