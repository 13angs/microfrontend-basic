import React from 'react';
import Typography from '@mui/material/Typography';
import { createRoot } from 'react-dom/client';
import Dialog from '@mui/material/Dialog';

function ContainerPage(props) {
    const { openDialog } = props;
    return (
        <div>
            <Typography>Container page</Typography>
            <Dialog
                open={openDialog}
                aria-labelledby="draggable-dialog-title"
            >123</Dialog>
        </div>
    );
}

const containerMount = (element, value) => {
    console.log(value)
    const root = createRoot(element);
    root.render(<ContainerPage openDialog={value} />);
}

export default containerMount;