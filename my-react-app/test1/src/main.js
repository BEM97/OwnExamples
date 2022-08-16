import * as React from "react";
// import "./main.css";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProTip from './ProTip';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Main() {
  return (


<Container maxWidth="sm">

</Container>




























//     <Container maxWidth="sm">
//     <Box sx={{ my: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Create React App example
//       </Typography>
//       <ProTip />
//       <Copyright />
//     </Box>
//   </Container>







    // <Box sx={{ flexGrow: 1 }}>
    // <Container maxWidth="xl">
    // <Grid container spacing={1}>
    //   <Grid xs={8}>
    //   <Item>
    //   <Button variant="outlined">Click ME!</Button>
    //   </Item>
    //   </Grid>
    //   <Grid xs={4}>
    //   <Item>
    //   <Button variant="outlined">Click ME!</Button>
    //   </Item>
    //   </Grid>
     
    // </Grid>
    
    // </Container>
    // </Box>
 
 
   
  );
}

export default Main;
