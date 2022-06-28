import { Link } from "gatsby";
import React from "react";


function AboutPage() {
    return <main>
        <title>자기소개</title>
        <div style={{ display: 'flex',  gap:20}}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/test">test</Link>
            <Link to="/test-space">test-space</Link>
        </div>
        <h1>자기소개 페이지 입니다.</h1>
    </main>
}
  
export default AboutPage;