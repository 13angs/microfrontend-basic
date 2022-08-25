import React from 'react';
import {mount} from 'dashboard/BashboardApp';
import Button from '@mui/material/Button';

function Dashboard(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current);
        }
    })
    return <div ref={appRef}/>
}

export default function BashbordPage(){

    return (
        <div>
            <Dashboard/>
        </div>
    );
}