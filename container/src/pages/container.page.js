import React from 'react';
import Typography from '@mui/material/Typography';
import { createRoot } from 'react-dom/client';
import Dialog from '@mui/material/Dialog';

function ContainerPage(props) {
    const { openDialog, setOpenDialog } = props;
    const handleClose = () => {
        setOpenDialog(false)
    }
    return (
        <div>
            <Typography>Container page</Typography>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >123
            {/* <button onClick={handleClose}>close</button> */}
            </Dialog>
        </div>
    );
}

const containerMount = (element, value, closeDialog) => {
    const root = createRoot(element);
    root.render(<ContainerPage openDialog={value} setOpenDialog={closeDialog}/>);
}

export default containerMount;
