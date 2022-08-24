import React from 'react';
import {mount} from 'checkout/CheckoutApp';
import {Appbar, Footer} from '../components/share';

function CheckoutApp(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current);
        }
    })
    return <div ref={appRef}/>
}

export default function CheckoutPage(){
    return (
        <div>
            {/* <Appbar/> */}
            <CheckoutApp/>
            {/* <Footer/> */}
        </div>
    );
}