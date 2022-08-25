import React from 'react';
import {mountOrder} from 'dashboard/Dashboard/Order';

function DashboardOrder(){
    const ref = React.useRef(null);

    React.useEffect(() => {
        if(ref.current && mountOrder)
        {
            mountOrder(ref.current);
        }
    }, []);

    return <div ref={ref}></div>
}

export default DashboardOrder;