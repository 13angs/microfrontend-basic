import React from "react";
import { containerMount } from 'container/Components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ContainerApp({ value, setValue }) {
    const appRef = React.useRef(null);
    // console.log(containerMount)
    React.useEffect(() => {
        if (appRef.current && containerMount) {
            containerMount(appRef.current, value, setValue);
        }
    })
    return <div ref={appRef} />
}

export default function ContainerPage() {
    const [open, setOpen] = React.useState(false);

    console.log(open)
    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{display: 'flex', justifyContent:'center', padding: '18px'}}>
            <Button variant='contained' color='success' onClick={handleClick}>OPEN DIALOG</Button>
            <ContainerApp value={open} closeDialog={setOpen} />
        </Box>
    );
}