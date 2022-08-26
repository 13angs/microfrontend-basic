import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelIcon from '@mui/icons-material/Cancel';
import BasicSnackbar from '@mfb/common/snackbar/snackbar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1, padding: '5% 20%' }}>
            <Card sx={{ padding: '12px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant='h4'
                            sx={{ fontWeight: 600, display: 'flex', justifyContent: 'center' }}
                        >Profile setting</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            required
                            id="outlined-required"
                            label="First name"
                            defaultValue="First name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Last name"
                            defaultValue="Last name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            defaultValue="Username"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue="Email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            defaultValue="Password"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Confirm password"
                            defaultValue="Confirm password"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '12px' }}>
                    <BasicSnackbar title={"ยืนยัน"} />
                    <Button variant="contained" color='error' startIcon={<CancelIcon />}>
                        ยกเลิก
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}
