import React from 'react'
import { Typography , Grid, Card, CardActions, CardContent, CardMedia, Button, Container} from '@mui/material'
import codeImage from '../images/code.jpeg'
function Projects() {
    return (
        <Container maxWidth = "lg" sx = {{textAlign : "center", borderBottom : '1px solid orange', mb : 6}}>
        <Typography variant = "h2" justifyContent = "center" mb = {6} fontWeight = "bold" color = "secondary" borderBottom = " 5px solid purple" display = "inline-block" pb = "10px" borderRadius ="6px">My Projects</Typography>
        
           <Grid container spacing = {5} mb = "5vh" justifyContent= "center">
           <Grid item md = {3}>
           <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={codeImage}
                alt="green iguana"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign = "center">
              Frontend
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolor adipisci consectetur nihil neque cum suscipit, id asperiores commodi saepe inventore! Ducimus, voluptas. Tempora odio magni error quaerat? Ex, nesciunt.
              </Typography>
              </CardContent>
              <CardActions>
                  <Button size="medium" >More?</Button>
              </CardActions>
            </Card>
           </Grid>
           <Grid item md = {3}>
           <Card sx={{ maxWidth: 345 }}>
           <CardMedia
             component="img"
             height="140"
             image={codeImage}
             alt="green iguana"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" textAlign = "center">
               Backend
             </Typography>
             <Typography variant="body2" color="text.secondary">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, doloremque quisquam. Molestiae molestias corrupti quia maxime aut nam iure doloribus recusandae at assumenda magni ab quaerat dolorem, suscipit facere laboriosam!
             </Typography>
           </CardContent>
           <CardActions>
           <Button size="medium">More?</Button>
         </CardActions>
         </Card>
           </Grid>
           <Grid item md = {3}>
           <Card sx={{ maxWidth: 345 }}>
           <CardMedia
             component="img"
             height="140"
             image={codeImage}
             alt="green iguana"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" textAlign = "center">
               Full-Stack
             </Typography>
             <Typography variant="body2" color="text.secondary">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, doloremque quisquam. Molestiae molestias corrupti quia maxime aut nam iure doloribus recusandae at assumenda magni ab quaerat dolorem, suscipit facere laboriosam!
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="medium">More?</Button>
           </CardActions>
         </Card>
           </Grid>
           <Grid item md = {3}>
           <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={codeImage}
                alt="green iguana"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign = "center">
              Frontend
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolor adipisci consectetur nihil neque cum suscipit, id asperiores commodi saepe inventore! Ducimus, voluptas. Tempora odio magni error quaerat? Ex, nesciunt.
              </Typography>
              </CardContent>
              <CardActions>
                  <Button size="medium" >More?</Button>
              </CardActions>
            </Card>
           </Grid>
           </Grid>
           <Typography></Typography>
        </Container>
    )
}

export default Projects
