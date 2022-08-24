import React from "react";
import { containerMount } from 'container/Components';

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
        <div>
            <button onClick={handleClick}>OPEN DIALOG</button>
            <ContainerApp value={open} closeDialog={setOpen} />
        </div>
    );
}