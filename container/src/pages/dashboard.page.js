import React from 'react';
import {mount} from 'dashboard/BashboardApp';
import BasicFooter from '@mfb/common/footer/basicFooter';

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
            <BasicFooter/>
        </div>
    );
}