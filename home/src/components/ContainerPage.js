import React from "react";
import {containerMount} from 'container/Components';

function ContainerApp(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && containerMount)
        {
            containerMount(appRef.current);
        }
    })
    return <div ref={appRef}/>
}

export default function ContainerPage(){
    return (
        <div>
            <ContainerApp/>
        </div>
    );
}