import React from "react";
import {mount} from 'profile/ProfileApp';
import {Appbar, Footer} from '../components/share';
import BasicFooter from '@mfb/common/footer/basicFooter';

function ProfileApp(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current);
        }
    })
    return <div ref={appRef}/>
}

export default function ProfilePage(){
    return (
        <div>
            {/* <Appbar/> */}
            <ProfileApp/>
            <BasicFooter/>
        </div>
    );
}