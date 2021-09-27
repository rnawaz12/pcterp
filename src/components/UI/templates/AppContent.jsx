import React from 'react'

export default function AppContent(props) {

    const _style = {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingTop: "50px"

    }


    return (
        <div style={_style}>
            {props.children}
        </div>
    )
}
