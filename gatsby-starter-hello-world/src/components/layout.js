import React from 'react';

import { Link } from 'gatsby';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Link to="/" className="home">Start</Link>
      </Header>
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout;