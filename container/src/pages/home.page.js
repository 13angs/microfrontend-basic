import React from "react";
import {mount} from 'home/HomeApp';
import BasicFooter from '@mfb/common/footer/basicFooter';

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
            <BasicFooter/>
        </div>
    );
}