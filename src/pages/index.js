import { Link } from "gatsby"
import React from "react"

// styles

// data


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page!@!@!@!@!@</title>
      <div style={{ display: 'flex',  gap:20}}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/test">test</Link>
            <Link to="/test-space">test-space</Link>
        </div>
      <h1>hii</h1>
    </main>
  )
}

export default IndexPage
