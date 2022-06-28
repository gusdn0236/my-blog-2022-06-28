import React from "react";
import { Link } from "gatsby";

function Layout({children}) {
    return (
        <>
        <main>
            <div style={{ display: 'flex',  gap:20}}>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/test">test</Link>
                <Link to="/test-space">test-space</Link>
            </div>
            
                {children}
            
            <div>
                copyright        
            </div>
        </main>
        </>
            )
}
  
export default Layout;