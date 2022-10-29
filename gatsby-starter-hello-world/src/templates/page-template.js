import React from 'react';
import Layout from '../components/layout';

import { graphql } from 'gatsby'; // to solution 3





// ========== solution 1 - pageContext - not the best for big amounts of data ============
//
// pageContext jest w props. Zamiast pisać props.pageContext, możemy zrobić destructuring propsów i wyciągnąć tylko pageContext
// zawartość pageContext jest brana z 'context' w createPage w gatsby-node.js.
// Właściwości obiektu context są dodawane do poniższego pageContext oraz jako zmienna do graphQL
// https://egghead.io/lessons/gatsby-display-wordpress-page-content-in-gatsby-page-template-components

// const PageTemplate = ({ pageContext }) => {
//   return (
//     <Layout>
//       { pageContext.id }
//     </Layout>
//   )
// }




// ========== solution 2 - props ============
//
// const PageTemplate = (props) => {
//   return (
//     <Layout>
//       <pre>{JSON.stringify(props, null, 2)}</pre>
//     </Layout>
//   )
// }




// ========== solution 3 - query page contents here instead of in gatsby-node.js like in sol. 1 ============
//

// poniższe spowoduje, że w propsach pojawi się właściwość data i w niej będzie: wpgraphql{page{}} itd.
// https://egghead.io/lessons/gatsby-display-wordpress-page-content-in-gatsby-page-template-components
// <pre>{JSON.stringify(props, null, 2)}</pre>

export const query = graphql`
  query($id: ID!){
    wpgraphql {
      page(id: $id) {
        title
        content
      }
    }
  }
`

const PageTemplate = ({ data }) => {
  const page = data.wpgraphql.page;

  return(
    <>
      { JSON.stringify(data, null, 2) }
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export default PageTemplate;