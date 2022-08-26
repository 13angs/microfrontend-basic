import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Img from './image/images.png'

function Profile() {
  return (
    <div>
      <Grid container sx={{ margin: '2% 20%' }}>
        <Grid item xs={12}>
          <Typography
            variant='h4'
            sx={{ fontWeight: 600, display: 'flex', justifyContent: 'center' }}
          >Profile</Typography>
        </Grid>
        <Grid item xs={12} sx={{ height: '30vh', borderRadius: '12px 12px 0 0' }}>
          <img width='100%' height='100%' src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000' alt='A' />
        </Grid>
        <Grid sx={{ backgroundColor: '#DC7594', height: '60vh', borderRadius: '0 0 0 12px' }} item xs={4}>

        </Grid>
        <Box
          component="img"
          src={Img}
          alt="call to action"
          sx={{
            position: 'absolute',
            top: 280,
            left: 420,
            right: 0,
            bottom: 0,
            borderRadius: '50%',
            width: '10%',
          }}
        />
        <Grid item xs={8} sx={{border: '1px solid grey'}}>
          <Box sx={{padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant='h5' sx={{fontWeight: 500}}>Aboute me</Typography>
          My name is Adisorn. My surname is Yimsuk. I am twelve years old. 
          I weigh 60 kilos. I am 149 cms tall. My hobbies are playing games, 
          watching movies and playing football. I have four people in my family. 
          My father’s name is Bunnak Yimsuk. His hobby is collecting amulets. 
          My father likes coffee. My mother’s name is Kanokvan Yimsuk. 
          My mother likes to watch television. Her hobby is watching television. 
          My brother’s name is Gidtapon Yimsuk. His hobby is reading cartoon books. 
          My brother likes playing football. I love my family.
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile;