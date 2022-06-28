import { Link } from "gatsby";
import React from "react";

function Head() {
    return (
        <div style={{ display: 'flex',  gap:20}}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/test">test</Link>
        <Link to="/test-space">test-space</Link>
    </div>
    )
}

export default Head;