import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query{
      wpgraphql {
        menu(id: "dGVybToyMA==") {
          menuItems {
            nodes {
              id
              path
              label
            }
          }
        }
      }
    }
  `)

  const items = data.wpgraphql.menu.menuItems.nodes

  return (
    <>
      <header>
        {items.map(item => 
          <Link to={item.path} className="home" key={item.id}>{item.label}</Link>
        )}
        
      </header>
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout;