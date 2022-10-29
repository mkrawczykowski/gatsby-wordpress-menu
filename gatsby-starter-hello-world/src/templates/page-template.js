import React from 'react';
import Layout from '../components/layout';


// pageContext jest w props. Zamiast pisać props.pageContext, możemy zrobić destructuring propsów i wyciągnąć tylko pageContext
// zawartość pageContext jest brana z 'context' w createPage w gatsby-node.js.
// Właściwości obiektu context są dodawane do poniższego pageContext oraz jako zmienna do graphQL
// https://egghead.io/lessons/gatsby-display-wordpress-page-content-in-gatsby-page-template-components
const PageTemplate = ({ pageContext }) => {
  return (
    <Layout>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      { pageContext.id }
    </Layout>
  )
}

export default PageTemplate;