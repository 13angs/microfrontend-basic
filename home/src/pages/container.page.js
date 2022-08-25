import React from 'react';
import {ContainerPage} from 'container/Components';

// function ContainerApp(){
//     const appRef = React.useRef(null);

//     React.useEffect(() => {
//         if(appRef.current && mount)
//         {
//             mount(appRef.current);
//         }
//     })
//     return <div ref={appRef}/>
// }

export default function ContainerPage(){
    return (
        <div>
            <ContainerApp/>
        </div>
    );
}