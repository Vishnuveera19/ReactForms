import {TextField, Button, Card,  Typography, Box, Grid, CardContent} from '@mui/material';
import { inputFormElements6} from './Sampleform6'

export default function Sample6() {
    const margin={margin:"0 5px"}
    return (
        <div>
          <Grid style={{padding: "80px 5px 0 5px"}}>
            <Card style = {{maxWidth: 600, margin: "0 auto"}}>
              <CardContent>
                <Typography variant='h5' color='S- Light' align='center'>
                  Temp PayInput
                </Typography>
                <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
                  Fill all the Mandatory fields 
                </Typography>
           <form>
            <Grid container spacing ={2}>
              {
                inputFormElements6.map(input=> <Grid xs={input.xs} sm={input.sm} item>
                  <TextField {...input}  InputLabelProps={{shrink:true}}/> 
                  </Grid>)
              }
               </Grid>
               <Grid container spacing={1} paddingTop={'20px'}>
              
              <Grid item xs ={12} align="right" >
                <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
                <Button type = "submit" variant='contained' color='primary' >SAVE</Button>
              </Grid>
              </Grid>
    
    
           
           </form>
           </CardContent>
           </Card>
           </Grid>
        </div>
    );
} 