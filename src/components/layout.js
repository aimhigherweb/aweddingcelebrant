import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header';
import Footer from './footer';
import Logo from '../images/logo.png';

import '../global.scss';
import './content.scss';

const Layout = ({ children, data, home, meta, customClass }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            siteUrl
          }
        }
      }
    `}
    render={data => {
      const url= data.site.siteMetadata.siteUrl;
      const siteTitle = data.site.siteMetadata.title;

      return (
        <Fragment>
          <Meta {...meta} url={url} siteName={siteTitle} />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className={home ? 'home' : customClass}>
            {children}
          </main>
          <Footer />
        </Fragment>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Meta = ({name, description, slug, image, siteName, url}) => {
  let siteUrl = url,
      title = name + ' | ' + siteName;

  if(!name) {
    title = siteName;
  }

  if (!image) {
      image = Logo;
  }

  return (
      <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={siteUrl + slug} />

          <meta name="twitter:card" content="summary_large_image" />
          <link rel="shortcut icon" href={Logo} />
          <link rel="icon" sizes="192x192" href={Logo} />
          <link rel="apple-touch-icon" href={Logo} />
          <meta name="theme-color" content="#3e3582" />
          <link rel="mask-icon" href={Logo} color="#3e3582" />
          <base href="/" />

          {/* Facebook */}
          <meta property="og:url" content={siteUrl + slug} />
          
          <meta property="og:title" content={title} />
          <meta property="og:image" content={image} />
          <meta property="og:description" content={description} />

          {/* Twitter */}
          <meta name="twitter:url" content={siteUrl + slug} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />

          <link href='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet' />
      </Helmet>
  );
};


export default Layout
