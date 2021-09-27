import React from 'react';

export default function AppHeader(props) {

    const _style = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    }
    return (
        <div style={_style}>
            {props.children}
        </div>
    )
}
