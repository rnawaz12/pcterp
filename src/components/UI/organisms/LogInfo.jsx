import React from 'react';
import './logInfo.css';

export default function LogInfo() {
    return (
        <div className="logInfo">
            <div className="logInfoTop">
                <div className="logInfoActorName">Rehan Nawaz</div>
                <div className="logInfoChangedTime">10 minutes ago</div>
            </div>
            <div className="logInfoBottom">
                <div className="logInfoMessage">Creating a new record..</div>
            </div>
        </div>
    )
}
