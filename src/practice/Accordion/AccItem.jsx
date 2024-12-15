

import React, { useState } from 'react'

const AccItem = ({ac}) => {
    const [showContent, setShowContent] = useState(false);
    return (<>
        <div onClick={() => setShowContent(!showContent)}>{ac.title}</div>
        {showContent && <ul>
            {ac.content.map(item => <li>{item.name}</li>)}
        </ul>}
    </>
    )
}

export default AccItem