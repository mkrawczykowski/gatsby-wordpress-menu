import React from 'react';
import Layout from '../components/layout';

const PageTemplate = props => {
  return (
    <Layout>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  )
}

export default PageTemplate;