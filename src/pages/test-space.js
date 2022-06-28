import { Link } from "gatsby";
import React from "react";


function TestSpacePage() {
    return <main>
        <title>테스트페이지</title>

        <div style={{ display: 'flex',  gap:20}}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/test">test</Link>
            <Link to="test-space">test-space</Link>
            <h1>테스트 스페이스 페이지 입니다.</h1>
        </div>
    </main>
}
  
export default TestSpacePage;