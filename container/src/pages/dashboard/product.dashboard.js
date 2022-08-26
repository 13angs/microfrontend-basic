import React from 'react';
import {mountProduct} from 'dashboard/Dashboard/Product';
import BasicFooter from '@mfb/common/footer/basicFooter';

function DashboardApp(){
    const ref = React.useRef(null);

    React.useEffect(() => {
        if(ref.current && mountProduct)
        {
            mountProduct(ref.current);
        }
    }, []);

    return <div ref={ref}></div>
}


export default function DashboardProduct(){
    return(
        <>
            <DashboardApp/>
            <BasicFooter/>
        </>
    )
}
