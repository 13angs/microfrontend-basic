import React from "react";
import {mount} from 'home/HomeApp';
import {Appbar, Footer} from '../components/share';

function HomeApp(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current);
        }
    })
    return <div ref={appRef}/>
}

export default function HomePage(){
    return (
        <div>
            {/* <Appbar/> */}
            <HomeApp/>
            {/* <Footer/> */}
        </div>
    );
}