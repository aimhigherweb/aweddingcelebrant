import React from 'react'
import Layout from '../components/layout'

const meta = {
	name: '404 - Page Not Found',
	description: 'Whoops, something went wrong here. Try going back to the home and selecting a different page',
	slug: '/404'
};

const NotFoundPage = () => (
  <Layout meta={meta}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
