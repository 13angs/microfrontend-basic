import React from 'react';
import {mountProfileSetting} from 'profile/Profile/Setting';

function ProfileSettingApp(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mountProfileSetting)
        {
            mountProfileSetting(appRef.current);
        }
    })
    return <div ref={appRef}/>
}

export default function ProfileSettingPage(){
    return (
        <div>
            <ProfileSettingApp/>
        </div>
    );
}