import React from "react";
import {containerMount} from 'container/Components';

function ContainerApp({value}){
    const appRef = React.useRef(null);
// console.log(containerMount)
React.useEffect(() => {
    if(appRef.current && containerMount)
    {
        containerMount(appRef.current, value);
    }
})
return <div ref={appRef}/>
}

export default function ContainerPage(){ 
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true)
    }
    
    return (
        <div>
            <button onClick={handleClick}>OPEN DIALOG</button>
            <ContainerApp value={open} />
        </div>
    );
}