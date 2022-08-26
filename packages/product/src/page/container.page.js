import React from 'react';
import {mount} from 'container/ProductApp';
import {Appbar, Footer} from '../components/share';

function ProductApp(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current);
        }
        console.log(appRef.current)
    })
    return <div ref={appRef}/>
}

export default function ProductPage(){
    return (
        <div>
            <Appbar/>
            <ProductApp/>
            <Footer/>
        </div>
    );
}