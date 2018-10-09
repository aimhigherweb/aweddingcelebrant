import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header';
import Footer from './footer';

import '../global.scss';
import './content.scss';

const Layout = ({ children, data, home }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={home && 'home'}>
          {children}
        </main>
        <Footer />
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
