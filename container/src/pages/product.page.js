import React from 'react';
import {mount} from 'product/ProductApp';
import {Appbar, Footer} from '../components/share';

function ProductApp({value}){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current, value);
        }
    })
    return <div ref={appRef}/>
}

export default function ProductPage(){
    return (
        <div>
            <ProductApp value="a"/>
        </div>
    );
}