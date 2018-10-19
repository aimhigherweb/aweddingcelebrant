import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '../components/layout'

import './gallery.scss';

const meta = {
	name: 'Gallery',
	description: 'Photos taken at the various events I officiate',
	slug: '/gallery'
};

const Gallery = ({data}) => {
  let imageData = data.allFile.edges;

  let gallery = imageData.map((image) => (
    <Img
        fixed={image.node.childImageSharp.fixed}
        Tag='figure'
        imgStyle={{objectFit: 'top', height: 'auto'}}
    />
  ))

  return  (
    <Layout meta={meta} customClass="gallery">
      <h1>Gallery</h1>
      <div class="gallery-images">
        {gallery}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {
      extension: {regex: "/(jpg)/"},
      relativeDirectory: {eq: "gallery"}
    }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 500, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default Gallery
