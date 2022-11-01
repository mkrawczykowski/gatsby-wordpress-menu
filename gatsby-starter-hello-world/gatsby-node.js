exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            id
            uri
          }
        }
      }
    }
  `)

  const pages = result.data.wpgraphql.pages.nodes;

  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve('./src/templates/page-template.js'),
      context: {
        id: page.id,
        // poniższe wyłączam, bo dobrą praktyką jest przekazywanie tylko ID strony zamiast całej jej treści.
        // Pobranie wszystkich potrzebnych treści jest kuszące (jedno zapytanie do bazy zamiast wielu), ale przy większych ilościach
        // treści może zabraknąć pamięci, bo będzie mnóstwo rzeczy naraz do pobrania
        // https://www.gatsbyjs.com/docs/creating-and-modifying-pages/
        //
        // content: page.content,
        // title: page.title
      }
    })
  })
}