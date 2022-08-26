import React from 'react';
import {mountProduct} from 'dashboard/Dashboard/Product';

function DashboardProduct(){
    const ref = React.useRef(null);

    React.useEffect(() => {
        if(ref.current && mountProduct)
        {
            mountProduct(ref.current);
        }
    }, []);

    return <div ref={ref}></div>
}

export default DashboardProduct;