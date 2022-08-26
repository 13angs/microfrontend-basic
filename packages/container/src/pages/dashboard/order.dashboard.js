import React from 'react';
import {mountOrder} from 'dashboard/Dashboard/Order';
import BasicFooter from '@mfb/common/footer/basicFooter';

function DashboardApp(){
    const ref = React.useRef(null);

    React.useEffect(() => {
        if(ref.current && mountOrder)
        {
            mountOrder(ref.current);
        }
    }, []);

    return <div ref={ref}></div>
}

export default function DashboardOrder(){
    return (
        <>
            <DashboardApp/>
            <BasicFooter/>
        </>
    )
}